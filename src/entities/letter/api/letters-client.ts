import { openAiClient } from "src/shared/lib/open-ai-client";

import { type CreateLetterPayload, LettersStorageSchema } from "../model/types";

const LETTERS_STORAGE_KEY = "letters";

export class LettersApiClient {
  async getLetters() {
    const data = localStorage.getItem(LETTERS_STORAGE_KEY) || "[]";
    const letters = LettersStorageSchema.parse(JSON.parse(data));

    return letters;
  }

  async getLetter(id: string) {
    const letters = await this.getLetters();

    return letters.find((letter) => letter.id === id) || null;
  }

  async createLetter(data: CreateLetterPayload) {
    const letters = await this.getLetters();

    const letter = await this.generateLetter(data);
    const newLetter = {
      ...data,
      letter,
      id: crypto.randomUUID(),
    };

    localStorage.setItem(
      LETTERS_STORAGE_KEY,
      JSON.stringify([...letters, newLetter])
    );

    return newLetter;
  }

  async updateLetter(id: string, data: CreateLetterPayload) {
    const letters = await this.getLetters();

    const newLetter = await this.generateLetter(data);

    const updatedLetters = letters.map((letter) => {
      if (letter.id === id) {
        return {
          ...letter,
          ...data,
          letter: newLetter,
        };
      }

      return letter;
    });

    localStorage.setItem(LETTERS_STORAGE_KEY, JSON.stringify(updatedLetters));

    return updatedLetters.find((letter) => letter.id === id)!;
  }

  async deleteLetter(id: string) {
    const letters = await this.getLetters();

    const updatedLetters = letters.filter((letter) => letter.id !== id);

    localStorage.setItem(LETTERS_STORAGE_KEY, JSON.stringify(updatedLetters));
  }

  async generateLetter({
    companyName,
    details,
    jobTitle,
    skills,
  }: CreateLetterPayload) {
    const response = await openAiClient.responses.create({
      model: "gpt-4o",
      input: `Company name: ${companyName}, job title: ${jobTitle}, skills: ${skills}, details: ${details}`,
      temperature: 0.8,
      top_p: 0.5,
      instructions: `You are a cover letter generator. Your task is to create professional style and concise cover letters.
I will provide you company name, job title, my skills and some additional details.
Here is example of cover letter


Dear [Company] Team,

I am writing to express my interest in the [JobTitle] position.

My experience in the realm combined with my skills in [SkillsList] make me a strong candidate for this role.

[AdditionalDetails]

I am confident that my skills and enthusiasm would translate into valuable contributions to your esteemed organization.

Thank you for considering my application. I eagerly await the opportunity to discuss my qualifications further.
`,
    });

    return response.output_text;

    console.log("🚀 ~ LettersApiClient ~ response:", response);
    return `Dear ${companyName} Team,

I am writing to express my interest in the ${jobTitle} position.

My experience in the realm combined with my skills in ${skills} make me a strong candidate for this role.

${details}

I am confident that my skills and enthusiasm would translate into valuable contributions to your esteemed organization.

Thank you for considering my application. I eagerly await the opportunity to discuss my qualifications further.`;
  }
}
