# 🍹 Bar Menu – Modern Web App for Bars

A clean and responsive bar menu website built using **Vite**, **React**, **Tailwind CSS**, and **Supabase**. This app allows bars or restaurants to showcase their food and drink menus dynamically with a beautiful landing page that includes images, welcome text, and a location map.

## 🚀 Live Demo

_Optional – Add your deployed link here (e.g., Vercel/Netlify)_

---

## ✨ Features

- ✅ Welcome screen with bar introduction and image gallery
- ✅ Embedded Google Map showing the bar's location
- ✅ Separate pages for food and drinks
- ✅ Real-time data fetching from **Supabase** database
- ✅ Fully responsive layout using Tailwind CSS
- ✅ Smooth animations and hover transitions

---

## 🛠 Tech Stack

- ⚡️ [Vite](https://vitejs.dev/) – Fast dev server & build tool
- ⚛️ [React](https://react.dev/) – Frontend framework
- 🎨 [Tailwind CSS](https://tailwindcss.com/) – Utility-first CSS framework
- 🔥 [Supabase](https://supabase.io/) – Backend as a service (PostgreSQL + REST)

---

## 📂 Project Structure

src/ ├── assets/ # Bar images and media ├── components/ │ └── MenuSelector.jsx # Home page with images, text, and menu links ├── pages/ │ ├── Food.jsx # Food menu from Supabase │ └── Drinks.jsx # Drink menu from Supabase ├── App.jsx └── main.jsx

## 🛠️ Getting Started

Follow these steps to run the project locally and deploy it online.

---

### 1. 📦 Clone the Repository

```bash
git clone https://github.com/yourusername/bar-menu.git
cd bar-menu
npm install

### 2. 🔧 Set Up Supabase

2.1 Go to https://supabase.io and create a new project.

2.2 Create two tables: drinks and food with the following fields:

Field | Type | Notes
id | Integer | Primary key (auto-inc)
name | Text | Name of the item
price | Numeric | E.g. 1.66
unit | Text | Unit of the item
category | Text | Category of the item
created_at | Date | Date of product creation

### 3. 🔐 Add Environment Variables

Create a .env file in the root of your project:
VITE_SUPABASE_URL=https://your-project.supabase.co
VITE_SUPABASE_ANON_KEY=your-anon-key

### 4. 🚀 Run the App Locally

npm run dev

### 5. 🌐 Deploy the App

You can deploy the app easily using Vercel or Netlify.

Vercel Deployment Steps:
Push your project to GitHub.

Go to vercel.com and import your GitHub repo.

Add the environment variables from your .env file in Project Settings > Environment Variables.

Click Deploy – done!

### 6. 🌐 Deploy the App

Made with ❤️ using Vite, Supabase, Tailwind CSS, and React.
```
