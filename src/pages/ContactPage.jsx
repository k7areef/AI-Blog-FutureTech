import ContactForm from "@components/Sections/ContactForm";
import Faqs from "@components/Sections/Faqs";
import HeaderSection from "@components/Sections/HeaderSection";
import useChangeTitle from "@hooks/useChangeTitle";

function ContactPage() {
    useChangeTitle("Contact");
    return (
        <div className="contact-page">
            <HeaderSection />
            <ContactForm />
            <Faqs />
        </div>
    )
}

export default ContactPage;