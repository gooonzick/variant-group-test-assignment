import { LettersStorageSchema, type CreateLetterPayload } from "../model/types";

const LETTERS_STORAGE_KEY = "letters";

export class LettersApiClient {
  async getLetters() {
    const letters = LettersStorageSchema.parse(
      localStorage.getItem(LETTERS_STORAGE_KEY) || "[]"
    );

    return letters;
  }

  async getLetter(id: string) {
    const letters = await this.getLetters();

    return letters.find((letter) => letter.id === id) || null;
  }

  async createLetter(data: CreateLetterPayload) {
    const letters = await this.getLetters();

    const newLetter = {
      ...data,
      id: crypto.randomUUID(),
    };

    localStorage.setItem(
      LETTERS_STORAGE_KEY,
      JSON.stringify([...letters, newLetter])
    );
  }

  async updateLetter(id: string, data: CreateLetterPayload) {
    const letters = await this.getLetters();

    const updatedLetters = letters.map((letter) => {
      if (letter.id === id) {
        return {
          ...letter,
          ...data,
        };
      }

      return letter;
    });

    localStorage.setItem(LETTERS_STORAGE_KEY, JSON.stringify(updatedLetters));
  }
}
