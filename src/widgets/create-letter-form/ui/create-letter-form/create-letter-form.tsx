import { useQueryClient } from "@tanstack/react-query";
import { useNavigate } from "react-router";

import {
  letterOptions,
  lettersOptions,
  useCreateLetterMutation,
} from "~/entities/letter";
import {
  LetterBuilder,
  type LetterFormValues,
} from "~/features/letter-builder";

export const CreateLetterForm = () => {
  const navigate = useNavigate();

  const queryClient = useQueryClient();
  const createLetter = useCreateLetterMutation();

  const handleSubmit = async (values: LetterFormValues) => {
    await createLetter.mutateAsync(values, {
      onSuccess: async (data) => {
        await Promise.all([
          queryClient.invalidateQueries(letterOptions(data.id)),
          queryClient.invalidateQueries(lettersOptions),
        ]);
        navigate(`/letters/${data.id}`);
      },
    });
  };
  return <LetterBuilder onSubmit={handleSubmit} />;
};
