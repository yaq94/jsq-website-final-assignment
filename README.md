# 东营风景历史介绍网站 - 部署说明

这是一个基于 JSP/Servlet 和 Maven 构建的 Web 应用程序。请按照以下步骤在本地部署和运行本项目。

## 1. 先决条件

在开始之前，请确保您的系统上已安装以下软件：

*   **Java Development Kit (JDK)**: 版本 1.8 或更高。
*   **Apache Maven**: 用于项目构建和依赖管理。
*   **Apache Tomcat**: 版本 9.0 或更高，作为 Servlet 容器来运行此应用。

## 2. 项目构建

1.  **克隆或下载项目**:
    将项目文件放置在您的本地工作区中。

2.  **使用 Maven 构建**:
    在项目的根目录（即 `pom.xml`所在的目录）下，打开一个终端或命令行窗口，然后执行以下 Maven 命令：

    ```bash
    mvn clean package
    ```
    lin
    L1n@SecurePwd#2023
    
    此命令会清理旧的构建，编译代码，运行测试，并将项目打包成一个 `.war` 文件。构建成功后，您可以在 `target/` 目录下找到一个名为 `dongying-website.war` 的文件。

## 3. 部署到 Tomcat

有两种常见的部署方式：

### 方式一：复制到 `webapps` 目录

1.  **启动 Tomcat**: 确保您的 Tomcat 服务器正在运行。
2.  **复制 .war 文件**: 将 `target/dongying-website.war` 文件复制到 Tomcat 安装目录下的 `webapps/` 文件夹中。
3.  **自动部署**: Tomcat 会自动检测到新的 `.war` 文件并将其解压部署。

### 方式二：使用 Tomcat 管理界面

1.  **启动 Tomcat**: 确保您的 Tomcat 服务器正在运行，并且您已经为 `manager-gui` 角色配置了用户名和密码（在 `tomcat-users.xml` 文件中）。
2.  **访问管理界面**: 在浏览器中打开 `http://localhost:8080/manager/html` (请根据您的 Tomcat端口号进行调整)。
3.  **部署**: 在 "WAR file to deploy" 部分，点击 "选择文件" 按钮，找到并选中 `target/dongying-website.war` 文件，然后点击 "Deploy" 按钮。

## 4. 访问网站

部署成功后，您可以在浏览器中通过以下地址访问该网站：

**http://localhost:8080/dongying-website/**

*   **首页**: `http://localhost:8080/dongying-website/`
*   **在线留言**: `http://localhost:8080/dongying-website/guestbook`

**注意**:
*   请将 `localhost:8080` 替换为您的 Tomcat 服务器的实际地址和端口。
*   留言数据存储在部署后的 `WEB-INF/guestbook.json` 文件中。如果您重新部署或清理Tomcat工作目录，留言数据可能会丢失。



