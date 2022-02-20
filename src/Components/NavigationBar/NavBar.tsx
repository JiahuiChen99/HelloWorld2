import ThemeButton from "../UI/ThemeButton";

const NavBar = () => {
    return(
        <div className="flex relative sticky top-0 w-full h-32 justify-between py-10
                        bg-white/90 backdrop-opacity-95 backdrop-filter backdrop-blur-lg z-10">
            {/* Navigation bar links */}
            <nav className="flex w-auto h-auto">
                <ul className="flex w-auto gap-x-10 items-center font-bold">
                    <li className="hover:cursor-pointer">Jiahui</li>
                    <li className="hover:cursor-pointer">Whoami</li>
                    <li className="hover:cursor-pointer">Projects</li>
                    <li className="hover:cursor-pointer">Posts</li>
                    <li className="hover:cursor-pointer">Resume</li>
                </ul>
            </nav>

            {/* Theme Selector */}
            <ThemeButton state={true}/>
        </div>
    )
}

export default NavBar;