import BlogInformation from "@components/Sections/BlogInformation";
import HeaderSection from "@components/Sections/HeaderSection";
import SimilarBlogs from "@components/Sections/SimilarBlogs";
import useChangeTitle from "@hooks/useChangeTitle";

function BlogDetailsPage() {
    useChangeTitle("Blog Details");
    return (
        <div className="blog-details-page">
            <HeaderSection />
            <BlogInformation />
            <SimilarBlogs />
        </div>
    )
}

export default BlogDetailsPage;