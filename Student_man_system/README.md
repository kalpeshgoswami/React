# Student Management System

A Student Management System built using **React.js, Vite, and REST API** to manage student records with CRUD operations.

## 🚀 Live Demo

**Live Website:** https://react-ky1bqoqxk-kg45.vercel.app/

Click the link above to visit the live application.

## ✨ Features

- View all students
- Add new student records
- Update existing student details
- Delete student records
- Form validation
- Loading indicators
- Error handling
- React Router navigation
- Axios API integration
- Responsive UI using Bootstrap
- REST API communication

## 🛠️ Tech Stack

**Frontend**
- React.js
- Vite
- JavaScript
- HTML5
- CSS3

**Libraries & Tools**
- React Router DOM
- Axios
- Bootstrap
- React-Bootstrap
- Yup
- Git & GitHub
- Vercel

**Backend**
- REST API

## 📁 Project Structure

```text
Student_man_system/
├── public/
├── src/
│   ├── API/
│   │   └── StudentAxios.js
│   ├── assets/
│   ├── components/
│   │   ├── AddStudent.jsx
│   │   └── Student.jsx
│   ├── router/
│   │   └── MainLayout.jsx
│   ├── UI/
│   │   └── Navbar.jsx
│   ├── App.jsx
│   ├── App.css
│   ├── index.css
│   └── main.jsx
├── .env
├── .gitignore
├── index.html
├── package.json
├── package-lock.json
├── vite.config.js
└── README.md
```

## ⚙️ Installation and Setup

### 1. Clone the Repository

```bash
git clone YOUR_GITHUB_REPOSITORY_URL
cd Student_man_system
```

Replace `YOUR_GITHUB_REPOSITORY_URL` with your actual GitHub repository URL.

### 2. Install Dependencies

```bash
npm install
```

### 3. Configure Environment Variables

Create a `.env` file in the root directory:

```env
VITE_BASE_URL=http://localhost:5000/student
```

Replace the sample URL with your actual backend API base URL.

**Important:** Make sure the backend server is running and the API routes match the frontend configuration.

### 4. Start the Development Server

```bash
npm run dev
```

Open the local URL shown in your terminal, usually:

http://localhost:5173/

### 5. Build for Production

```bash
npm run build
```

### 6. Preview the Production Build

```bash
npm run preview
```

## 🔗 API Endpoints

The frontend uses the following endpoint patterns relative to `VITE_BASE_URL`.

| Method | Endpoint | Description |
|---|---|---|
| GET | `/getAllStudents` | Retrieve all students |
| POST | `/add` | Add a new student |
| GET | `/:id` | Retrieve a student by ID |
| PATCH | `/:id` | Update student details |
| DELETE | `/:id` | Delete a student |

The exact routes and response fields must match your backend implementation.

## 📝 Student Information

Each student record contains the following fields:

- **Name:** Student's full name
- **GR ID:** Student's unique GR ID
- **Email:** Student's email address
- **Course:** Student's course
- **Phone Number:** Student's contact number

## 📜 Available Scripts

| Command | Description |
|---|---|
| `npm run dev` | Start development server |
| `npm run build` | Build the application |
| `npm run lint` | Check code with ESLint |
| `npm run preview` | Preview production build |

## 🌐 Deployment

This project is deployed using Vercel.

**Live URL:** https://react-ky1bqoqxk-kg45.vercel.app/

To deploy your own version:

1. Push the project to GitHub.
2. Import the repository into Vercel.
3. Configure the required environment variables in Vercel.
4. Deploy the project.

For Vite projects, the default build command is `npm run build`, and the output directory is `dist`.

## 🔒 Security Notes

- Do not commit `.env` files containing sensitive information.
- Add `node_modules/`, `dist/`, and `.env` to `.gitignore`.
- Never expose private API keys or passwords in frontend code.
- Remember that variables prefixed with `VITE_` are exposed to client-side code.

## 📤 Push Changes to GitHub

```bash
git add .
git commit -m "Update Student Management System README"
git push origin main
```

If your default branch is `master`, replace `main` with `master`.

## 🐛 Troubleshooting

- **API errors:** Check the backend URL and endpoint paths.
- **Empty student list:** Verify the API response and database records.
- **404 errors:** Check the React Router configuration.
- **Environment variable errors:** Restart the Vite development server after changing `.env`.
- **Deployment issues:** Check the Vercel build logs and environment variable settings.

## 📄 License

This project was created for learning and educational purposes. Add a suitable open-source license if you want others to reuse or distribute the code.

---

**Developed with ❤️ using React.js and Vite.**
