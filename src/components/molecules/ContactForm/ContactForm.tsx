"use client";

import { useActionState } from "react";
import { submitContactForm } from "@/app/(public)/contact/actions";
import { Input } from "@/components/atoms/Input";
import { Button } from "@/components/atoms/Button";

export function ContactForm() {
  const [, formAction] = useActionState(submitContactForm, {
    message: "",
    hasError: false,
  });

  return (
    <form action={formAction} className="max-w-md space-y-4">
      <Input name="name" label="Name" required />
      <Input name="email" label="Email" type="email" required />
      <Input name="message" label="Message" as="textarea" required />
      <Button type="submit" className="w-full">
        Send Message
      </Button>
    </form>
  );
}
