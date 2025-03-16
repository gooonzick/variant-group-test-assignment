import { HomePage } from "src/pages/home/ui/home-page/home-page";
import { Navbar } from "src/widgets/navbar";

export function meta() {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

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
      <HomePage />
    </div>
  );
}
