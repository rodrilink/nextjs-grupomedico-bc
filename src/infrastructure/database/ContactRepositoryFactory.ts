import { SupabaseContactRepository } from "./supabase/SupabaseContactRepository";
import type { ContactRepository } from "@/domain/repositories/ContactRepository";
import { createClient } from "@/lib/supabase";

export class ContactRepositoryFactory {
  static async create(): Promise<ContactRepository> {
    switch (process.env.DB_TYPE) {
      case "mongodb":
      // return new MongoContactRepository();
      case "supabase":
        const supabase = await createClient();

        return new SupabaseContactRepository(supabase);
      default:
        throw new Error("Invalid DB_TYPE environment variable");
    }
  }
}
