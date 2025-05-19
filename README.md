# 📚 Book Server API

A simple RESTful API built with **Express.js** and **MongoDB** to manage a collection of books. This API allows you to add, retrieve, delete, and search for books using standard HTTP methods.

---

## ✅ Features

- Add a new book
- Retrieve all books
- Delete a book by ID
- Search for books by name (case-insensitive)

---

## 🛠️ Tech Stack

- **Node.js**
- **Express.js**
- **MongoDB** with Mongoose
- **dotenv** for environment configuration


---

## ⚙️ Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/your-username/book-server.git
cd book-server
```

### 2. Install dependencies

```bash
npm install
```

### 3. Configure environment variables

Create a `.env` file in the root directory and add the following:

```env
MONGO_URI=your_mongodb_connection_string
PORT=5000
```

### 4. Start the server

```bash
npm start
```

The server will run at `http://localhost:5000` by default (or the port you set in `.env`).

---

## 📘 API Documentation

### 📗 Add a New Book

- **Endpoint:** `POST /books`
- **Body:**

```json
{
  "name": "Book Title",
  "author": "Author Name",
  "publishedYear": 2023
}
```

- **Response:** `201 Created`
- **Errors:** `400 Bad Request` if `name` or `author` is missing

---

### 📘 Get All Books

- **Endpoint:** `GET /getBooks`
- **Response:** `200 OK` with an array of all books

---

### ❌ Delete a Book by ID

- **Endpoint:** `DELETE /deleteBook/:id`
- **Response:** `200 OK` with a success message
- **Errors:** `404 Not Found` if no book is found with the given ID

---

### 🔍 Search Books by Name

- **Endpoint:** `GET /search/:name`
- **Response:** `200 OK` with matched books
- **Note:** Case-insensitive search using regex

---

## 📝 License

This project is licensed under the [MIT License](https://opensource.org/licenses/MIT).

---

## 🤝 Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

---

## 📬 Contact

For any inquiries or suggestions, feel free to reach out via [GitHub Issues](https://github.com/your-username/book-server/issues).
