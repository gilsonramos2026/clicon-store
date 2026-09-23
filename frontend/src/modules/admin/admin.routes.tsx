import { type RouteObject } from 'react-router-dom';
import AdminLayout from './layouts/AdminLayout';
import Dashboard from './pages/Dashboard';
import Users from './pages/Users';


export const adminRoutes: RouteObject = {
  path: '/admin',
  element: <AdminLayout />,
  children: [
    { path: '', element: <Dashboard /> },
    { path: 'users', element: <Users /> },
  ],
};
