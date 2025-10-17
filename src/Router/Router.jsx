import React from 'react';
import { createBrowserRouter } from 'react-router';
import Home from '../Pages/Home/Home';
import ProjectDetails from '../Pages/ProjectDetails/ProjectDetails';
import Root from '../RootLayout/Root';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />, 
    children: [
      {
        index: true,
        element: <Home />
      },
        {
        path: 'projects/:id',
        element: <ProjectDetails />
      }
    ]
  }
]);