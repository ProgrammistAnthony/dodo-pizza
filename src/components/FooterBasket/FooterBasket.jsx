import { Container } from "../../layout/Container/Container";
import s from "./FooterBasket.module.scss";

export const FooterBasket = () => {

  return (
    <>
      <footer className={s.Footer}>
        <Container>
        <div className={s.Footer__content}>
          <div className={s.Footer__top}>
            <div className={s.Footer__info}>
              <div className={s.Footer__communication}>
                <div className={s.Footer__tel}>
                  <p className={s.Footer__number}>8-800-302-00-60</p>
                  <p className={s.Footer__call}>Звонок бесплатный</p>
                </div>
              </div>
            </div>
          </div>
          <hr className={s.Footer__hr} />
          <div className={s.Footer__botom}>
            <div className={s.Footer__logo}>
              <p className={s.Footer__subtext}>Додо пицца</p>
              <p className={s.Footer__secondaryText}> © 2021</p>
            </div>
            <div className={s.Footer__nav}>
              <a className={s.Footer__link}>Правовая информация</a>
              <a className={s.Footer__link}>Калорийность и состав</a>
              <a className={s.Footer__link}>Помощь</a>
            </div>
            <div><a type="" className={s.Footer__mail}>
            feedback@dodopizza.com
          </a></div>
          </div>
          </div>
        </Container>
      </footer>
    </>
  );
};
