import HeroBanner from "../Components/HomePage/HeroBanner";
import FeaturedProjects from "../Components/HomePage/FeaturedProjects";

function HomePage() {
    return(
        <div className="w-full h-full">
            <HeroBanner/>
            <FeaturedProjects/>
        </div>
    )
}

export default HomePage;