# Todo List App

This is a simple Todo List application built with React and Redux. The app allows users to add, toggle, and remove todo items.

## Features

- Add new todo items
- Toggle the completion status of todos
- Remove todo items
- Persistent state management using Redux

## Project Structure

```
todo-list-app
├── public
│   └── index.html          # Main HTML file
├── src
│   ├── components
│   │   └── TodoItem.js     # Component for individual todo item
│   ├── containers
│   │   └── TodoList.js      # Container for the todo list
│   ├── redux
│   │   ├── actions.js       # Redux action creators
│   │   ├── reducers.js      # Redux reducers
│   │   └── store.js         # Redux store configuration
│   ├── App.js               # Main App component
│   └── index.js             # Entry point for the React application
├── package.json             # NPM configuration file
└── README.md                # Project documentation
```

## Installation

1. Clone the repository:
   ```
   git clone <repository-url>
   ```
2. Navigate to the project directory:
   ```
   cd todo-list-app
   ```
3. Install the dependencies:
   ```
   npm install
   ```

## Usage

To start the application, run:
```
npm start
```
This will launch the app in your default web browser.

## License

This project is licensed under the MIT License.