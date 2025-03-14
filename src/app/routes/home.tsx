import { Button } from "src/shared/ui/components/button";
import { Typography } from "src/shared/ui/components/typography";
import { IconPlus } from "src/shared/ui/icons";
import { Card } from "src/widgets/letter-card/ui/card/card";
import { Navbar } from "src/widgets/navbar";
import type { Route } from "./+types/home";
import { HomePage } from "src/pages/home/ui/home-page/home-page";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

const content = `Dear Apple Team,\nI am writing to express my interest in the Product Manager position.My experience in the realm combined with my skills in HTML, CSS and doing things in time make me a strong candidate for this roleI want to help you build awesome solutions to accomplish your goals and vision. I can create intuitive and aesthetically pleasing devices that are very easy to use.I am confident that my skills and enthusiasm would translate into valuable contributions to your esteemed organization.Thank you for considering my application. I eagerly await the opportunity to discuss my qualifications further.`;

export default function Home() {
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
