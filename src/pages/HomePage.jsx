import Blogs from "@components/Sections/Blogs";
import Features from "@components/Sections/Features";
import HeroSection from "@components/Sections/HeroSection";
import Resources from "@components/Sections/Resources";
import Testimonials from "@components/Sections/Testimonials";
import useChangeTitle from "@hooks/useChangeTitle";

function HomePage() {
    useChangeTitle("Home");
    return (
        <div className="home-page">
            <HeroSection />
            <Features />
            <Blogs />
            <Resources />
            <Testimonials />
        </div>
    )
}

export default HomePage;