import HomePage from "./Pages/HomePage";
import NavBar from "./Components/NavigationBar/NavBar";

function App() {
    return (
        <div className="flex flex-col w-full h-full overflow-x-hidden">
            <NavBar/>
            <HomePage/>
        </div>
    );
}

export default App;
