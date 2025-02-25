import type { ContactFormData } from "../models/ContactForm";

export interface ContactRepository {
  saveContactForm(formData: ContactFormData): Promise<void>;
}
