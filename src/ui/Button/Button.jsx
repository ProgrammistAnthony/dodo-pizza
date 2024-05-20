import { children } from "react";
import s from "./Button.module.scss";

export const Button = ({ children, CustomClass, href, onClick}) => {
    return href ? (
    <a href={href} className={s.Button__link}>
      {children}
    </a>
  ) : (
    <button className={CustomClass ? CustomClass : s.Button} onClick={onClick}>
      {children}
    </button>
  );
};
