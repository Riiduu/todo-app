import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import AuthPage from "./screens/AuthPage.tsx";
import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import TopBanner from "./components/TopBanner.tsx";

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
      <TopBanner />
      <RouterProvider router={router} />
  </StrictMode>,
)
