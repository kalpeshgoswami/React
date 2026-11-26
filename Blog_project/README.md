# MERN Blog Application

A full-stack Blog Application built using the MERN Stack (MongoDB, Express.js, React.js, and Node.js). Users can register, log in, create blogs, upload images, edit their own blogs, and delete them.

## 🚀 Features

- User Registration and Login
- JWT Authentication
- Protected Routes
- Create New Blogs
- View All Blogs
- Edit Existing Blogs
- Delete Blogs
- Upload Blog Images using Cloudinary
- Blog Categories
- Author Information
- Responsive User Interface
- Role-Based Access (User / Admin)

## 🛠️ Technologies Used

### Frontend
- React.js
- Vite
- React Router DOM
- Axios
- CSS

### Backend
- Node.js
- Express.js
- MongoDB
- Mongoose
- JWT Authentication
- Bcrypt.js
- Multer
- Cloudinary

## 📁 Project Structure

```text
MERN-Blog-Application/
│
├── frontend/
│   ├── public/
│   └── src/
│       ├── api/
│       ├── components/
│       ├── context/
│       ├── pages/
│       ├── App.jsx
│       └── main.jsx
│
└── backend/
    ├── config/
    ├── controller/
    ├── middleware/
    ├── model/
    ├── routes/
    ├── app.js
    └── server.js
```

## ⚙️ Installation & Setup

### 1. Clone Repository

```bash
git clone YOUR_GITHUB_REPOSITORY_URL
cd MERN-Blog-Application
```

### 2. Backend Setup

```bash
cd backend
npm install
```

Create a `.env` file:

```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
CLOUDINARY_CLOUD_NAME=your_cloudinary_name
CLOUDINARY_API_KEY=your_cloudinary_api_key
CLOUDINARY_API_SECRET=your_cloudinary_api_secret
```

Start backend:

```bash
npm start
```

### 3. Frontend Setup

```bash
cd frontend
npm install
```

Create a `.env` file:

```env
VITE_BASE_URL=http://localhost:5000
```

Start frontend:

```bash
npm run dev
```

## 🔗 API Endpoints

| Method | Endpoint | Description |
|---|---|---|
| POST | `/blog/add` | Create Blog |
| GET | `/blog/allBlog` | Get All Blogs |
| PATCH | `/blog/update/:id` | Update Blog |
| DELETE | `/blog/delete/:id` | Delete Blog |

Authentication and authorization are required for protected endpoints.

## ☁️ Deployment

- Frontend: Vercel
- Backend: Render
- Database: MongoDB Atlas
- Image Storage: Cloudinary

## 🔐 Environment Variables

Never upload your `.env` files, API keys, database credentials, or JWT secrets to GitHub.

Add `.env` to `.gitignore`.

## 👨‍💻 Author

**Kalpesh Goswami**

- GitHub: [@kalpeshgoswami](https://github.com/kalpeshgoswami)
- LinkedIn: [Kalpesh Goswami](https://www.linkedin.com/in/kalpeshgoswami/)

---

⭐ If you like this project, don't forget to give it a star!
