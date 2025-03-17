import { z } from "zod";

export const LetterSchema = z.object({
  id: z.string(),
  jobTitle: z.string(),
  companyName: z.string(),
  skills: z.string(),
  details: z.string(),
  letter: z.string(),
});

export const LettersStorageSchema = z.array(LetterSchema);

export type Letter = z.infer<typeof LetterSchema>;
export type CreateLetterPayload = Omit<Letter, "id" | "letter">;
export type LettersStorage = z.infer<typeof LettersStorageSchema>;
