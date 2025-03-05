# 📚 Book Review Platform  

A **Full Stack Book Review Platform** where users can browse books, add new books, and submit reviews.  
Built using **React (Frontend)**, **Node.js with Express (Backend)**, and **PostgreSQL (Database)**.  

---

## 🚀 Features  
✅ **Frontend (React)**
- Responsive UI with a book list and review submission form  
- Uses **React Router** for navigation  
- **State management** using React hooks  
- API integration with the backend  

✅ **Backend (Node.js + Express + PostgreSQL)**
- **RESTful API** to handle book and review management  
- **CRUD operations** for books and reviews  
- Database **schema validation** and **error handling**  
- Uses **CORS** and **express.json()** for smooth API communication  

✅ **Database (PostgreSQL)**
- Tables for **books**, **reviews**, and **users**  
- Data stored **persistently** with SQL queries  
- **Indexed** for fast query performance  

---

## 🛠 Tech Stack  
| **Technology**  | **Purpose**  |
|-----------------|-------------|
| React          | Frontend UI  |
| Node.js        | Backend Server  |
| Express.js     | API Handling  |
| PostgreSQL     | Database  |
| Axios          | API Requests  |
| React Router   | Frontend Navigation  |

---

## 📂 Project Structure  

```
📦 book-review-platform
├── 📁 book-review-frontend (React Frontend)
│   ├── 📁 src
│   │   ├── 📁 components
│   │   │   ├── Navbar.js
│   │   │   ├── BookList.js
│   │   │   ├── AddBook.js
│   │   │   ├── AddReview.js
│   │   ├── App.js
│   │   ├── api.js
│   │   ├── index.js
│   ├── package.json
│   ├── README.md
│
├── 📁 book-review-backend (Node.js Backend)
│   ├── server.js
│   ├── db.js
│   ├── package.json
│   ├── README.md
│
└── README.md
```

---

## 🔧 Installation & Setup  

### **1️⃣ Clone the Repository**  
```sh
git clone https://github.com/your-username/book-review-platform.git
cd book-review-platform
```

### **2️⃣ Setup the Backend**  
```sh
cd book-review-backend
npm install
```
#### **2.1 Create a `.env` file (optional)**
```
DATABASE_URL=postgres://your_user:your_password@localhost:5432/book_review_db
```
#### **2.2 Start PostgreSQL & Create Database**
```sh
psql -U postgres
CREATE DATABASE book_review_db;
\c book_review_db;
```

#### **2.3 Create Tables**
```sql
CREATE TABLE books (
    id SERIAL PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    author VARCHAR(255) NOT NULL
);

CREATE TABLE reviews (
    id SERIAL PRIMARY KEY,
    book_id INT REFERENCES books(id) ON DELETE CASCADE,
    user_name VARCHAR(255) NOT NULL,
    rating INT CHECK (rating BETWEEN 1 AND 5),
    review_text TEXT
);
```

#### **2.4 Start the Backend Server**
```sh
node server.js
```
✅ **Server running at:** `http://localhost:5000/`  

---

### **3️⃣ Setup the Frontend**  
```sh
cd ../book-review-frontend
npm install
npm start
```
✅ **Frontend running at:** `http://localhost:3000/`

---

## 🎯 API Endpoints  

### **📚 Books API**  
| Method | Endpoint       | Description |
|--------|--------------|-------------|
| `GET`  | `/books`      | Get all books |
| `GET`  | `/books/:id`  | Get a single book by ID |
| `POST` | `/books`      | Add a new book |

### **📝 Reviews API**  
| Method | Endpoint            | Description |
|--------|--------------------|-------------|
| `GET`  | `/reviews/:book_id` | Get all reviews for a book |
| `POST` | `/reviews`          | Add a new review |

### **👤 Users API (Mocked)**  
| Method | Endpoint       | Description |
|--------|--------------|-------------|
| `GET`  | `/users/:id`  | Get user profile |
| `PUT`  | `/users/:id`  | Update user profile |

---

## 📷 Screenshots  

**📖 Book List Page**  
![Book List UI](https://via.placeholder.com/600x300?text=Book+List+UI)  

**📝 Add Review Page**  
![Review UI](https://via.placeholder.com/600x300?text=Add+Review+UI)  

---

## 🏗 Future Improvements  
🔹 Add authentication (e.g., JWT for user login)  
🔹 Allow users to edit & delete reviews  
🔹 Implement a rating system with stars  

---

## 📝 License  
This project is **free to use** under the **MIT License**.  

---

## 🤝 Contributing  
Contributions are welcome! Follow these steps:  
1. **Fork** the repo  
2. Create a new **branch** (`git checkout -b feature-branch`)  
3. **Commit** your changes (`git commit -m "Added new feature"`)  
4. **Push** and create a **Pull Request**  

---

## 🔗 Connect with Me  
💬 **GitHub**: [your-username](https://github.com/your-username)  
💼 **LinkedIn**: [your-profile](https://linkedin.com/in/your-profile)  
