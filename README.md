# 🏢 Work Room

A collaborative, real-time workspace where teams can work together seamlessly. Work Room provides a platform for multiple users to enter a room, share a unique room ID, and collaborate in real-time on code, documents, and more.

![Visitors](https://api.visitorbadge.io/api/visitors?path=https%3A%2F%2Fgithub.com%2Fgarvit-exe%2Fwork-room&label=Repo%20Views&countColor=%2337d67a&labelStyle=upper)

## ✨ Features

### 🚀 Real-time Collaboration
- Code together with your team in real-time
- See cursor positions and edits from other users instantly
- Real-time synchronization of all changes

### 💻 Code Editor
- Syntax highlighting for multiple programming languages
- Auto-completion and IntelliSense
- Multiple cursors and selections
- Find and replace with regex support

### 🎨 Built-in Whiteboard
- Draw and sketch collaboratively
- Multiple drawing tools and colors
- Real-time synchronization of drawings

### 💬 Team Chat
- Built-in group chat for team communication
- @mentions and notifications
- Code snippet sharing

### 🛠 Developer Tools
- Multiple file support with file tree
- Terminal access
- Debugging support
- Extensions marketplace

### 🔒 Secure & Private
- End-to-end encrypted communication
- Self-hosted option available
- Role-based access control

### 🌐 Cross-platform
- Works on all modern browsers
- Desktop app available
- Mobile responsive design

## 🚀 Live Preview

You can view the live preview of the project [here](https://work-room-live.vercel.app/).

## 💻 Tech Stack

![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
![React Router](https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=react-router&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![NodeJS](https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white)
![ExpressJS](https://img.shields.io/badge/Express.js-404D59?style=for-the-badge)
![Socket io](https://img.shields.io/badge/Socket.io-ffffff?style=for-the-badge)
![Git](https://img.shields.io/badge/GIT-E44C30?style=for-the-badge&logo=git&logoColor=white)
![GitHub](https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white)
![Vercel](https://img.shields.io/badge/Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white)
![Docker](https://img.shields.io/badge/Docker-2496ED?style=for-the-badge&logo=docker&logoColor=white)


## ⚙️ Installation

### Method 1: Manual Installation

1. **Fork this repository:** Click the Fork button located in the top-right corner of this page.
2. **Clone the repository:**
   ```bash
   git clone https://github.com/garvit-exe/work-room.git
   ```
3. **Create .env file:**
   Inside the client and server directories create `.env` and set:

   Frontend:

   ```bash
   VITE_BACKEND_URL=<your_server_url>
   ```

   Backend:

   ```bash
   PORT=3000
   ```

4. **Install dependencies:**
   ```bash
   npm install     # Run in both client and server directories
   ```
5. **Start the servers:**
   Frontend:
   ```bash
   cd client
   npm run dev
   ```
   Backend:
   ```bash
   cd server
   npm run dev
   ```
6. **Access the application:**
   ```bash
   http://localhost:5173/
   ```
### Method 2: Docker Installation

1. **Install Docker Desktop:**

   - Download and install **Docker Desktop** from [Docker’s official website](https://www.docker.com/products/docker-desktop/).
   - Verify installation:
     ```bash
     docker --version
     ```

2. **Pull Docker Images:**

   ```bash
   # Pull Backend Image
   docker pull garvit-exe/work-room-server:latest

   # Pull Frontend Image
   docker pull garvit-exe/work-room-client:latest
   ```

3. **Run Docker Containers:**

   ```bash
   # Run Backend Container (Port 3000)
   docker run -d -p 3000:3000 --name work-room-server garvit-exe/work-room-server:latest

   # Run Frontend Container (Port 5173)
   docker run -d -p 5173:5173 --name work-room-client garvit-exe/work-room-client:latest
   ```

4. **Access the application:**
   ```bash
   http://localhost:5173/
   ```

## 🔮 Features for Next Release

- **Admin Permission:** Implement an admin permission system to manage user access levels and control over certain platform features.

## 🤝 Contribute

We welcome contributions to make Work Room even better! Follow the [contribution guidelines](CONTRIBUTING.md) to get started.

## 🌟 Support Us

If you find this helpful or valuable, please consider 🌟 starring the repository. It helps us gain visibility and encourages further development.

## 🧾 License

This project is licensed under the [MIT License](LICENSE).

