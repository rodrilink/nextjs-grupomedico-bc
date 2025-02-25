/* eslint-disable @typescript-eslint/no-unused-vars */
import { NextRequest } from "next/server";
import { ContactRepositoryFactory } from "@/infrastructure/database/ContactRepositoryFactory";

export async function POST(req: NextRequest) {
  const repository = await ContactRepositoryFactory.create();
  // Handle API request
}
