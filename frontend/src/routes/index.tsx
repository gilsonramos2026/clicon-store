import { createBrowserRouter } from 'react-router-dom';
import { publicRoutes } from '../modules/public/public.routes';
import { adminRoutes } from '../modules/admin/admin.routes';

// O roteador junta as árvores de rotas de forma limpa
export const router = createBrowserRouter([
  publicRoutes,
  adminRoutes,
]);
