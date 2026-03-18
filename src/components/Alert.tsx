// src/components/Alert.tsx

import clsx from "clsx";
import css from "./Alert.module.css";


interface AlertProps {
  type?: "success" | "error";
}

export default function Alert({ type }: AlertProps) {
  return (
    <p className={clsx(css.alert, type && css[type])}>
      This is a default alert text
    </p>
  );
};

const isPrimary = true;
const isDisabled = false;

const myClassName = clsx(
  "btn",
  isPrimary && "btn-primary",
  isDisabled && "btn-disabled"
);

console.log(myClassName);