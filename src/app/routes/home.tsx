import { useState } from "react";
import { Button } from "src/shared/ui/components/button";
import { Input } from "src/shared/ui/components/input";
import { Textarea } from "src/shared/ui/components/textarea";
import { Navbar } from "src/widgets/navbar";
import type { Route } from "./+types/home";
import { Typography } from "src/shared/ui/components/typography";
import { IconPlus } from "src/shared/ui/icons";

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
        display: "flex",
        flexDirection: "column",
        gap: "32px",
      }}
    >
      <Navbar />
      <div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            borderBottom: "1px solid var(--background-soft)",
            paddingBottom: "16px",
          }}
        >
          <Typography variant="title">Applications</Typography>
          <Button size="small">
            <IconPlus />
            Create New
          </Button>
        </div>
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
    </div>
  );
}
