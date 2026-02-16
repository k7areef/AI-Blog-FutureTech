import HeaderSection from "@components/Sections/HeaderSection";
import Resources from "@components/Sections/Resources";
import useChangeTitle from "@hooks/useChangeTitle";

function ResourcesPage() {
    useChangeTitle("Resources");
    return (
        <div className="resources-page">
            <HeaderSection />
            <Resources />
        </div>
    )
}

export default ResourcesPage;