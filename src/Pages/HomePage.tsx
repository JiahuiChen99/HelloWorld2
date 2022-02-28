import HeroBanner from "../Components/HomePage/HeroBanner";
import FeaturedProjects from "../Components/HomePage/FeaturedProjects";

function HomePage() {
    return(
        <div className="w-full h-full bg-bg dark:bg-dark_bg">
            <div className="h-32"/>
            <HeroBanner/>
            <FeaturedProjects/>
        </div>
    )
}

export default HomePage;