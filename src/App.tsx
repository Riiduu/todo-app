import './index.css'
import HomePage from "./screens/HomePage.tsx";
import {useState} from "react";
import AuthPage from "./screens/AuthPage.tsx";

function App() {
    const [loggedIn, setLoggedIn] = useState(false);


  return (
    <div className="max-h-screen">
        {
            loggedIn ? <HomePage /> : <AuthPage />
        }
    </div>
  )
}

export default App
