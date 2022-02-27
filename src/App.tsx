import HomePage from "./Pages/HomePage";
import NavBar from "./Components/NavigationBar/NavBar";
import Footer from "./Components/Footer/Footer";

function App() {
    return (
        <div id="App" className="flex flex-col w-full min-h-full overflow-x-hidden">
            <NavBar/>
            <div className="mt-32">
                <HomePage/>
            </div>
            <Footer/>
        </div>
    );
}

export default App;
