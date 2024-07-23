import { z } from "zod";

export const contactSchema = z.object({
    senderName: z.string().min(1),
    senderEmail: z.string().email(),
    senderMessage: z.string().min(1),
});

export type ContactSchema = z.output<typeof contactSchema>;
