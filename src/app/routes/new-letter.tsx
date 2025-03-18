import { CreateLetterForm } from "src/widgets/create-letter-form";
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
      <CreateLetterForm />
    </div>
  );
}
