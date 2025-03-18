import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, useFormContext } from "react-hook-form";
import { z } from "zod";

export const MAX_DETAILS_LENGTH = 1200;
const DEFAULT_VALUES = {
  jobTitle: "",
  companyName: "",
  skills: "",
  details: "",
};

const LetterFormSchema = z.object({
  jobTitle: z.string().nonempty(),
  companyName: z.string().nonempty(),
  skills: z.string().nonempty(),
  details: z.string().nonempty().max(MAX_DETAILS_LENGTH),
});

export type LetterFormValues = z.infer<typeof LetterFormSchema>;
export type LetterFormSubmitHandler =
  | ((values: LetterFormValues) => void)
  | ((values: LetterFormValues) => Promise<void>);

export const useLetterForm = (
  { values = DEFAULT_VALUES }: { values?: LetterFormValues } = {
    values: DEFAULT_VALUES,
  }
) => {
  const form = useForm({
    resolver: zodResolver(LetterFormSchema),
    defaultValues: values || DEFAULT_VALUES,
    values: values,
  });

  return form;
};

export const useLetterFormContext = () => useFormContext<LetterFormValues>();
