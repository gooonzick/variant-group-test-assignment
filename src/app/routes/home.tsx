import { Button } from "src/shared/ui/components/button";
import type { Route } from "./+types/home";
import { Input } from "src/shared/ui/components/input";
import { Textarea } from "src/shared/ui/components/textarea";
import { useState } from "react";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Home() {
  const [textareaValue, setTextareaValue] = useState("");
  return (
    <div
      style={{
        padding: "20px",
      }}
    >
      <h1>Welcome to React Router!</h1>
      <Button variant="outline">Generate Now</Button>
      <Button variant="primary">Generate Now</Button>
      <Input label="Job Title" placeholder="Product manager" />
      <Textarea
        label="Additional details"
        maxLength={1200}
        value={textareaValue}
        onChange={(e) => {
          setTextareaValue(e.target.value);
        }}
      />
    </div>
  );
}
