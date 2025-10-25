import { type ContactFormData } from "@shared/schema";

export interface IStorage {
  saveContactMessage(data: ContactFormData): Promise<{ success: boolean }>;
}

export class MemStorage implements IStorage {
  private messages: ContactFormData[];

  constructor() {
    this.messages = [];
  }

  async saveContactMessage(data: ContactFormData): Promise<{ success: boolean }> {
    this.messages.push(data);
    console.log('Contact message received:', data);
    return { success: true };
  }
}

export const storage = new MemStorage();
