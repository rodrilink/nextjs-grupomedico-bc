import type { ContactRepository } from "@/domain/repositories/ContactRepository";
import type { ContactFormData } from "@/domain/models/ContactForm";
import { SupabaseClient } from "@supabase/supabase-js";

export class SupabaseContactRepository implements ContactRepository {
  private supabase: SupabaseClient | null = null;

  constructor(_supabase: SupabaseClient) {
    this.supabase = _supabase;
  }

  // async init() {
  //   this.supabase = await createClient();
  // }

  async saveContactForm(formData: ContactFormData): Promise<void> {
    if (!this.supabase) {
      throw new Error("Supabase client not initialized");
    }

    const { error } = await this.supabase.from("contact_submissions").insert({
      name: formData.name,
      email: formData.email,
      message: formData.message,
      created_at: new Date().toISOString(),
    });

    if (error) {
      throw new Error(`Supabase insert error: ${error.message}`);
    }
  }
}
