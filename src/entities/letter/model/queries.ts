import { queryOptions, useMutation, useQuery } from "@tanstack/react-query";

import { LettersApiClient } from "../api/letters-client";
import type { CreateLetterPayload } from "./types";

const client = new LettersApiClient();

export const lettersOptions = queryOptions({
  queryKey: ["letters"],
  queryFn: async () => {
    const data = await client.getLetters();

    return data;
  },
});
export const letterOptions = (id: string | undefined | null) =>
  queryOptions({
    queryKey: ["letter", id],
    queryFn: async () => {
      const data = await client.getLetter(id!);

      return data;
    },
    enabled: !!id,
  });

export const useLettersQuery = () => useQuery(lettersOptions);

export const useLetterQuery = ({ id }: { id: string | undefined | null }) =>
  useQuery(letterOptions(id));

export const useCreateLetterMutation = () =>
  useMutation({
    mutationKey: ["create-letter"],
    mutationFn: async (data: CreateLetterPayload) => {
      await new Promise((resolve) => setTimeout(resolve, 2000));
      return await client.createLetter(data);
    },
  });

export const useUpdateLetterMutation = () =>
  useMutation({
    mutationKey: ["update-letter"],
    mutationFn: async ({
      id,
      data,
    }: {
      id: string;
      data: CreateLetterPayload;
    }) => {
      return await client.updateLetter(id, data);
    },
  });
