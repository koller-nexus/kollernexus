/* eslint-disable @typescript-eslint/no-unused-vars */
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
    } catch (err: any) {
      setStatus("error");
      setError(err?.message ?? "Falha ao enviar. Tente novamente.");
    }
  }

  return (
    <form className="mt-8 grid gap-4 card" aria-describedby="form-note" onSubmit={onSubmit}>
      <div className="grid gap-1">
        <label htmlFor="nome" className="text-sm font-medium">
          Nome
        </label>
        <input
          id="nome"
          name="nome"
          placeholder="Seu nome"
          className="h-11 rounded-md border px-3"
          style={{ borderColor: "var(--color-border)" }}
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          minLength={2}
          maxLength={100}
        />
      </div>
      <div className="grid gap-1">
        <label htmlFor="email" className="text-sm font-medium">
          E-mail
        </label>
        <input
          id="email"
          name="email"
          type="email"
          placeholder="voce@empresa.com"
          className="h-11 rounded-md border px-3"
          style={{ borderColor: "var(--color-border)" }}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          maxLength={254}
        />
      </div>
      <div className="grid gap-1">
        <label htmlFor="mensagem" className="text-sm font-medium">
          Mensagem
        </label>
        <textarea
          id="mensagem"
          name="mensagem"
          placeholder="Conte um pouco sobre o desafio"
          rows={5}
          className="rounded-md border px-3 py-2"
          style={{ borderColor: "var(--color-border)" }}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
          minLength={5}
          maxLength={5000}
        />
      </div>
      <div className="flex items-center justify-between">
        <p id="form-note" className="text-sm text-[var(--color-muted)]">
          Seus dados serão usados apenas para retorno de contato.
        </p>
        <button className="btn-primary" disabled={status === "loading"}>
          {status === "loading" ? "Enviando..." : "Enviar"}
        </button>
      </div>

      {status === "success" && (
        <p role="status" className="text-sm text-green-700">
          Mensagem enviada com sucesso.
        </p>
      )}
      {status === "error" && (
        <p role="alert" className="text-sm text-red-700">
          {error}
        </p>
      )}
    </form>
  );
}

