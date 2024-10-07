import './index.css'
import HomePage from "./screens/HomePage.tsx";
import {useState} from "react";
import AuthPage from "./screens/AuthPage.tsx";

function App() {
    const [loggedIn, setLoggedIn] = useState(false);

    const enterGuest = () => {
        setLoggedIn(true);
    }

    return (
        <div className="max-h-screen mx-2 text-white">
            {
                loggedIn ? <HomePage /> :
                    <section className="flex justify-center items-center" style={{height: 'calc(100vh - 208px)' }}>
                        <AuthPage
                            guestEntry={enterGuest}
                        />
                    </section>

            }
        </div>
    )
}

export default App
