import { Resend } from "resend";
import type { EmailService } from "@/domain/services/EmailService";

export class ResendEmailService implements EmailService {
  private resend: Resend;

  constructor() {
    this.resend = new Resend(process.env.RESEND_API_KEY!);
  }

  async send(params: {
    to: string;
    subject: string;
    html: string;
  }): Promise<void> {
    try {
      await this.resend.emails.send({
        from: process.env.EMAIL_FROM!,
        ...params,
      });
    } catch (error) {
      console.error("Email sending failed:", error);
      throw new Error("Failed to send email");
    }
  }
}
