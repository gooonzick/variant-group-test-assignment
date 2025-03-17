import { LetterPage } from "src/pages/letter";
import { Navbar } from "src/widgets/navbar";

export default function Page() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "32px",
      }}
    >
      <Navbar />
      <LetterPage />
    </div>
  );
}
