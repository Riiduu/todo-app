import './index.css'
import HomePage from "./screens/HomePage.tsx";
import {useEffect, useState, useRef} from "react";
import AuthPage from "./screens/AuthPage.tsx";

import { getAuth, onAuthStateChanged } from "firebase/auth";

import app from './firebase.ts';

const auth = getAuth(app);

function App() {
    const [loggedIn, setLoggedIn] = useState(false);
    const [token, setToken] = useState(null);
    const isInitialMount = useRef(true);

    useEffect(() => {
        if (isInitialMount.current) {
            isInitialMount.current = false;
            return
        }

        
    }, [token]);

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                setLoggedIn(true);
            } else {
                setLoggedIn(false);
            }
        });

        // Cleanup subscription on component unmount
        return () => unsubscribe();
    }, [auth]);

    const logout = () => {
        auth.signOut().then(() => {
            setLoggedIn(false);
        }).catch((error) => {
            console.error('Error signing out:', error);
        });
    }

    return (
        <div className="max-h-screen mx-2 text-white">
            {
                loggedIn ?
                    <div>
                        <button onClick={logout}>Log out</button>
                        <HomePage
                            userToken={token}
                        /> 
                    </div>
                    :
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
