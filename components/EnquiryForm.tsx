"use client";

import { useState, type FormEvent } from "react";

type Status = "idle" | "sending" | "success" | "error";

const classes = [
  "Nursery 1",
  "Nursery 2",
  "Kindergarten 1",
  "Kindergarten 2",
  "Primary 1",
  "Primary 2",
  "Primary 3",
  "Primary 4",
  "Primary 5",
  "Primary 6",
];

export default function EnquiryForm({ compact = false }: { compact?: boolean }) {
  const [status, setStatus] = useState<Status>("idle");
  const [message, setMessage] = useState("");

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());

    setStatus("sending");
    setMessage("");

    try {
      const res = await fetch("/api/enquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const json = await res.json().catch(() => ({}));
      if (!res.ok) throw new Error(json.error || "Something went wrong.");
      setStatus("success");
      setMessage("Thank you! We have received your enquiry and will contact you shortly.");
      form.reset();
    } catch (err) {
      setStatus("error");
      setMessage(err instanceof Error ? err.message : "Something went wrong. Please try again.");
    }
  }

  return (
    <form
      onSubmit={onSubmit}
      className="space-y-4 rounded-3xl border border-brown-100 bg-white p-6 shadow-sm sm:p-8"
      noValidate={false}
    >
      {/* Honeypot field: real people never see or fill this */}
      <input
        type="text"
        name="website"
        tabIndex={-1}
        autoComplete="off"
        className="hidden"
        aria-hidden="true"
      />

      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="parentName" className="mb-1 block text-sm font-semibold text-brown-800">
            Parent / Guardian name *
          </label>
          <input id="parentName" name="parentName" required minLength={2} className="input" placeholder="Full name" />
        </div>
        <div>
          <label htmlFor="phone" className="mb-1 block text-sm font-semibold text-brown-800">
            Phone number *
          </label>
          <input id="phone" name="phone" type="tel" required minLength={9} className="input" placeholder="024 000 0000" />
        </div>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="email" className="mb-1 block text-sm font-semibold text-brown-800">
            Email
          </label>
          <input id="email" name="email" type="email" className="input" placeholder="you@example.com" />
        </div>
        <div>
          <label htmlFor="childName" className="mb-1 block text-sm font-semibold text-brown-800">
            Child&apos;s name
          </label>
          <input id="childName" name="childName" className="input" placeholder="Child's full name" />
        </div>
      </div>

      {!compact && (
        <div>
          <label htmlFor="classApplying" className="mb-1 block text-sm font-semibold text-brown-800">
            Class applying for
          </label>
          <select id="classApplying" name="classApplying" className="input" defaultValue="">
            <option value="" disabled>
              Select a class
            </option>
            {classes.map((c) => (
              <option key={c} value={c}>
                {c}
              </option>
            ))}
          </select>
        </div>
      )}

      <div>
        <label htmlFor="message" className="mb-1 block text-sm font-semibold text-brown-800">
          Message *
        </label>
        <textarea
          id="message"
          name="message"
          required
          minLength={5}
          rows={compact ? 4 : 5}
          className="input resize-none"
          placeholder="How can we help you?"
        />
      </div>

      <button type="submit" disabled={status === "sending"} className="btn-primary w-full disabled:cursor-not-allowed disabled:opacity-60">
        {status === "sending" ? "Sending..." : "Send Enquiry"}
      </button>

      {message && (
        <p
          role="status"
          className={`rounded-xl px-4 py-3 text-sm ${
            status === "success" ? "bg-green-50 text-green-800" : "bg-red-50 text-red-800"
          }`}
        >
          {message}
        </p>
      )}
    </form>
  );
}
