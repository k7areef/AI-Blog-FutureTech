import Button from "@components/UI/Button";
import SectionHeader from "./common/SectionHeader";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faStar } from "@fortawesome/free-solid-svg-icons";
import testimonials from "@data/testimonials.json";

import image1 from "@assets/images/testimonials/testimonial-1.png";
import image2 from "@assets/images/testimonials/testimonial-2.png";
import image3 from "@assets/images/testimonials/testimonial-3.png";
import image4 from "@assets/images/testimonials/testimonial-4.png";
import image5 from "@assets/images/testimonials/testimonial-5.png";
import image6 from "@assets/images/testimonials/testimonial-6.png";

const testimonialImages = [image1, image2, image3, image4, image5, image6];

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
            <div className="container grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3">
                {
                    testimonials.map((testimonial, index) => {
                        const isLastRowMobile = index >= testimonials.length - 1;
                        const isLastRowMd = index >= testimonials.length - 2;
                        const isLastRowXl = index >= testimonials.length - 3;

                        return (
                            <article
                                key={testimonial.name}
                                className={`
                                    border-x border-dark-15 p-6 md:p-8 xl:p-10
                                    ${isLastRowMobile ? "border-b-0" : "border-b"}
                                    ${isLastRowMd ? "md:border-b-0" : "md:border-b"}
                                    ${isLastRowXl ? "xl:border-b-0" : "xl:border-b"}
                                     flex flex-col gap-6
                                `}
                            >
                                <div className="flex items-center gap-3">
                                    <img
                                        src={testimonialImages[index]}
                                        alt={`${testimonial.name} avatar`}
                                        className="w-12 h-12 rounded-full object-cover"
                                    />
                                    <div>
                                        <h3 className="text-lg font-medium">{testimonial.name}</h3>
                                        <p className="text-sm">{testimonial.location}</p>
                                    </div>
                                </div>

                                <div className="bg-dark-10 border border-dark-15 rounded-xl p-5 flex-1">
                                    <div className="flex items-center gap-2 mb-4">
                                        {
                                            Array.from({ length: 5 }).map((_, starIndex) => (
                                                <FontAwesomeIcon
                                                    key={`${testimonial.name}-${starIndex}`}
                                                    icon={faStar}
                                                    className="text-yellow-55"
                                                />
                                            ))
                                        }
                                    </div>
                                    <p>{testimonial.content}</p>
                                </div>
                            </article>
                        );
                    })
                }
            </div>
        </section>
    )
}

export default Testimonials;