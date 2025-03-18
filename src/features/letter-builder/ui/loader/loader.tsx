import { IconSphere } from "src/shared/ui/icons";

import styles from "./loader.module.css";

export const Loader = () => {
  return (
    <div className={styles.container}>
      <div className={styles.sphereWrapper}>
        <IconSphere />
      </div>
    </div>
  );
};
