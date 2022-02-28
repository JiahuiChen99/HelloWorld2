import HomePage from "./Pages/HomePage";
import NavBar from "./Components/NavigationBar/NavBar";
import Footer from "./Components/Footer/Footer";
import {useEffect} from "react";

function App() {
    // Apply dark / light theme on app mount
    useEffect( () => {
        if (localStorage.theme === 'dark' || !('theme' in localStorage)) {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
    },
        []
    );
    return (
        <div id="App" className="flex flex-col w-full min-h-full overflow-x-hidden">
            <NavBar/>
            <HomePage/>
            <Footer/>
    </div>
    );
}

export default App;
