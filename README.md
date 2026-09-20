# 🐾 Pet Shop

A responsive full-stack e-commerce web application for an online pet shop.

This project was developed as part of my Full-Stack Web Development training. The main goal was to build a modern and responsive online store using React, Redux Toolkit, React Router, and a REST API.

The application allows users to browse products and categories, filter and sort products, view product details, add products to the shopping cart, and place an order.

---

## 📌 Project Description

The Pet Shop application provides a complete shopping experience with:

- Product and category browsing
- Dynamic product pages
- Filtering and sorting
- Product discounts
- Shopping cart management
- Order form with validation
- Responsive design
- Communication with a backend REST API

The project consists of a React frontend and an Express/Sequelize backend with a SQLite database.

---

## ✨ Features

### 🏠 Home Page

- Hero section with promotional content
- Categories section
- Sale products section
- Promotional discount form
- Navigation to the main shop sections

### 🛍️ Products

- Display all products
- Product cards with images and prices
- Discount badges
- Original and discounted prices
- Price filtering
- Discounted products filter
- Product sorting
- Responsive product grid

### 📂 Categories

- Display all product categories
- Dynamic category pages
- Products filtered by category
- Breadcrumb navigation

### 🔎 Product Details

- Product image gallery
- Product title and description
- Current and original price
- Discount percentage
- Quantity selector
- Add to cart functionality
- Expandable product description

### 🛒 Shopping Cart

- Add products to cart
- Increase and decrease product quantity
- Remove products
- Calculate total number of items
- Calculate total price
- Order form
- Form validation
- Server error handling
- Order submission
- Success modal after placing an order

### 🎁 Promotional Form

- Name, phone number, and email fields
- Form submission
- Success modal
- Responsive layout

### ❌ 404 Page

- Custom Not Found page
- Navigation back to the home page

### 📱 Responsive Design

The application is adapted for different screen sizes:

- Desktop
- Tablet
- Mobile

Responsive breakpoints include:

- `900px`
- `700px`
- `450px`

---

## 🧰 Technologies

### Frontend

- **React**
- **React DOM**
- **React Router DOM**
- **Redux Toolkit**
- **React Redux**
- **Axios**
- **React Hook Form**
- **CSS Modules**
- **Vite**
- **Normalize.css**

### Backend

- **Node.js**
- **Express.js**
- **Sequelize**
- **SQLite**
- **CORS**
- **Nodemon**

---

## 🏗️ Project Structure

```text
pet_shop_project/
│
├── Backend/
│   ├── database/
│   │   ├── models/
│   │   │   ├── category.js
│   │   │   └── product.js
│   │   └── database.js
│   │
│   ├── routes/
│   │   ├── categories.js
│   │   ├── products.js
│   │   ├── sale.js
│   │   └── order.js
│   │
│   ├── public/
│   │   ├── category_img/
│   │   └── product_img/
│   │
│   ├── index.js
│   └── package.json
│
├── frontend/
│   ├── src/
│   │   ├── api/
│   │   ├── assets/
│   │   ├── components/
│   │   ├── data/
│   │   ├── hooks/
│   │   ├── layouts/
│   │   ├── pages/
│   │   ├── store/
│   │   ├── UI/
│   │   ├── Button/
│   │   ├── App.jsx
│   │   └── main.jsx
│   │
│   ├── public/
│   ├── package.json
│   └── vite.config.js
│
└── README.md
```

---

## 🧠 What I Practiced

This project allowed me to apply and strengthen my knowledge of:

- React component architecture
- React Hooks
- React Router
- Dynamic routing
- Redux Toolkit
- Global state management
- Asynchronous data fetching
- REST API integration
- Axios
- React Hook Form
- Form validation
- Error handling
- Reusable components
- CSS Modules
- Responsive web design
- Git and GitHub
- Frontend and backend integration

---

## 🎨 UI & UX

The interface was designed with a focus on:

- Clean and modern layout
- Reusable components
- Consistent typography
- Responsive behavior
- Clear navigation
- Interactive hover states
- Form feedback
- Product-focused presentation
- Mobile-friendly layouts

---

## 👩‍💻 Author

**Elena Bauer**

Web Developer

This project was developed by Elena Bauer as part of her Full-Stack Web Development training.

- GitHub: [github.com/elena-bauer-dev](https://github.com/elena-bauer-dev)
- LinkedIn: [linkedin.com/in/elena-bauer-dev](https://www.linkedin.com/in/elena-bauer-dev/)
- Behance: [behance.net/Elena_Bauer](https://www.behance.net/Elena_Bauer)
- ArtStation: [artstation.com/elenabauer](https://www.artstation.com/elenabauer)
