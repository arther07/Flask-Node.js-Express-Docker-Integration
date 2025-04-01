# Flask + Node.js (Express) + Docker Integration

## 🚀 Project Overview
This project integrates **Flask (Python) as the backend**, **Node.js (Express) as the frontend**, and **MongoDB Atlas** as the database. The frontend sends form data to the backend, which processes and stores it in MongoDB. Both services are **containerized using Docker** and connected with **Docker Compose**.

## 📁 Folder Structure
```
flaskp/
│── frontend/                # Express.js frontend
│   ├── node_modules/        # (Ignored in .gitignore)
│   ├── public/              # Static assets
│   ├── views/               # HTML templates
│   ├── server.js            # Main Express app
│   ├── package.json         # Dependencies
│   ├── Dockerfile           # Dockerfile for frontend
│   ├── .gitignore           # Ignore node_modules
│
│── backend/                 # Flask backend
│   ├── app.py               # Main Flask app
│   ├── requirements.txt     # Python dependencies
│   ├── Dockerfile           # Dockerfile for backend
│   ├── .gitignore           # Ignore __pycache__
│
│── docker-compose.yml       # Connects frontend & backend
│── README.md                # Project documentation
```

## 🔥 Technologies Used
- **Frontend:** Node.js (Express, EJS, Axios)
- **Backend:** Flask (Python), Flask-CORS
- **Database:** MongoDB Atlas
- **Containerization:** Docker, Docker Compose

## 🛠 Setup Instructions

### **1️⃣ Clone the Repository**
```bash
git clone https://github.com/Toto3107/flaskp.git
cd flaskp
```

### **2️⃣ Setup MongoDB Atlas**
- Create a **MongoDB Atlas** account.
- Get the **connection string** and update `backend/app.py`:
```python
client = MongoClient("your_mongodb_connection_string")
```

### **3️⃣ Build & Run with Docker**
```bash
docker-compose up -d
```
- **Frontend**: [http://localhost:3000](http://localhost:3000)
- **Backend**: [http://localhost:5000](http://localhost:5000)

### **4️⃣ Verify Running Containers**
```bash
docker ps
```

## 📌 API Endpoints
| Method | Endpoint           | Description            |
|--------|-------------------|------------------------|
| POST   | `/submit`         | Submit form data      |

## 📦 Docker Usage
### **🔹 Build Docker Images**
```bash
docker build -t your-dockerhub-username/frontend ./frontend
docker build -t your-dockerhub-username/backend ./backend
```

### **🔹 Push Images to Docker Hub**
```bash
docker login
docker push your-dockerhub-username/frontend
docker push your-dockerhub-username/backend
```

### **🔹 Run Containers Individually**
```bash
docker run -p 3000:3000 your-dockerhub-username/frontend
```
```bash
docker run -p 5000:5000 your-dockerhub-username/backend
```

## 📧 Contact
For queries, reach out to **ishaanjohn21200@gmail.com** or open an issue in this repository.

---
**Happy Coding! 🚀**

