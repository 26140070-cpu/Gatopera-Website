"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";

interface ContactFormValues {
  name: string;
  email: string;
  message: string;
}

type SubmitState = "idle" | "sending" | "success" | "error";

export default function ContactForm() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormValues>({ mode: "onBlur" });
  const [state, setState] = useState<SubmitState>("idle");

  async function onSubmit(values: ContactFormValues) {
    setState("sending");
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });
      if (!response.ok) throw new Error("request_failed");
      setState("success");
      reset();
    } catch {
      setState("error");
    }
  }

  return (
    <div className="contact-terminal">
      <div className="console-bar">
        <span /><span /><span />
        <code>contact.sh</code>
      </div>
      <form className="contact-body" onSubmit={handleSubmit(onSubmit)} noValidate>
        <label className="contact-field">
          <span>$ name</span>
          <input
            type="text"
            autoComplete="name"
            aria-invalid={errors.name ? "true" : "false"}
            {...register("name", { required: "Requerido", minLength: { value: 2, message: "Muy corto" } })}
          />
          {errors.name && <em role="alert">{errors.name.message}</em>}
        </label>
        <label className="contact-field">
          <span>$ email</span>
          <input
            type="email"
            autoComplete="email"
            aria-invalid={errors.email ? "true" : "false"}
            {...register("email", {
              required: "Requerido",
              pattern: { value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, message: "Email inválido" },
            })}
          />
          {errors.email && <em role="alert">{errors.email.message}</em>}
        </label>
        <label className="contact-field">
          <span>$ message</span>
          <textarea
            rows={5}
            aria-invalid={errors.message ? "true" : "false"}
            {...register("message", { required: "Requerido", minLength: { value: 10, message: "Contá un poco más" } })}
          />
          {errors.message && <em role="alert">{errors.message.message}</em>}
        </label>
        <button className="button button-primary" type="submit" disabled={isSubmitting}>
          {state === "sending" ? "Enviando…" : "Enviar mensaje"} <span>↵</span>
        </button>
        {state === "success" && <p className="contact-status contact-status-ok">Mensaje enviado. Te respondo pronto.</p>}
        {state === "error" && <p className="contact-status contact-status-error">No se pudo enviar. Probá de nuevo o escribime por GitHub.</p>}
      </form>
    </div>
  );
}
