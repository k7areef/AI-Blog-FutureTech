import HeaderSection from "@components/Sections/HeaderSection";
import LatestPodcasts from "@components/Sections/LatestPodcasts";
import TopPodcasts from "@components/Sections/TopPodcasts";
import useChangeTitle from "@hooks/useChangeTitle";

function PodcastsPage() {
    useChangeTitle("Podcasts");
    return (
        <div className="podcasts-page">
            <HeaderSection />
            <TopPodcasts />
            <LatestPodcasts />
        </div>
    )
}

export default PodcastsPage;