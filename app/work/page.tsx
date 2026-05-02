import Nav from "../components/Nav";
import Footer from "../components/Footer";

export default function WorkPage() {
  return (
    <>
      <Nav />

      <main className="work-main">
        <div className="work-inner">
          <div className="work-marker">Soon.</div>
          <p className="work-body">
            Notes on the parts of crypto that move slowly — silicon, energy,
            protocol design, and the institutional plumbing.
          </p> 
        </div>
      </main>

      <Footer />

      <style>{`
        .work-main {
          flex: 1;
          display: flex;
          align-items: center;
          padding: 80px 40px;
        }
        .work-inner {
          max-width: 480px;
        }
        .work-marker {
          font-family: var(--font-geist-mono), monospace;
          font-size: 13px;
          color: var(--ink-3);
          letter-spacing: 0.04em;
          margin-bottom: 18px;
        }
        .work-body {
          font-size: 17px;
          line-height: 1.65;
          color: var(--ink);
          margin: 0;
          letter-spacing: -0.005em;
        }
        @media (max-width: 540px) {
          .work-main {
            padding: 56px 22px;
          }
          .work-body {
            font-size: 16px;
          }
        }
      `}</style>
    </>
  );
}
