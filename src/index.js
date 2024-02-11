import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter } from 'react-router-dom'
import TasksContextProvider from './context/tasksContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <TasksContextProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </TasksContextProvider>
);