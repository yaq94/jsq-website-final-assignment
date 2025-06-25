package com.example.dongying.model;

import java.text.SimpleDateFormat;
import java.util.Date;

public class Message {
    private String nickname;
    private String content;
    private long timestamp;
    private String emotionTag;

    // Default constructor for Gson
    public Message() {
    }

    public Message(String nickname, String content, String emotionTag) {
        this.nickname = nickname;
        this.content = content;
        this.emotionTag = emotionTag;
        this.timestamp = System.currentTimeMillis();
    }

    // Getters and Setters
    public String getNickname() {
        return nickname;
    }

    public void setNickname(String nickname) {
        this.nickname = nickname;
    }

    public String getContent() {
        return content;
    }

    public void setContent(String content) {
        this.content = content;
    }

    public long getTimestamp() {
        return timestamp;
    }

    public void setTimestamp(long timestamp) {
        this.timestamp = timestamp;
    }
    
    public String getEmotionTag() {
        return emotionTag;
    }

    public void setEmotionTag(String emotionTag) {
        this.emotionTag = emotionTag;
    }

    // Method to get formatted timestamp for JSP display
    public String getFormattedTimestamp() {
        SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd HH:mm");
        return sdf.format(new Date(this.timestamp));
    }
} 