import { NextResponse } from "next/server";
import { Resend } from "resend";

type Body = {
  name?: string;
  email?: string;
  message?: string;
};

const CONTACT_TO = process.env.CONTACT_TO || "contato@kollernexus.com.br";
const RESEND_API_KEY = process.env.RESEND_API_KEY;
const RESEND_FROM =
  process.env.RESEND_FROM || "Koller Nexus <contato@kollernexus.com.br>";

export async function POST(request: Request) {
  let body: Body;
  try {
    body = (await request.json()) as Body;
  } catch {
    return NextResponse.json(
      { message: "Invalid JSON body." },
      { status: 400 },
    );
  }

  const name = (body.name || "").trim();
  const email = (body.email || "").trim();
  const message = (body.message || "").trim();

  if (name.length < 2 || name.length > 100) {
    return NextResponse.json(
      { message: "Nome deve ter entre 2 e 100 caracteres." },
      { status: 422 },
    );
  }
  if (
    !/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email) ||
    email.length > 254
  ) {
    return NextResponse.json(
      { message: "E-mail inválido." },
      { status: 422 },
    );
  }
  if (message.length < 5 || message.length > 5000) {
    return NextResponse.json(
      { message: "Mensagem deve ter entre 5 e 5000 caracteres." },
      { status: 422 },
    );
  }

  if (!RESEND_API_KEY) {
    return NextResponse.json(
      {
        message:
          "Envio desabilitado: defina RESEND_API_KEY (e verifique domínio/remetente).",
      },
      { status: 501 },
    );
  }

  const resend = new Resend(RESEND_API_KEY);
  try {
    const subject = `Novo contato — ${name}`;
    const html = `
      <div style="font-family: system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial, sans-serif; line-height: 1.6;">
        <h2 style="margin:0 0 12px 0;">Koller Nexus — Contato</h2>
        <p><strong>Nome:</strong> ${escapeHtml(name)}</p>
        <p><strong>E-mail:</strong> ${escapeHtml(email)}</p>
        <p><strong>Mensagem:</strong></p>
        <p style="white-space: pre-wrap;">${escapeHtml(message)}</p>
      </div>
    `;
    const { error } = await resend.emails.send({
      from: RESEND_FROM,
      to: [CONTACT_TO],
      replyTo: [email],
      subject,
      html,
    });
    if (error) {
      return NextResponse.json(
        { message: "Falha ao enviar e-mail.", detail: String(error) },
        { status: 502 },
      );
    }
    return NextResponse.json({ ok: true });
  } catch (err) {
    return NextResponse.json(
      { message: "Erro inesperado ao enviar e-mail." },
      { status: 500 },
    );
  }
}

function escapeHtml(input: string) {
  return input
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

