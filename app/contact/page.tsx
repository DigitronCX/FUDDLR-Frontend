"use client";
import ContactSection from "./ContactForm";
import FaqSection from "../about/FaqSection";

const ContactPage = () => {
  return (
    <>
      <main className="min-h-screen">
        <ContactSection />
        <FaqSection />
      </main>
    </>
  )
}

export default ContactPage