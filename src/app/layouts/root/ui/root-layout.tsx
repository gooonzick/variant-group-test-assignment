import { Outlet } from "react-router";
import { HitYourGoal } from "src/widgets/hit-your-goal";
import { Navbar } from "src/widgets/navbar";

import styles from "./root-layout.module.css";

export function RootLayout() {
  return (
    <>
      <div className={styles.container}>
        <Navbar />
        <Outlet />
      </div>
      <HitYourGoal />
    </>
  );
}
