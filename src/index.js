import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter } from 'react-router-dom'
import {TasksContextProvider, UserContextProvider} from './context/context';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <UserContextProvider>
      <TasksContextProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </TasksContextProvider>
    </UserContextProvider>
);