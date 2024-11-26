import TopNavigation from "./components/common/TopNavigation";
import Navigation from "./components/homepage/Navigation";
import Footer from "./components/common/Footer";
import FeaturedCategory from "./components/homepage/FeaturedCategory";

const HomePage = () => {
    return (
        <>
            <TopNavigation />
            <Navigation />
            <FeaturedCategory />
            <Footer />
        </>
    );
}

export default HomePage;