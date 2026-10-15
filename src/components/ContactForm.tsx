"use client";

import { useState } from "react";
import http from "@/lib/http";

export default function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">(
    "idle",
  );
  const [error, setError] = useState<string | null>(null);

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("loading");
    setError(null);
    try {
      await http.post("/api/contact", { name, email, message });
      setStatus("success");
      setName("");
      setEmail("");
      setMessage("");
    } catch (err: unknown) {
      setStatus("error");
      setError(
        err instanceof Error ? err.message : "Falha ao enviar. Tente novamente.",
      );
    }
  }

  return (
    <form className="contact-form" aria-describedby="form-note" onSubmit={onSubmit}>
      <div className="form-row">
        <div className="form-field">
          <label htmlFor="nome" className="caps">
            Nome
          </label>
          <input
            id="nome"
            name="nome"
            placeholder="Seu nome"
            autoComplete="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            minLength={2}
            maxLength={100}
          />
        </div>
        <div className="form-field">
          <label htmlFor="email" className="caps">
            E-mail
          </label>
          <input
            id="email"
            name="email"
            type="email"
            placeholder="voce@empresa.com"
            autoComplete="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            maxLength={254}
          />
        </div>
      </div>
      <div className="form-field">
        <label htmlFor="mensagem" className="caps">
          Mensagem
        </label>
        <textarea
          id="mensagem"
          name="mensagem"
          placeholder="O que você está construindo e onde posso ajudar?"
          rows={6}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
          minLength={5}
          maxLength={5000}
        />
      </div>
      <div className="contact-form-footer">
        <p id="form-note" className="contact-form-note">
          Uso seus dados só para responder a esta mensagem.
        </p>
        <button className="button-primary" disabled={status === "loading"}>
          {status === "loading" ? "Enviando…" : "Enviar mensagem"}
        </button>
      </div>

      {status === "success" && (
        <p role="status" className="form-status form-status--success">
          Recebi sua mensagem. Respondo no e-mail que você informou.
        </p>
      )}
      {status === "error" && (
        <p role="alert" className="form-status form-status--error">
          {error}
        </p>
      )}
    </form>
  );
}
