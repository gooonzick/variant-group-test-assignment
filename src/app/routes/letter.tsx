import { UpdateLetterForm } from "src/widgets/update-letter-form";

import type { Route } from "./+types/letter";

export default function Page({ params }: Route.ComponentProps) {
  return <UpdateLetterForm id={params.id} />;
}
