import { Outlet } from "react-router";

import { HitYourGoal } from "~/widgets/hit-your-goal";
import { Navbar } from "~/widgets/navbar";

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
