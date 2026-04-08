import Button from "@components/UI/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import ctaCards from "@data/ctaCards.json";

function CTA() {
    return (
        <section className="cta py-12 md:py-16 bg-dark-10">
            <div className="container p-5 md:p-8 xl:p-10">
                <div className="flex flex-col md:flex-row md:items-center gap-5 md:gap-8 mb-8 md:mb-10">
                    <img
                        src="/src/assets/images/icon-logo.png"
                        alt="FutureTech logo icon"
                        className="w-14 md:w-16 xl:w-20"
                    />

                    <div>
                        <div className="bg-dark-20 rounded-sm py-2 px-4 mb-4 w-fit">Learn, Connect, and Innovate</div>
                        <h2 className="text-2xl md:text-3xl xl:text-4xl font-medium mb-3">Be Part of the Future Tech Revolution</h2>
                        <p>
                            Immerse yourself in the world of future technology. Explore our comprehensive resources, connect with fellow
                            tech enthusiasts, and drive innovation in the industry. Join a dynamic community of forward-thinkers.
                        </p>
                    </div>
                </div>

                <div className="grid grid-cols-1 xl:grid-cols-3 gap-4 border border-dark-15 bg-dark-08 p-4 rounded-lg">
                    {
                        ctaCards.map((card) => (
                            <article key={card.title} className="bg-dark-10 border border-dark-15 rounded-xl p-5 md:p-6">
                                <div className="flex items-start justify-between gap-4 mb-4">
                                    <h3 className="text-lg font-medium">{card.title}</h3>
                                    <Button to="/" variant="icon">
                                        <FontAwesomeIcon icon={faArrowRight} className="-rotate-45" />
                                    </Button>
                                </div>
                                <p>{card.description}</p>
                            </article>
                        ))
                    }
                </div>
            </div>
        </section>
    )
}

export default CTA;