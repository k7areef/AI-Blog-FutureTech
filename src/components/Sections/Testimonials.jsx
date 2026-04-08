import Button from "@components/UI/Button";
import SectionHeader from "./common/SectionHeader";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

function Testimonials() {
    return (
        <section className="testimonials-section" id="testimonials">
            {/* Section Header */}
            <SectionHeader
                beforeTitle="What Our Readers Say"
                title="Real Words from Real Readers"
            >
                <Button to="/" variant="secondary" className="flex items-center justify-center gap-2">
                    <span>View All</span>
                    <FontAwesomeIcon icon={faArrowRight} className="-rotate-45 text-yellow-55" />
                </Button>
            </SectionHeader>
            {/* Testimonials List */}
            <div className="container">
            </div>
        </section>
    )
}

export default Testimonials;