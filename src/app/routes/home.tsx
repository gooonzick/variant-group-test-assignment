import { Button } from "src/shared/ui/components/button";
import type { Route } from "./+types/home";
import { Input } from "src/shared/ui/components/input";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Home() {
  return (
    <div>
      <h1>Welcome to React Router!</h1>
      <Button variant="outline">Generate Now</Button>
      <Input label="Job Title" />
    </div>
  );
}
