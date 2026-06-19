"use server";

import { z } from "zod";
import { prisma } from "@/lib/prisma";

const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  projectType: z.string().min(2, "Please select a project type"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

export async function submitContact(data: z.infer<typeof contactSchema>) {
  try {
    const validatedData = contactSchema.parse(data);

    await prisma.contact.create({
      data: validatedData,
    });

    return { success: true };
  } catch (error) {
    console.error("Failed to submit contact:", error);
    return { success: false, error: "Failed to submit request." };
  }
}
