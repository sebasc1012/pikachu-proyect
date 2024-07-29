import React from "react";
import styles from "./MainContainer.module.scss";
import { clsx } from 'clsx';

export const MainLayout = ({ children, className }) => {
  return <div className={clsx(styles.mainContainer, className)}>{children}</div>;
};
