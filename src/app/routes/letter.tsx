import { LetterBuilder } from "src/widgets/letter-builder";
import { Navbar } from "src/widgets/navbar";

import type { Route } from "./+types/letter";

export const Page = ({ params }: Route.ComponentProps) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "32px",
      }}
    >
      <Navbar />
      <LetterBuilder id={params.id} />
    </div>
  );
};
