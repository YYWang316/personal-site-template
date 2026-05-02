import Nav from "../components/Nav";
import Footer from "../components/Footer";

const METRICS = [
  { label: "Metric 1", value: "100+" },
  { label: "Metric 2", value: "X–Y" },
  { label: "Metric 3", value: "10+" },
];

const EVENTS_2026 = [
  {
    date: "Jan 1",
    title: "Example event title",
    partner: "Partner name",
    lumaSlug: "example",
  },
];

export default function EventsPage() {
  return (
    <>
      <Nav />

      <main className="events-main">
        <div className="page-intro">
          <h1 className="page-title">Events</h1>
          <p className="page-lede">
            [Describe what kinds of events you run or speak at. Keep it specific to your domain.]
          </p>
        </div>

        <section className="metrics-grid">
          {METRICS.map((m) => (
            <div key={m.label} className="metric-cell">
              <div className="metric-label">{m.label}</div>
              <div className="metric-value">{m.value}</div>
            </div>
          ))}
        </section>

        <section className="events-list">
          <div className="year-label">2026</div>

          {EVENTS_2026.map((e, i) => (
            <article
              key={`${e.date}-${e.title}`}
              className={`event-row ${
                i < EVENTS_2026.length - 1 ? "event-row-divider" : ""
              }`}
            >
              <span className="event-date">{e.date}</span>
              <div className="event-body">
                <div className="event-title">{e.title}</div>
                <a
                  href={`https://luma.com/${e.lumaSlug}`}
                  className="event-luma"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  lu.ma/{e.lumaSlug} →
                </a>
              </div>
              <span className="event-partner">{e.partner}</span>
            </article>
          ))}
        </section>
      </main>

      <Footer />

      <style>{`
        .events-main {
          flex: 1;
        }
        .metrics-grid {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          border-top: 1px solid var(--line);
          border-bottom: 1px solid var(--line);
        }
        .metric-cell {
          padding: 18px 22px;
          border-right: 1px solid var(--line);
        }
        .metric-cell:last-child {
          border-right: none;
        }
        .metric-label {
          font-size: 11px;
          color: var(--ink-3);
          margin-bottom: 6px;
        }
        .metric-value {
          font-size: 22px;
          font-weight: 500;
          color: var(--ink);
        }
        .events-list {
          padding: 0 40px 32px;
        }
        .year-label {
          font-size: 11px;
          color: var(--ink-3);
          letter-spacing: 0.06em;
          padding: 14px 0;
          border-bottom: 1px solid var(--line);
        }
        .event-row {
          display: grid;
          grid-template-columns: 70px 1fr 140px;
          gap: 20px;
          padding: 20px 0;
          align-items: baseline;
        }
        .event-row-divider {
          border-bottom: 1px solid var(--line);
        }
        .event-date {
          font-size: 12px;
          color: var(--ink-3);
        }
        .event-title {
          font-size: 14px;
          color: var(--ink);
          font-weight: 500;
          margin-bottom: 6px;
        }
        .event-luma {
          font-family: var(--font-geist-mono), monospace;
          font-size: 11px;
          color: var(--ink-2);
          letter-spacing: 0.02em;
          transition: color 0.15s ease;
          display: inline-block;
        }
        .event-luma:hover {
          color: var(--ink);
        }
        .event-partner {
          font-size: 12px;
          color: var(--ink-2);
          text-align: right;
        }
        @media (max-width: 540px) {
          .metrics-grid {
            grid-template-columns: 1fr;
          }
          .metric-cell {
            border-right: none;
            border-bottom: 1px solid var(--line);
          }
          .metric-cell:last-child {
            border-bottom: none;
          }
          .events-list {
            padding-left: 22px;
            padding-right: 22px;
          }
          .event-row {
            grid-template-columns: 1fr;
            gap: 6px;
          }
          .event-partner {
            text-align: left;
            font-size: 11px;
            color: var(--ink-3);
          }
        }
      `}</style>
    </>
  );
}
