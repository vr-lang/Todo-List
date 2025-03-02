# Todo Application

## Overview
This is a simple Todo application built with React that allows users to add, view, edit, and delete tasks. The application interacts with a backend server to persist tasks.

## Features
- Add new tasks with a title and description.
- View a list of existing tasks.
- Delete completed tasks.
- Responsive and user-friendly UI with smooth animations.

## Technologies Used
- React (useState for state management)
- Tailwind CSS for styling
- Fetch API for backend communication

## Installation

### Prerequisites
Ensure you have the following installed on your machine:
- Node.js (v14 or later)
- npm or yarn

### Steps to Run
1. Clone the repository:
   ```sh
   git clone https://github.com/your-repo/todo-app.git
   cd todo-app
   ```

2. Install dependencies:
   ```sh
   npm install
   ```

3. Start the application:
   ```sh
   npm start
   ```
   The app will be available at `http://localhost:3000/`.

## Backend Setup
This application expects a backend server running on `http://localhost:8080/` with the following API endpoints:
- `POST /` - Adds a new task
- `DELETE /delete/:id` - Deletes a task by ID

## Code Structure
```
.
├── src
│   ├── components
│   │   ├── Todo.js  # Main component
│   ├── App.js       # Root component
│   ├── index.js     # Entry point
├── public
├── package.json
└── README.md
```

## Usage
1. Enter a task title and description in the input fields.
2. Click "Add Task" to store it.
3. View the task list on the right side.
4. Click "Completed" to delete a task.

## Contributing
Feel free to fork this project and submit pull requests with improvements.

## License
This project is licensed under the MIT License.

