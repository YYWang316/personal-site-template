"use client";

import { useState, FormEvent } from "react";

type Status = "idle" | "submitting" | "success" | "error";

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState<string>("");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");
    setErrorMsg("");

    const form = e.currentTarget;
    const data = {
      firstName: (form.elements.namedItem("firstName") as HTMLInputElement)
        ?.value,
      lastName: (form.elements.namedItem("lastName") as HTMLInputElement)
        ?.value,
      email: (form.elements.namedItem("email") as HTMLInputElement)?.value,
      affiliation: (
        form.elements.namedItem("affiliation") as HTMLInputElement
      )?.value,
      message: (form.elements.namedItem("message") as HTMLTextAreaElement)
        ?.value,
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) {
        const text = await res.text();
        throw new Error(text || "Something went wrong");
      }
      setStatus("success");
      form.reset();
    } catch (err) {
      setStatus("error");
      setErrorMsg(err instanceof Error ? err.message : "Something went wrong");
    }
  }

  if (status === "success") {
    return (
      <div className="form-success">
        <p className="form-success-headline">Got it.</p>
        <p className="form-success-body">
          I’ll get back to you within 48 hours.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="contact-form" noValidate>
      <div className="form-grid-2">
        <div>
          <label className="form-label" htmlFor="firstName">
            First name
          </label>
          <input
            id="firstName"
            name="firstName"
            type="text"
            placeholder="Jane"
            required
            className="form-input"
          />
        </div>
        <div>
          <label className="form-label" htmlFor="lastName">
            Last name
          </label>
          <input
            id="lastName"
            name="lastName"
            type="text"
            placeholder="Doe"
            required
            className="form-input"
          />
        </div>
      </div>

      <div className="form-field">
        <label className="form-label" htmlFor="email">
          Preferred email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          placeholder="jane@firm.com"
          required
          className="form-input"
        />
      </div>

      <div className="form-field">
        <label className="form-label" htmlFor="affiliation">
          Affiliation{" "}
          <span className="form-label-optional">— optional</span>
        </label>
        <input
          id="affiliation"
          name="affiliation"
          type="text"
          placeholder="Firm, role, or how we’re connected"
          className="form-input"
        />
      </div>

      <div className="form-field-textarea">
        <label className="form-label form-label-spaced" htmlFor="message">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          required
          placeholder="What would you like to talk about?"
          className="form-textarea"
        />
      </div>

      <div className="form-footer">
        <span className="form-note">
          I read everything — usually reply within 48 hours.
        </span>
        <button
          type="submit"
          disabled={status === "submitting"}
          className="form-send"
        >
          {status === "submitting" ? "Sending…" : "Send →"}
        </button>
      </div>

      {status === "error" && (
        <p className="form-error">
          {errorMsg || "Something went wrong. Try again, or email your-email@example.com directly."}
        </p>
      )}

      <style>{`
        .contact-form {
          display: contents;
        }
        .form-grid-2 {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 32px;
          margin-bottom: 28px;
        }
        .form-field {
          margin-bottom: 28px;
        }
        .form-field-textarea {
          margin-bottom: 32px;
        }
        .form-label {
          font-size: 11px;
          color: var(--ink-3);
          letter-spacing: 0.06em;
          display: block;
          margin-bottom: 2px;
          text-transform: uppercase;
        }
        .form-label-spaced {
          margin-bottom: 10px;
        }
        .form-label-optional {
          text-transform: none;
          letter-spacing: 0;
          color: var(--ink-3);
        }
        .form-input {
          width: 100%;
          background: transparent;
          border: none;
          border-bottom: 0.5px solid var(--line-strong);
          padding: 10px 0;
          font-size: 14px;
          color: var(--ink);
          font-family: inherit;
          outline: none;
          box-sizing: border-box;
          border-radius: 0;
          transition: border-color 0.15s ease;
        }
        .form-input::placeholder {
          color: var(--ink-3);
        }
        .form-input:focus {
          border-bottom-color: var(--ink);
        }
        .form-textarea {
          width: 100%;
          background: transparent;
          border: 0.5px solid var(--line-strong);
          padding: 12px 14px;
          font-size: 14px;
          color: var(--ink);
          font-family: inherit;
          outline: none;
          box-sizing: border-box;
          resize: vertical;
          min-height: 120px;
          line-height: 1.6;
          border-radius: 4px;
          transition: border-color 0.15s ease;
        }
        .form-textarea::placeholder {
          color: var(--ink-3);
        }
        .form-textarea:focus {
          border-color: var(--ink);
        }
        .form-footer {
          display: flex;
          justify-content: space-between;
          align-items: center;
          flex-wrap: wrap;
          gap: 16px;
        }
        .form-note {
          font-size: 12px;
          color: var(--ink-3);
        }
        .form-send {
          background: var(--ink);
          color: var(--bg);
          border: none;
          padding: 12px 22px;
          font-size: 13px;
          font-weight: 500;
          cursor: pointer;
          font-family: inherit;
          border-radius: 4px;
          letter-spacing: 0.02em;
          transition: opacity 0.15s ease;
        }
        .form-send:disabled {
          opacity: 0.5;
          cursor: not-allowed;
        }
        .form-error {
          margin-top: 18px;
          font-size: 13px;
          color: var(--ink);
          padding: 10px 14px;
          border: 0.5px solid var(--line-strong);
          border-radius: 4px;
        }
        .form-success {
          padding: 60px 0;
        }
        .form-success-headline {
          font-size: 22px;
          font-weight: 500;
          color: var(--ink);
          margin: 0 0 10px;
          letter-spacing: -0.01em;
        }
        .form-success-body {
          font-size: 14px;
          color: var(--ink-2);
          margin: 0;
        }
        @media (max-width: 540px) {
          .form-grid-2 {
            grid-template-columns: 1fr;
            gap: 22px;
          }
          .form-footer {
            flex-direction: column;
            align-items: flex-start;
          }
        }
      `}</style>
    </form>
  );
}
