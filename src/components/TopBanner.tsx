import logoImg from '../assets/rocket.png';

const TopBanner = () => {
    return (
        <div className="flex justify-center items-center bg-[var(--gray-700)] w-full py-20">
            <div className="flex justify-center items-center text-5xl">
                <img src={logoImg} className="my-auto"/>
                <span className="text-[var(--blue)] ml-2 my-auto">to</span><span className="my-auto text-[var(--purple-dark)]">do</span>
            </div>
        </div>
    )
}

export default TopBanner