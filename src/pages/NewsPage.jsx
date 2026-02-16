import Blogs from "@components/Sections/Blogs";
import HeaderSection from "@components/Sections/HeaderSection";
import Videos from "@components/Sections/Videos";
import useChangeTitle from "@hooks/useChangeTitle";

function NewsPage() {
    useChangeTitle("News");
    return (
        <div className="news-page">
            <HeaderSection />
            <Blogs />
            <Videos />
        </div>
    )
}

export default NewsPage;