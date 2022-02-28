import ThemeButton from "../UI/ThemeButton";
import {useEffect, useState} from "react";

const NavBar = () => {
    const [atTopPage, setTop] = useState(false);

    // Apply styles on scroll
    const handleScroll = () => {
        if (window.scrollY > 0) {
            // User has scrolled
            setTop(false);
        } else {
            // User is at top of page
            setTop(true);
        }
    };

    // Scroll event listener on navigation bar mount
    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return(
        <div className={`flex fixed top-0 w-full h-32 justify-between py-10 transition-all ease-in-out delay-100
                        backdrop-opacity-95 backdrop-filter backdrop-blur-lg z-50
                        bg-white/90 dark:bg-slate-900/75
                        text-text dark:text-dark_text
                        px-10 md:px-20 lg:px-32 xl:40 2xl:px-96
                        border-slate-200 dark:border-slate-50/10
                        ${atTopPage ? 'border-b-0' : 'border-b'}`}>
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