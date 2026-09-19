/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";

export default function ContactForm() {
  return (
    <form
      className="mt-8 grid gap-4 card"
      aria-describedby="form-note"
      onSubmit={(e) => e.preventDefault()}
    >
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
        />
      </div>
      <div className="flex items-center justify-between">
        <p id="form-note" className="text-sm text-[var(--color-muted)]">
          Formulário não funcional por enquanto.
        </p>
        <button className="btn-primary" aria-disabled>
          Enviar
        </button>
      </div>
    </form>
  );
}

