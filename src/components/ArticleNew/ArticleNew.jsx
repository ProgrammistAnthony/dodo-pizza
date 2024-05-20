/* eslint-disable react/prop-types */
import s from "./ArticleNew.module.scss";

export const ArticleNew = ({title, price, src}) => {
  return (
    <>
      <article>
        <div className={s.Card__box}>
          <div className={s.Card__content}>
            <div className={s.Card__img}>
              <img alt="pizza" className={s.Card__image} src={src}/>
            </div>
            <div className={s.Card__info}>
              <p className={s.Card__name}>{title}</p>
              <p className={s.Card__price}>{price}</p>
            </div>
          </div>
        </div>
      </article>
    </>
  );
};
