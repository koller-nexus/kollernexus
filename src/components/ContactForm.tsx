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
      <div className="form-field">
        <label htmlFor="nome">
          Nome
        </label>
        <input
          id="nome"
          name="nome"
          placeholder="Seu nome"
          autoComplete="name"
          className="form-input"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          minLength={2}
          maxLength={100}
        />
      </div>
      <div className="form-field">
        <label htmlFor="email">
          E-mail
        </label>
        <input
          id="email"
          name="email"
          type="email"
          placeholder="voce@empresa.com"
          autoComplete="email"
          className="form-input"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          maxLength={254}
        />
      </div>
      <div className="form-field">
        <label htmlFor="mensagem">
          Mensagem
        </label>
        <textarea
          id="mensagem"
          name="mensagem"
          placeholder="Conte um pouco sobre o desafio"
          rows={5}
          className="form-textarea"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
          minLength={5}
          maxLength={5000}
        />
      </div>
      <div className="contact-form-footer">
        <p id="form-note" className="contact-form-note">
          Seus dados serão usados apenas para retorno de contato.
        </p>
        <button className="button-primary" disabled={status === "loading"}>
          {status === "loading" ? "Enviando..." : "Enviar"}
        </button>
      </div>

      {status === "success" && (
        <p role="status" className="form-status form-status--success">
          Mensagem enviada com sucesso.
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
