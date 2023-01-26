import React from "react";
import styles from "./NotFoundBlock.module.scss";

export const NotFoundBlock: React.FC = () => {
  return (
    <div className={styles.root}>
      <span>🙃</span>
      <br />
      <h1>Нічого не знайдено</h1>
      <p className={styles.description}>На жаль,сторінка немає інформації</p>
    </div>
  );
};
