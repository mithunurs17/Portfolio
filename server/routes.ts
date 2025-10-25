import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { contactFormSchema } from "@shared/schema";

export async function registerRoutes(app: Express): Promise<Server> {
  app.post("/api/contact", async (req, res) => {
    try {
      const validatedData = contactFormSchema.parse(req.body);
      
      const result = await storage.saveContactMessage(validatedData);
      
      if (result.success) {
        res.json({ 
          success: true, 
          message: "Thank you for your message! I'll get back to you soon." 
        });
      } else {
        res.status(500).json({ 
          success: false, 
          message: "Failed to send message. Please try again." 
        });
      }
    } catch (error: any) {
      if (error.name === 'ZodError') {
        res.status(400).json({ 
          success: false, 
          message: "Invalid form data",
          errors: error.errors 
        });
      } else {
        console.error('Contact form error:', error);
        res.status(500).json({ 
          success: false, 
          message: "An error occurred. Please try again." 
        });
      }
    }
  });

  const httpServer = createServer(app);

  return httpServer;
}
