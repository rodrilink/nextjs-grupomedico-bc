import type { EmailService } from "@/domain/services/EmailService";

export class MockEmailService implements EmailService {
  async send(params: { to: string; subject: string; html: string }) {
    console.log("Mock email sent:", params);
    // In development, you might want to use https://ethereal.email/
  }
}
