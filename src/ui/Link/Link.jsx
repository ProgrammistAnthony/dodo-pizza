import { children } from "react";
import s from "./Link.module.scss";

export const Link = ({ children, href }) => {
    const validHref = href || '##!';
  return (
    <a href={validHref} className={s.Link}>
      {children}
    </a>
  );
};
