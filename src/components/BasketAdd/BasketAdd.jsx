import React, { useRef } from "react";
import { BasketAddCard } from "../BasketAddCard/BasketAddCard";
import s from "./BasketAdd.module.scss";
import { basketCard } from "../../assets/data/DataBasketCard";
import { BasketResult } from "../BasketResult/BasketResult";
import { Link } from "react-router-dom";
import {Button} from "../../ui/Button/Button";

export const BasketAdd = () => {
  const cardsRef = useRef(null);

  const handleWheel = (e) => {
    if (cardsRef.current) {
      cardsRef.current.scrollLeft += e.deltaY;
    }
  };

  return (
    <div>
      <div className={s.wrapper}>
        <div className={s.wrapper__content}>
          <h1 className={s.wrapper__title}>Добавить к заказу?</h1>
          <div
            className={s.wrapper__cards}
            ref={cardsRef}
            onWheel={handleWheel}
          >
            {basketCard.map((el) => (
              <BasketAddCard
                key={el.id}
                title={el.title}
                src={el.path}
                subtitle={el.subtitle}
              />
            ))}
          </div>
          <BasketResult>
          </BasketResult>
        </div>
      </div>
    </div>
  );
};
