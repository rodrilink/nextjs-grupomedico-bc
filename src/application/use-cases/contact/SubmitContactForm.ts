import type { ContactFormData } from "@/domain/models/ContactForm";
import type { ContactRepository } from "@/domain/repositories/ContactRepository";
import type { EmailService } from "@/domain/services/EmailService";

export class SubmitContactForm {
  static async execute(
    data: FormData,
    repository: ContactRepository,
    emailService: EmailService
  ) {
    const formData: ContactFormData = {
      name: data.get("name") as string,
      email: data.get("email") as string,
      message: data.get("message") as string,
    };

    // Save to database
    await repository.saveContactForm(formData);

    // Send notification email
    await emailService.send({
      to: process.env.ADMIN_EMAIL!,
      subject: "New Contact Form Submission",
      html: `
        <h1>New Contact Submission</h1>
        <p>From: ${formData.name} (${formData.email})</p>
        <p>Message: ${formData.message}</p>
      `,
    });

    return { hasError: false, message: "Message sent" };
  }
}
