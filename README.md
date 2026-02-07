# Task Management Application

A full-stack task management application built with React and Node.js/Express. This application allows users to create, read, update, and delete tasks with a modern, responsive user interface.

## 🚀 Tech Stack

### Frontend
- **React 18** - JavaScript library for building user interfaces
- **Tailwind CSS** - Utility-first CSS framework for styling
- **Axios** - Promise-based HTTP client for API calls
- **PostCSS & Autoprefixer** - CSS processing tools
- **React Scripts** - Create React App build tools

### Backend
- **Node.js** - JavaScript runtime
- **Express.js** - Web application framework
- **MongoDB** - NoSQL database
- **Mongoose** - MongoDB object modeling
- **CORS** - Cross-Origin Resource Sharing middleware
- **Dotenv** - Environment variable management
- **Nodemon** - Development tool for auto-restarting server

## 📁 Project Structure

```
global_trend_assement/
├── backend/                          # Node.js Express server
│   ├── config/
│   │   └── database.js              # MongoDB connection configuration
│   ├── controllers/
│   │   └── taskController.js        # Business logic for task operations
│   ├── models/
│   │   └── Task.js                  # MongoDB Task schema
│   ├── routes/
│   │   └── taskRoutes.js            # API route definitions
│   ├── server.js                    # Main server file
│   ├── test.js                      # Test file
│   └── package.json                 # Backend dependencies
│
└── frontend/                         # React application
    ├── public/
    │   └── index.html               # Main HTML file
    ├── src/
    │   ├── components/
    │   │   ├── TaskForm.js          # Form component to create tasks
    │   │   ├── TaskItem.js          # Individual task display component
    │   │   └── TaskList.js          # Task list container component
    │   ├── services/
    │   │   └── taskService.js       # API service for task operations
    │   ├── App.js                   # Main App component
    │   ├── App.css                  # App styles
    │   ├── index.js                 # React entry point
    │   └── index.css                # Global styles
    ├── postcss.config.js            # PostCSS configuration for Tailwind
    ├── tailwind.config.js           # Tailwind CSS configuration
    ├── tsconfig.json                # TypeScript configuration
    ├── package.json                 # Frontend dependencies
    └── .gitignore                   # Git ignore file
```

## ⚙️ Installation & Setup

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn
- MongoDB (local or cloud instance like MongoDB Atlas)

### Backend Setup

1. Navigate to the backend directory:
```bash
cd backend
```

2. Install dependencies:
```bash
npm install
```

3. Create a `.env` file in the backend directory:
```
MONGODB_URI=your_mongodb_connection_string
PORT=5000
```

4. Start the development server:
```bash
npm run dev
```

Or for production:
```bash
npm start
```

The backend server will run on `http://localhost:5000`

### Frontend Setup

1. Navigate to the frontend directory:
```bash
cd frontend
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm start
```

The frontend application will open at `http://localhost:3000`

## 📝 Features

- ✅ **Create Tasks** - Add new tasks with descriptions
- ✅ **View Tasks** - Display all tasks in a clean list format
- ✅ **Update Tasks** - Edit existing task details
- ✅ **Delete Tasks** - Remove tasks from the list
- ✅ **Responsive Design** - Works seamlessly on desktop and mobile devices
- ✅ **Real-time API Integration** - Instant communication between frontend and backend

## 🔌 API Endpoints

### Base URL: `http://localhost:5000/api/tasks`

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/tasks` | Get all tasks |
| GET | `/api/tasks/:id` | Get a specific task |
| POST | `/api/tasks` | Create a new task |
| PUT | `/api/tasks/:id` | Update a task |
| DELETE | `/api/tasks/:id` | Delete a task |
| GET | `/api/health` | Server health check |

## 🛠️ How to Use

### Creating a Task

1. Open the application at `http://localhost:3000`
2. Fill in the task form with:
   - Task title
   - Task description
   - Other relevant details
3. Click the "Add Task" or "Create" button
4. The task will be added to your task list

### Viewing Tasks

- All tasks are displayed in a list format on the main page
- Each task shows its details and available actions

### Updating a Task

1. Click the "Edit" button on any task
2. Modify the task details in the form
3. Click "Save" or "Update" to save changes

### Deleting a Task

1. Click the "Delete" button on any task
2. Confirm the deletion when prompted
3. The task will be removed from the list

## 🚦 Running the Application

### Development Mode (with auto-reload)

**Backend:**
```bash
cd backend
npm run dev
```

**Frontend:**
```bash
cd frontend
npm start
```

### Production Build

**Frontend:**
```bash
cd frontend
npm run build
```

This creates an optimized production build in the `build` folder.

## 📦 Key Components

### Frontend Components

- **TaskForm.js** - Handles task creation and editing with form validation
- **TaskList.js** - Container component that manages tasks and renders the task list
- **TaskItem.js** - Individual task component displaying task details and action buttons

### Backend Components

- **taskController.js** - Contains all business logic for task operations (CRUD)
- **Task.js** - Mongoose schema defining the task data structure
- **taskRoutes.js** - Express routes handling API endpoint requests
- **database.js** - MongoDB connection and configuration

## 🔐 Environment Variables

Create a `.env` file in the backend directory with:

```
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/dbname
PORT=5000
NODE_ENV=development
```

## 🧪 Testing

To run tests:
```bash
npm test
```

Tests are located in `backend/test.js`

## 📚 Dependencies Summary

| Package | Version | Purpose |
|---------|---------|---------|
| Express | ^4.18.2 | Web framework |
| Mongoose | ^7.0.0 | Database modeling |
| React | ^18.2.0 | UI library |
| Tailwind CSS | ^3.2.7 | Styling |
| Axios | ^1.3.0 | HTTP client |
| CORS | ^2.8.5 | Cross-origin requests |
| Dotenv | ^16.6.1 | Environment variables |

## 🤝 Contributing

Feel free to fork this repository and submit pull requests with improvements or bug fixes.

## 📄 License

This project is licensed under the ISC License.

## 👨‍💻 Author

Created as a full-stack task management application demonstrating MERN/MEAN stack concept.

## 📞 Support

For issues or questions, please open an issue in the repository.

---

**Happy Task Managing! 🎯**
