import './index.css'
import HomePage from "./screens/HomePage.tsx";
import {useEffect, useState, useRef} from "react";
import AuthPage from "./screens/AuthPage.tsx";
// @ts-expect-error ---
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import app from './firebase.ts';


function App() {
    const [loggedIn, setLoggedIn] = useState(false);
    const [token, setToken] = useState(null);
    const isInitialMount = useRef(true);

    useEffect(() => {
        if (isInitialMount.current) {
            isInitialMount.current = false;
            return
        }
        // Logged in using google
        setLoggedIn(true);
    }, [token]);

    return (
        <div className="max-h-screen mx-2 text-white">
            {
                loggedIn ?
                    <HomePage
                        userToken={token}
                    /> :
                    <section className="flex justify-center items-center" style={{height: 'calc(100vh - 208px)' }}>
                        <AuthPage
                            //guestEntry={enterGuest} // Doesn't fucking work. I don't know why
                            setToken={setToken}
                        />
                    </section>

            }
        </div>
    )
}

export default App
