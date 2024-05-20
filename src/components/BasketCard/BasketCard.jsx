import s from "./BasketCard.module.scss";
import img from "../../assets/img/do-do-pizzas-img/basketCard/image_basket_card.png";
import deleteIcon from '../../assets/img/do-do-pizzas-img/basketCard/delete_icon.svg';
import Counter from "../../ui/Counter/Counter";

export const BasketCard = () => {
  return (
    <div>
      <div className={s.BasketCard__content}>
        <div className={s.BasketCard__left}>
          <div className={s.BasketCard__image}>
            <img src={img} alt="img" className={s.BasketCard__img} />
          </div>
          <div className={s.BasketCard__desc}>
            <p className={s.desc__title}>Чиззи Чеддер</p>
            <p className={s.desc__subtitle}>
              Средняя 30 см, традиционное тесто
            </p>
          </div>
          </div>
          <div className={s.BasketCard__right}>
            <Counter></Counter>
            <p className={s.desc__title}>3 799 ₽</p>
            <input type="image" className={s.BasketCard__delete} src={deleteIcon}/>
          </div>
      </div>
    </div>
  );
};
