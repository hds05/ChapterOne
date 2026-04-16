# ChapterOne

ChapterOne is a simple online library website made with React. In this website, users can explore books, search for their favorite books, filter them by category, and even add their own books. The main goal of this project was to practice React, React Router, Redux Toolkit, and Tailwind CSS while building something useful.
In this project, users can:

* Browse books
* Search books
* Filter books by category
* View book details
* Add new books

---

# Built With

* React
* React Router DOM
* Redux Toolkit
* React Redux
* Tailwind CSS
* Nanoid
* react loader spinner

---

# Pages

## Home Page

Shows popular books and categories.

## Browse Books Page

Shows all books with search and category filter.

## Add Book Page

User can add a new book using a form.

## Book Detail Page

Shows complete information about a selected book.

---

# Features

* Fetch books from API
* Add books using Redux
* Search by title or author
* Filter by category
* Custom loading and error page

---


## 🛠️ Installation
Step-by-step instructions on how to set up the project locally.

```bash
git clone https://github.com/hds05/ChapterOne.git
cd ChapterOne
npm install
npm run dev

---

# API Used

```text
https://books-backend-0qxz.onrender.com/api/getAllBooks
```

---
## Known Issue
* Newly added books are stored only in Redux state. Because of this, if the page is refreshed, the added books disappear.
* In the future, the added books issue can be fixed by using localStorage or a backend database.
* The route errorElement works correctly for parent and child routes.
* I also created custom error handling for API fetch failures inside components, but that error in UI never appears because React Router triggers the errorElement of that route first.
---

# Author
Made by Himanshu 😁
