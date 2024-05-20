import React, { useState } from 'react';
import s from "./ModalCard.module.scss";
import imgClose from "../../assets/img/do-do-pizzas-img/modalCards/close_btn.svg"

export const ModalCard = ({ title, price, src }) => {
  const [isActive, setIsActive] = useState(false); 

  const toggleActive = () => {
    setIsActive(!isActive); 
  };

  return (
    <article className={`${s.ModalCard} ${isActive ? s.ModalCard__active : ''}`} onClick={toggleActive}>
      <div className={s.ModalCard__content}>
        <div className={s.ModalCard__image}>
          <img src={src} alt="img" className={s.ModalCard__img} />
          <input type="image" src={imgClose} className={`${s.ModalCard__check} ${isActive ? s.ModalCard__check_visible : ''}`}/>
        </div>
        <p className={s.ModalCard__title}>{title}</p>
        <p className={s.ModalCard__price}>{price} ₽</p>
      </div>
    </article>
  );
};
