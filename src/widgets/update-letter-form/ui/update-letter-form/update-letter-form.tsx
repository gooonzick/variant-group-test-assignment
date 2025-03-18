import { useQueryClient } from "@tanstack/react-query";
import {
  letterOptions,
  useLetterQuery,
  useUpdateLetterMutation,
} from "~/entities/letter";
import {
  LetterBuilder,
  type LetterFormValues,
} from "~/features/letter-builder";

type Props = {
  id: string | undefined | null;
};

export const UpdateLetterForm = ({ id }: Props) => {
  const queryClient = useQueryClient();
  const { data } = useLetterQuery({ id });
  const updateLetter = useUpdateLetterMutation();

  const handleSubmit = async (values: LetterFormValues) => {
    if (!id) {
      return;
    }

    await updateLetter.mutateAsync(
      {
        id: id,
        data: values,
      },
      {
        onSuccess: async (data) => {
          await queryClient.invalidateQueries(letterOptions(data.id));
        },
      }
    );
  };

  const formValues = data ?? undefined;
  const letterContent = data?.letter;

  return (
    <LetterBuilder
      onSubmit={handleSubmit}
      values={formValues}
      letter={letterContent}
    />
  );
};
