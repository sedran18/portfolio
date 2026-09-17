"use client";

import type { FormEvent } from "react";
import { Button } from "@/components/ui/Button";
import type { Messages } from "@/types";

type ContactFormProps = {
  messages: Messages;
};

export function ContactForm({ messages }: ContactFormProps) {
  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-lg space-y-5"
      noValidate
    >
      <p className="text-sm text-muted">{messages.form.demoNotice}</p>
      <div>
        <label htmlFor="name" className="mb-2 block text-sm text-foreground">
          {messages.sections.contact.name}
        </label>
        <input
          id="name"
          name="name"
          type="text"
          autoComplete="name"
          placeholder={messages.sections.contact.namePlaceholder}
          className="w-full rounded-md border border-border bg-surface px-3 py-2.5 text-sm text-foreground outline-none placeholder:text-zinc-600 transition-[border-color] duration-200 focus-visible:border-accent"
        />
      </div>
      <div>
        <label htmlFor="email" className="mb-2 block text-sm text-foreground">
          {messages.sections.contact.email}
        </label>
        <input
          id="email"
          name="email"
          type="email"
          autoComplete="email"
          placeholder={messages.sections.contact.emailPlaceholder}
          className="w-full rounded-md border border-border bg-surface px-3 py-2.5 text-sm text-foreground outline-none placeholder:text-zinc-600 transition-[border-color] duration-200 focus-visible:border-accent"
        />
      </div>
      <div>
        <label htmlFor="message" className="mb-2 block text-sm text-foreground">
          {messages.sections.contact.message}
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          placeholder={messages.sections.contact.messagePlaceholder}
          className="w-full resize-y rounded-md border border-border bg-surface px-3 py-2.5 text-sm text-foreground outline-none placeholder:text-zinc-600 transition-[border-color] duration-200 focus-visible:border-accent"
        />
      </div>
      <Button type="submit">{messages.actions.send}</Button>
      <p className="text-xs leading-relaxed text-zinc-500">
        {messages.actions.sendingNote}
      </p>
    </form>
  );
}
