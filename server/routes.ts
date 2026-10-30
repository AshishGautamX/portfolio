import type { Express, Request, Response } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";

export async function registerRoutes(app: Express): Promise<Server> {
  // Contact Form Submission Endpoint
  app.post("/api/contact", async (req: Request, res: Response) => {
    try {
      const { name, email, message } = req.body;

      if (!name || typeof name !== "string" || name.trim().length === 0) {
        return res.status(400).json({ error: "Name is required." });
      }

      if (!email || typeof email !== "string" || !email.includes("@")) {
        return res.status(400).json({ error: "A valid email address is required." });
      }

      if (!message || typeof message !== "string" || message.trim().length === 0) {
        return res.status(400).json({ error: "Message content is required." });
      }

      // Log contact inquiry telemetry
      console.log(`[Contact Submission] from ${name.trim()} (${email.trim()}) at ${new Date().toISOString()}:`);
      console.log(`Message: ${message.trim()}`);

      return res.status(200).json({
        success: true,
        message: "Thank you for reaching out! Your message has been received.",
      });
    } catch (error) {
      console.error("[Contact API Error]:", error);
      return res.status(500).json({ error: "Failed to process contact submission." });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
