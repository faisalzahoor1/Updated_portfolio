"use client";

import { useState, type FormEvent } from "react";
import { site } from "@/lib/data";
import { SendIcon } from "./Icons";

type Status = { kind: "idle" | "ok" | "err"; text?: string };

/** Sends queries to the owner's inbox through FormSubmit (no backend needed). */
export default function ContactForm() {
  const [sending, setSending] = useState(false);
  const [status, setStatus] = useState<Status>({ kind: "idle" });

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form)) as Record<string, string>;
    setSending(true);
    setStatus({ kind: "idle" });
    try {
      const res = await fetch(`https://formsubmit.co/ajax/${site.email}`, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          ...data,
          _replyto: data.email,
          _subject: "New query from your portfolio 🚀",
          _template: "table",
          _captcha: "false",
        }),
      });
      const json = await res.json().catch(() => ({}));
      if (!res.ok || String(json.success) === "false") throw new Error(json.message || "Request failed");
      setStatus({ kind: "ok", text: "✅ Thanks! Your message has been sent — I'll reply to your email soon." });
      form.reset();
    } catch {
      setStatus({ kind: "err" });
    } finally {
      setSending(false);
    }
  };

  return (
    <form className="form glass" data-reveal="" onSubmit={onSubmit}>
      <input type="text" name="_honey" className="hp" tabIndex={-1} autoComplete="off" aria-hidden="true" />
      <div className="form__row">
        <div className="field">
          <input type="text" id="name" name="name" placeholder=" " required autoComplete="name" />
          <label htmlFor="name">Your name</label>
        </div>
        <div className="field">
          <input type="email" id="email" name="email" placeholder=" " required autoComplete="email" />
          <label htmlFor="email">Your email</label>
        </div>
      </div>
      <div className="field">
        <input type="text" id="subject" name="subject" placeholder=" " />
        <label htmlFor="subject">Subject</label>
      </div>
      <div className="field">
        <textarea id="message" name="message" rows={5} placeholder=" " required />
        <label htmlFor="message">Your query / message</label>
      </div>
      <button type="submit" className="btn btn--primary btn--block magnetic" disabled={sending}>
        <span>{sending ? "Sending…" : "Send message"}</span>
        <SendIcon />
      </button>
      <p className={`form__status${status.kind === "ok" ? " ok" : status.kind === "err" ? " err" : ""}`} role="status" aria-live="polite">
        {status.kind === "ok" && status.text}
        {status.kind === "err" && (
          <>Couldn&apos;t send right now. Please email me directly at <a href={`mailto:${site.email}`} style={{ textDecoration: "underline" }}>{site.email}</a>.</>
        )}
      </p>
    </form>
  );
}
