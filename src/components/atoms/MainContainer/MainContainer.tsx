import styles from "./MainContainer.module.scss";
import { clsx } from "clsx";
import { ReactNode } from "react";

interface MainLayoutProps {
  children: ReactNode;
  className?: string;
}

export const MainLayout = ({ children, className }: MainLayoutProps) => {
  return (
    <div className={clsx(styles.mainContainer, className)}>{children}</div>
  );
};

/*  Molecules */
