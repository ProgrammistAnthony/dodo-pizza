import { Link } from "react-router-dom";
import s from "./BasketResult.module.scss";
import { Button } from "../../ui/Button/Button";

export const BasketResult = () => {
  return (
    <div>
      <div className={s.wrapper}>
        <div className={s.wrapper__content}>
          <div className={s.wrapper__result}>
            <p className={s.wrapper__summ}>Сумма заказа:</p>
            <p className={s.wrapper__numb}>4 792 ₽</p>
          </div>
          <div className={s.wrapper__nav}>
            <Link to={"/dodo-pizza"}>
              <Button CustomClass={s.wrapper__btn}>
                {
                  <p className={s.text__btn}>
                    <span className={s.text__span}>{"<"}</span>Вернуться в меню
                  </p>
                }
              </Button>
            </Link>
            <Link to={"##!"}>
              <Button CustomClass={s.wrapper__btn2}>
                {
                  <p className={s.text__btn}>
                    Оформить заказ<span className={s.text__span2}>{">"}</span>
                  </p>
                }
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
