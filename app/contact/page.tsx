import Nav from "../components/Nav";
import Footer from "../components/Footer";
import ContactForm from "./ContactForm";

export default function ContactPage() {
  return (
    <>
      <Nav />

      <main className="contact-main">
        <div className="page-intro">
          <h1 className="page-title">Get in touch</h1>
          <p className="page-lede">
            [Briefly describe what kinds of conversations you're open to. The form below sends to the email configured in your env vars.]
          </p>
        </div>

        <div className="contact-form-wrap">
          <ContactForm />
        </div>
      </main>

      <Footer />

      <style>{`
        .contact-main {
          flex: 1;
        }
        .contact-form-wrap {
          padding: 8px 40px 40px;
        }
        @media (max-width: 540px) {
          .contact-form-wrap {
            padding-left: 22px;
            padding-right: 22px;
          }
        }
      `}</style>
    </>
  );
}
