# 🎓 SkillSphere – EdTech

SkillSphere is a modern online learning platform built with Next.js where users can explore courses, view detailed course information, and manage their profiles. The platform provides a clean and responsive user experience with authentication, protected routes, search functionality, and interactive UI features.

---

## 🌐 Live Website 

🔗 Live Link: https://skill-sphere-edtech.vercel.app

---

## 📂 GitHub Repository

🔗 Repo Link: https://github.com/Reyad-Hoq/skill-sphere-edtech-app

---

## 🚀 Features

### ✅ Authentication System
- User Registration
- User Login
- Google Social Login
- Logout Functionality
- Protected Routes using Better Auth

### 📚 Course Features
- View all available courses
- Course details page
- Protected course details route
- Popular Courses section
- Trending Courses section
- Search courses by title

### 👤 User Profile
- View logged-in user profile
- Update profile name & image
- Dynamic avatar in navbar

### 🎨 UI & UX
- Fully Responsive Design
- Custom Unique UI
- Hero Slider using Swiper.js
- Toast Notifications
- Loading Spinner
- Custom 404 Page

### 📌 Extra Sections
- Learning Tips Section
- Top Instructors Section
- Trending Courses Section

---

## 🛠️ Tech Stack

### Frontend
- Next.js App Router
- React.js
- Tailwind CSS
- DaisyUI
- HeroUI

### Authentication
- Better Auth

### Cloud Database
- MongoDB Atlas

### Animation & UI Packages
- Swiper.js
- React Icons
- Sonner / React Hot Toast
- GravityUI/icons

---

## 📦 NPM Packages Used

```bash
next
react
react-dom
tailwindcss
daisyui
@heroui/react
better-auth
swiper
react-icons
sonner
```

---

## 🔐 Environment Variables

Create a `.env` file and add the following variables:

```env
BETTER_AUTH_SECRET=your_secret_key
BETTER_AUTH_URL=https://skill-sphere-edtech.vercel.app

SKILL_SPHERE_URI=your_mongodb_uri

GOOGLE_CLIENT_ID=your_google_client_id
GOOGLE_CLIENT_SECRET=your_google_client_secret
```

---

## 📁 Folder Structure

```bash
src/
 ├── app/
 │   ├── (auth)/
 │   ├── (main)/
 │   ├── api/auth/[...all]/
 │   ├── components/
 │   ├── globals.css
 │   ├── layout.js
 │   ├── loading.jsx
 │   └── not-found.jsx
 │ 
 ├── lib/
 ├── proxy.js
 └── assets/
```

---

## 🔥 Main Pages

| Page | Description |
|------|-------------|
| Home | Hero section, popular courses, instructors |
| Courses | All available courses with search |
| Course Details | Protected route with full details |
| Login | User login page |
| Register | User registration page |
| My Profile | User information page |
| Update Profile | Update name & image |
| Not Found | Custom 404 page |

---

## 🔍 Search Functionality

Users can search courses by:
- Course title or Course Instructor

---

## 🔒 Protected Routes

The following routes require authentication:
- `/course/[id]`
- `/profile`
- `/profile/edit`

If a user is not logged in:
- Redirect to login page
- Redirect back after successful login

---

## 📱 Responsiveness

The website is optimized for:
- Mobile Devices
- Tablets
- Desktop Screens

---

## ⚡ Challenges Implemented

✅ Search Functionality  
✅ My Profile Page  
✅ Update User Information  
✅ Swiper.js Integration  

---

## 🧠 Learning Outcomes

Through this project I practiced:
- Next.js App Router
- Authentication with Better Auth
- Protected Routes
- Dynamic Routing
- Responsive UI Design
- Server & Client Components
- Search Functionality
- User Profile Management

---

## 🖥️ Installation & Setup

Clone the project:

```bash
git clone https://github.com/Reyad-Hoq/skill-sphere-edtech-app.git
```

Go to project directory:

```bash
cd skillsphere
```

Install dependencies:

```bash
npm install
```

Run the development server:

```bash
npm run dev
```

---

## 👨‍💻 Author

### Reyad Hoq

Frontend Developer | Next.js Enthusiast

---

## 📜 License

This project is created for educational purposes.