import { Button } from "src/shared/ui/components/button";
import { Typography } from "src/shared/ui/components/typography";
import { IconPlus } from "src/shared/ui/icons";
import { Card } from "src/widgets/letter-card/ui/card/card";
import styles from "./home-page.module.css";

const content = `Dear Apple Team,\nI am writing to express my interest in the Product Manager position.My experience in the realm combined with my skills in HTML, CSS and doing things in time make me a strong candidate for this roleI want to help you build awesome solutions to accomplish your goals and vision. I can create intuitive and aesthetically pleasing devices that are very easy to use.I am confident that my skills and enthusiasm would translate into valuable contributions to your esteemed organization.Thank you for considering my application. I eagerly await the opportunity to discuss my qualifications further.`;

export const HomePage: React.FC = () => {
  return (
    <div>
      <div className={styles.header}>
        <Typography variant="title">Applications</Typography>
        <Button size="small">
          <IconPlus />
          Create New
        </Button>
      </div>
      <div className={styles.container}>
        <Card content={content} />
        <Card content={content} />
        <Card content={content} />
        <Card content={content} />
        <Card content={content} />
      </div>
    </div>
  );
};
