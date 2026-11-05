
# 📦 Inventory Management System

A simple and user-friendly **Inventory Management System** built using React, Vite, and Redux Toolkit. This project helps manage inventory items with centralized state management.

# Live Link:

https://gleaming-pasca-aa2b9e.netlify.app

## 🚀 Tech Stack

- React.js
- Vite
- Redux Toolkit
- React Redux
- JavaScript (ES6+)
- CSS3
- ESLint

## 📁 Project Structure

```text
inventory_man_system/
│
├── public/
├── src/
│   ├── assets/
│   ├── components/
│   │   ├── Add.jsx
│   │   └── List.jsx
│   │
│   ├── features/
│   │   └── inventorySlice.jsx
│   │
│   ├── store/
│   │   └── store.jsx
│   │
│   ├── App.css
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
│
├── index.html
├── package.json
├── package-lock.json
├── vite.config.js
└── README.md
```

## ⚙️ Installation & Setup

### 1. Clone Repository

```bash
git clone <your-repository-url>
```

### 2. Navigate to Project

```bash
cd inventory_man_system
```

### 3. Install Dependencies

```bash
npm install
```

### 4. Start Development Server

```bash
npm run dev
```

Open the local URL in your browser:

```text
http://localhost:5173
```

## 📜 Available Scripts

| Command | Description |
|---|---|
| `npm run dev` | Start development server |
| `npm run build` | Create production build |
| `npm run lint` | Run ESLint |
| `npm run preview` | Preview production build |

## 🧩 Project Components

- **Add.jsx** – Add inventory items.
- **List.jsx** – Display inventory items.
- **inventorySlice.jsx** – Manage inventory state and reducers.
- **store.jsx** – Configure Redux store.
- **App.jsx** – Main application component.

## 🔄 State Management

This project uses Redux Toolkit for centralized state management.

- `useSelector()` – Access Redux state.
- `useDispatch()` – Dispatch Redux actions.
- `createSlice()` – Create reducers and actions.
- `configureStore()` – Configure Redux store.

## 🔮 Future Improvements

- Search and filter inventory items.
- Update and delete inventory records.
- Form validation.
- Low-stock notifications.
- Backend API integration.
- User authentication.

## 👨‍💻 Author

**Kalpesh Goswami**

---

⭐ If you like this project, don't forget to give it a star!
