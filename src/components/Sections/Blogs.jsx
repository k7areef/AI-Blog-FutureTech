import Button from "@components/UI/Button";
import SectionHeader from "./common/SectionHeader";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

function Blogs() {
    return (
        <section className="blogs-section" id="blogs">
            <SectionHeader
                beforeTitle="A Knowledge Treasure Trove"
                title="Explore FutureTech's In-Depth Blog Posts"
            >
                <Button to="/" variant="secondary" className="flex items-center justify-center gap-2">
                    <span>View All Blogs</span>
                    <FontAwesomeIcon icon={faArrowRight} className="-rotate-45 text-yellow-55" />
                </Button>
            </SectionHeader>
            <div className="container">
                Blogs
            </div>
        </section>
    )
}

export default Blogs;