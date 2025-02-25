"use server";

import { SubmitContactForm } from "@/application/use-cases/contact/SubmitContactForm";
import { ContactRepositoryFactory } from "@/infrastructure/database/ContactRepositoryFactory";
import { EmailServiceFactory } from "@/infrastructure/services/email/EmailServiceFactory";

type FormState = {
  hasError: boolean;
  message: string;
};

export async function submitContactForm(
  prevState: FormState,
  formData: FormData
) {
  const repository = await ContactRepositoryFactory.create();
  const emailService = EmailServiceFactory.create();

  return await SubmitContactForm.execute(formData, repository, emailService);
}
