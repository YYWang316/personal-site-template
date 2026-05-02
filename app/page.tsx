import Image from "next/image";
import Nav from "./components/Nav";
import Footer from "./components/Footer";


export default function Home() {
  return (
    <>
      <Nav />

      <main className="home-hero">
        <Image
          src="/images/profile.jpg"
          alt="Portrait"
          width={2000}
          height={2000}
          priority
          className="home-portrait"
        />
        <p className="home-lede">
          [Your tagline — one memorable sentence about who you are.]
        </p>
        <p className="home-body">
          [A short paragraph expanding on the tagline. What do you care about? What are you working on? Keep it specific — vague claims read as filler.]
        </p>
        <p className="home-tagline">
          [Optional closing line, slightly emphasized.]
        </p>
      </main>

      <Footer />

      <style>{`
        .home-hero {
          flex: 1;
          padding: 80px 40px;
          max-width: 600px;
          display: flex;
          flex-direction: column;
          justify-content: center;
        }
        .home-portrait {
          width: 200px;
          height: 200px;
          object-fit: cover;
          border-radius: 6px;
          border: 0.5px solid var(--line);
          margin-bottom: 28px;
        }
        .home-lede {
          font-size: 24px;
          line-height: 1.5;
          color: var(--ink);
          margin: 0 0 24px;
          letter-spacing: -0.01em;
        }
        .home-body {
          font-size: 15.5px;
          line-height: 1.75;
          color: var(--ink-2);
          margin: 0 0 18px;
        }
        .home-tagline {
          font-size: 15.5px;
          line-height: 1.75;
          color: var(--ink);
          margin: 0;
          font-weight: 500;
        }
        @media (max-width: 540px) {
          .home-hero {
            padding: 56px 22px;
          }
          .home-lede {
            font-size: 21px;
          }
        }
      `}</style>
    </>
  );
}
