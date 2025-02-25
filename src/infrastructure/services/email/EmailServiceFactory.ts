import { ResendEmailService } from "./EmailService";
import { MockEmailService } from "./MockEmailService";
import type { EmailService } from "@/domain/services/EmailService";

export class EmailServiceFactory {
  static create(): EmailService {
    return process.env.NODE_ENV === "production"
      ? new ResendEmailService()
      : new MockEmailService();
  }
}
