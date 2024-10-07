import GoogleLogo from '../assets/Google-logo.png';
import '../firebase.ts';

import {getAuth, signInWithPopup, setPersistence, browserLocalPersistence, GoogleAuthProvider} from "firebase/auth";

// Sign in with popup
const auth = getAuth();

// @ts-expect-error ---
const AuthPage = ({setToken}, {guestEntry}) => {


    const googleSignIn = () => {
        setPersistence(auth, browserLocalPersistence)
            .then(() => {
                const provider = new GoogleAuthProvider();
                provider.addScope('https://www.googleapis.com/auth/contacts.readonly');

                signInWithPopup(auth, provider)
                    .then(() => {
                        // This gives you a Google Access Token. You can use it to access the Google API.
                        // const credential = GoogleAuthProvider.credentialFromResult(result);
                        if (auth.currentUser != null) {
                            auth.currentUser.getIdToken().then((idToken) => {
                                setToken(idToken.substring(0, 16))
                            });
                        }

                        /*if (credential != null) {
                            const googleToken = credential.accessToken;
                            console.log(googleToken)
                            setToken(googleToken)
                        }*/
                        // IdP data available using getAdditionalUserInfo(result)
                        // ...
                    }).catch((error) => {
                    console.log(error);

                    // ...
                });
            })
            .catch((error) => {
                // Handle Errors here.
                console.log("Error: " + error)
            });
    }

    return (
        <div className="flex flex-col items-center justify-center max-w-sm space-y-3 mb-32 ">
            <h1 className="text-4xl">Join the Club 🥪</h1>
            <input type="text"
                   className="w-full rounded-md px-5 py-3 outline-none bg-[var(--gray-500)] text-[var(--gray-200)]"
                   placeholder="Email"/>
            <input type="text"
                   className="w-full rounded-md px-5 py-3 outline-none bg-[var(--gray-500)] text-[var(--gray-200)]"
                   placeholder="Password"/>
            <div className="flex justify-between space-x-3 w-full">
                <button className="w-full bg-[var(--blue)] py-2 rounded-lg">Login</button>
                <button className="w-full bg-[var(--purple)] py-2 rounded-lg">Register</button>
            </div>
            <div className="flex justify-center items-center space-x-5 w-full">
                <div className="flex-1 h-px bg-[var(--gray-400)]"></div>
                <img onClick={googleSignIn} className="cursor-pointer" src={GoogleLogo} alt=""/>
                <div className="flex-1 h-px bg-[var(--gray-400)]"></div>
            </div>

            <a onClick={() => guestEntry} className="text-[var(--gray-300)] text-sm underline cursor-pointer">Continue
                as Guest</a>
        </div>
    )
}

export default AuthPage;