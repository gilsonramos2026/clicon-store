import { type RouteObject } from 'react-router-dom';
import PublicLayout from './layouts/PublicLayout';
import Home from './pages/Home';
import Contact from './pages/Contact';


export const publicRoutes: RouteObject = {
  path: '/',
  element: <PublicLayout />,
  children: [
    { path: '', element: <Home /> },
    { path: 'contact', element: <Contact /> },
  ],
};
