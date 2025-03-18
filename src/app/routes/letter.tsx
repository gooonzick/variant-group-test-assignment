import { Navbar } from "src/widgets/navbar";
import { UpdateLetterForm } from "src/widgets/update-letter-form";

import type { Route } from "./+types/letter";

export default function Page({ params }: Route.ComponentProps) {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "32px",
      }}
    >
      <Navbar />
      <UpdateLetterForm id={params.id} />
    </div>
  );
}
