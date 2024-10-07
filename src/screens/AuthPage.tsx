import GoogleLogo from '../assets/Google-logo.png';

const AuthPage = (props: any) => {
    return (
        <div className="flex flex-col items-center justify-center max-w-sm space-y-3 mb-32 md:m-auto">
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
                <img src={GoogleLogo} alt=""/>
                <div className="flex-1 h-px bg-[var(--gray-400)]"></div>
            </div>

            <a onClick={props.guestEntry} className="text-[var(--gray-300)] text-sm underline cursor-pointer">Continue as Guest</a>
        </div>
    )
}

export default AuthPage