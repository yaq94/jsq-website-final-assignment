package com.example.dongying.servlet;

import com.example.dongying.model.Message;
import com.google.gson.Gson;
import com.google.gson.reflect.TypeToken;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.*;
import java.lang.reflect.Type;
import java.nio.charset.StandardCharsets;
import java.nio.file.Files;
import java.nio.file.Paths;
import java.util.ArrayList;
import java.util.Collections;
import java.util.List;

@WebServlet("/guestbook")
public class GuestbookServlet extends HttpServlet {
    private static final String GUESTBOOK_FILE = "guestbook.json";
    private String guestbookFilePath;
    private final Gson gson = new Gson();

    @Override
    public void init() throws ServletException {
        // Correctly resolve the path to guestbook.json in WEB-INF
        this.guestbookFilePath = getServletContext().getRealPath("/WEB-INF/" + GUESTBOOK_FILE);
    }

    @Override
    protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        List<Message> messages = readMessages();
        Collections.reverse(messages); // Show latest messages first
        req.setAttribute("messages", messages);
        req.getRequestDispatcher("/guestbook.jsp").forward(req, resp);
    }

    @Override
    protected void doPost(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        req.setCharacterEncoding("UTF-8");
        String nickname = req.getParameter("nickname");
        String content = req.getParameter("content");
        String emotionTag = req.getParameter("emotionTag");

        if (nickname != null && !nickname.trim().isEmpty() && content != null && !content.trim().isEmpty()) {
            Message newMessage = new Message(nickname, content, emotionTag);
            List<Message> messages = readMessages();
            messages.add(newMessage);
            writeMessages(messages);

            // Redirect back to the guestbook page to display the updated list
            resp.sendRedirect(req.getContextPath() + "/guestbook");
        } else {
            // Handle error case, e.g., send an error response or redirect with an error message
            resp.sendRedirect(req.getContextPath() + "/guestbook?error=true");
        }
    }

    private List<Message> readMessages() throws IOException {
        File file = new File(guestbookFilePath);
        if (!file.exists() || file.length() == 0) {
                    return new ArrayList<>();
                }

        try (Reader reader = new InputStreamReader(new FileInputStream(file), StandardCharsets.UTF_8)) {
                Type listType = new TypeToken<ArrayList<Message>>() {}.getType();
                List<Message> messages = gson.fromJson(reader, listType);
                return messages == null ? new ArrayList<>() : messages;
            }
    }

    private void writeMessages(List<Message> messages) throws IOException {
        try (Writer writer = new OutputStreamWriter(new FileOutputStream(guestbookFilePath), StandardCharsets.UTF_8)) {
                gson.toJson(messages, writer);
        }
    }
} 