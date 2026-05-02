import Nav from "../components/Nav";
import Footer from "../components/Footer";

const CURRENT_ROLES = [
  {
    period: "2024 — Present",
    company: "Example Company",
    role: "Your role",
    description: "Brief description of what you do here. Add specific outcomes.",
    metrics: [
      { value: "100+", label: "metric one" },
      { value: "10x", label: "metric two" },
    ],
  },
  {
    period: "2023 — Present",
    company: "Another Place",
    role: "Side role or internship",
    description: "Another short description.",
    link: { label: "example.com", href: "https://example.com" },
  },
];

const PAST_ROLES = [
  {
    period: "2022",
    company: "Previous Employer",
    parent: "Parent Co.",
    role: "Previous role",
    description: "What you did and why it mattered.",
  },
];

const EDUCATION = [
  {
    period: "2022 — 2024",
    school: "Your University",
    degree: "MS, Your Field · GPA X.X",
  },
  {
    period: "2018 — 2022",
    school: "Undergrad Institution",
    degree: "BS, Your Field",
  },
];

const TOOLS_AND_AREAS = [
  "Skill 1",
  "Skill 2",
  "Skill 3",
  "Domain area",
];

export default function ExperiencePage() {
  return (
    <>
      <Nav />

      <main className="experience-main">
        <div className="page-intro">
          <h1 className="page-title">Experience</h1>
          <p className="page-lede">
            [Brief professional summary — your current focus, where you are in your career, what kinds of conversations you're open to.]
          </p>
          <a href="/cv.pdf" className="cv-button" download="Resume.pdf">
            Download CV ↓
          </a>
        </div>

        <section className="work-section">
          <div className="section-label">Current</div>
          {CURRENT_ROLES.map((role, i) => (
            <article
              key={role.company}
              className={`work-row ${
                i < CURRENT_ROLES.length - 1 ? "work-row-divider" : ""
              }`}
            >
              <span className="work-period">{role.period}</span>
              <div className="work-body">
                <div className="work-company">{role.company}</div>
                <div className="work-role">{role.role}</div>
                <p className="work-desc">{role.description}</p>
                {role.metrics && (
                  <div className="work-metrics">
                    {role.metrics.map((m) => (
                      <span key={m.label}>
                        <strong>{m.value}</strong> {m.label}
                      </span>
                    ))}
                  </div>
                )}
                {role.link && (
                  <a href={role.link.href} className="work-link">
                    {role.link.label} →
                  </a>
                )}
              </div>
            </article>
          ))}
        </section>

        <section className="work-section">
          <div className="section-label">Past</div>
          {PAST_ROLES.map((role, i) => (
            <article
              key={role.company}
              className={`work-row ${
                i < PAST_ROLES.length - 1 ? "work-row-divider" : ""
              }`}
            >
              <span className="work-period">{role.period}</span>
              <div className="work-body">
                <div className="work-company">
                  {role.company}
                  {role.parent && (
                    <span className="work-parent"> / {role.parent}</span>
                  )}
                </div>
                <div className="work-role">{role.role}</div>
                <p className="work-desc">{role.description}</p>
              </div>
            </article>
          ))}
        </section>

        <section className="work-section">
          <div className="section-label">Education</div>
          {EDUCATION.map((edu, i) => (
            <div
              key={edu.school}
              className={`work-row work-row-tight ${
                i < EDUCATION.length - 1 ? "work-row-divider" : ""
              }`}
            >
              <span className="work-period">{edu.period}</span>
              <div className="work-body">
                <div className="work-school">{edu.school}</div>
                <div className="work-role">{edu.degree}</div>
              </div>
            </div>
          ))}
        </section>

        <section className="work-tools">
          <div className="section-label">Tools &amp; areas</div>
          <div className="work-tools-row">
            {TOOLS_AND_AREAS.map((tool) => (
              <span key={tool}>{tool}</span>
            ))}
          </div>
        </section>
      </main>

      <Footer />

      <style>{`
        .experience-main {
          flex: 1;
        }
        .cv-button {
          display: inline-block;
          margin-top: 22px;
          font-family: var(--font-geist-mono), monospace;
          font-size: 12px;
          letter-spacing: 0.04em;
          color: var(--ink);
          padding: 8px 14px;
          border: 0.5px solid var(--line-strong);
          border-radius: 4px;
          transition: background 0.15s ease;
        }
        .cv-button:hover {
          background: var(--bg-elev);
        }
        .work-section {
          padding: 0 40px;
        }
        .work-row {
          display: grid;
          grid-template-columns: 100px 1fr;
          gap: 24px;
          padding: 26px 0;
        }
        .work-row-tight {
          padding: 22px 0;
        }
        .work-row-divider {
          border-bottom: 1px solid var(--line);
        }
        .work-period {
          font-size: 12px;
          color: var(--ink-3);
          white-space: pre-line;
        }
        .work-body {
          min-width: 0;
        }
        .work-company,
        .work-school {
          font-size: 16px;
          font-weight: 500;
          color: var(--ink);
          margin-bottom: 2px;
        }
        .work-school {
          font-size: 14px;
        }
        .work-parent {
          color: var(--ink-3);
          font-weight: 400;
          font-size: 13px;
        }
        .work-role {
          font-size: 13px;
          color: var(--ink-2);
          margin-bottom: 14px;
        }
        .work-row-tight .work-role {
          margin-bottom: 0;
        }
        .work-desc {
          font-size: 14px;
          line-height: 1.65;
          color: var(--ink-2);
          margin: 0 0 10px;
        }
        .work-metrics {
          display: flex;
          gap: 18px;
          font-size: 12px;
          color: var(--ink-2);
          flex-wrap: wrap;
          margin-top: 4px;
        }
        .work-metrics strong {
          color: var(--ink);
          font-weight: 500;
        }
        .work-link {
          font-size: 12px;
          color: var(--ink-2);
          font-family: var(--font-geist-mono), monospace;
        }
        .work-link:hover {
          color: var(--ink);
        }
        .work-tools {
          padding: 0 40px 32px;
        }
        .work-tools-row {
          display: flex;
          flex-wrap: wrap;
          gap: 8px 22px;
          padding: 18px 0 4px;
          font-size: 13px;
          color: var(--ink);
        }
        @media (max-width: 540px) {
          .work-section,
          .work-tools {
            padding-left: 22px;
            padding-right: 22px;
          }
          .work-row {
            grid-template-columns: 1fr;
            gap: 6px;
            padding: 22px 0;
          }
          .work-period {
            font-size: 11px;
            white-space: normal;
          }
        }
      `}</style>
    </>
  );
}
