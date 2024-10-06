import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import AuthPage from "./screens/AuthPage.tsx";
import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
    },
    {
        path: '/login',
        element: <AuthPage />
    }
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
      <RouterProvider router={router} />
  </StrictMode>,
)
