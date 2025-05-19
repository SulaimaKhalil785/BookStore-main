# 📚 Bookstore – Full-Stack MERN Online Book Store

**Bookstore** is a full-stack web application built with the MERN stack (MongoDB, Express.js, React, Node.js), designed to offer a smooth and responsive experience for browsing, managing, and purchasing books online.

---

## 🚀 Features

* 🛙️ **Book Listings** – Display books with images, descriptions, price, and stock info.
* 🔍 **Search & Filter** – Filter books by category, title, or author.
* 🫚 **Shopping Cart** – Add books to cart, adjust quantities, and calculate total price.
* 📦 **Stock Management** – Stock auto-updates after purchase, shows "OUT OF STOCK" when unavailable.
* 📂 **Dynamic Categories** – Categories fetched and managed from the backend.
* 🧑‍💼 **Admin Dashboard** – Add, edit, or delete books and manage inventory.
* 🔐 **Authentication** – Secure user login & registration using JWT.
* 🖼️ **Firebase Integration** – Upload and store book images via Firebase.

---

## 🛠️ Tech Stack

**Frontend:**

* React.js
* Tailwind CSS / Bootstrap
* Redux Toolkit
* React Router

**Backend:**

* Node.js
* Express.js
* MongoDB with Mongoose
* JWT Authentication
* Firebase (for image storage)

**API:**

* RESTful APIs for products, users, authentication, and orders

---

## 📁 Folder Structure

```bash
bookstore/
├── frontend/       # React frontend
├── backend/        # Express backend
├── .DS_Store       # System file (can be ignored or added to .gitignore)
├── README.md       # Project documentation
```

---

## 📌 Setup Instructions

1. **Clone the repository**

   ```bash
   git clone https://github.com/SulaimaKhalil785/bookstore-main
   ```

2. **Navigate to frontend and backend folders and install dependencies**

   ```bash
   cd frontend && npm install
   cd ../backend && npm install
   ```

3. **Configure .env files** for both frontend and backend:

   * MongoDB URI
   * Firebase config keys
   * JWT Secret

4. **Run the app** (using concurrently for dev)

   ```bash
   npm run dev
   ```

---

## 📞 Contact

For any queries or suggestions, feel free to reach out via GitHub issues or pull requests.
