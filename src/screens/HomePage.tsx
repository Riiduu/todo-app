import AddIcon from '../assets/plus.png'

const HomePage = () => {
    return (
        <div className="max-w-screen-lg flex flex-col justify-center mx-auto relative">
            <div className="flex justify-center space-x-2 absolute top-[-15px] w-full">
                <input type="text" className="w-5/6 rounded-md px-5 py-3 outline-none bg-[var(--gray-500)] text-[var(--gray-200)]" placeholder="Enter Todo" />
                <button onClick={() => console.log('Submit')} type="submit" className="bg-[var(--blue)] text-white px-5 rounded-md py-3 flex justify-center items-center">Add
                    <img src={AddIcon} className="ml-2" alt=""/></button>
            </div>

            {/* If there are no todos */}
        </div>
    )
}

export default HomePage