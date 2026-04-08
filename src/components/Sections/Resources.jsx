import Button from "@components/UI/Button";
import SectionHeader from "./common/SectionHeader";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

function Resources() {
    return (
        <section className="resources-section" id="resources">
            <SectionHeader
                beforeTitle="Your Gateway to In-Depth Information"
                title="Unlock Valuable Knowledge with FutureTech's Resources"
            >
                <Button to="/" variant="secondary" className="flex items-center justify-center gap-2">
                    <span>View All Resources</span>
                    <FontAwesomeIcon icon={faArrowRight} className="-rotate-45 text-yellow-55" />
                </Button>
            </SectionHeader>
            <div className="container">
                Resources
            </div>
        </section>
    )
}

export default Resources;