import { useLetterQuery, useUpdateLetterMutation } from "src/entities/letter";
import {
  LetterBuilder,
  type LetterFormValues,
} from "src/features/letter-builder";

type Props = {
  id: string | undefined | null;
};

export const UpdateLetterForm = ({ id }: Props) => {
  const { data } = useLetterQuery({ id });
  const updateLetter = useUpdateLetterMutation();

  const handleSubmit = async (values: LetterFormValues) => {
    if (!id) {
      return;
    }

    await updateLetter.mutateAsync({
      id: id,
      data: values,
    });
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
