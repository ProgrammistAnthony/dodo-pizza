/* eslint-disable no-undef */
import React, { useState, useEffect } from "react";
import { Button } from "../../ui/Button";
import s from "./Modal.module.scss";
import img from "../../assets/img/do-do-pizzas-img/carbonara/carbonara-traditional-medium.jpeg";
import { modalCards } from "../../assets/data/DataRenderModalCards";
import { ModalCard } from "../../components/ModalCard/ModalCard";
import closeBtn from "../../assets/img/do-do-pizzas-img/modalCards/close.svg";

export const Modal = ({ isOpen, onClose, title, desc, src}) => {

 // Состояния для каждой группы кнопок
 const [activeSize, setActiveSize] = useState(null);
 const [activeDough, setActiveDough] = useState(null);

 // Функции для обработки нажатия кнопок
 const handleSizeClick = (size) => {
   setActiveSize(size);
   console.log(`Size clicked: ${size}`);
 };

 const handleDoughClick = (dough) => {
   setActiveDough(dough);
   console.log(`Dough clicked: ${dough}`);
 };

 useEffect(() => {
   document.body.style.overflow = isOpen ? 'hidden' : 'visible';
   return () => {
     document.body.style.overflow = 'visible';
   };
 }, [isOpen]);

 const handleClose = () => {
   onClose();
   console.log("Modal closed!");
 };

 // Закрыть модальное окно при клике вне его содержимого
 const handleWrapperClick = (e) => {
   if (e.target === e.currentTarget) {
     handleClose();
   }
 };

 if (!isOpen) {
   return null;
 }

  return (
    <>
      <div className={s.Modal__wrapper} onClick={handleWrapperClick}>
        <div className={s.Modal__box} onClick={(e) => e.stopPropagation()}>
        <input type="image" src={closeBtn} className={s.Modal__closeBtn} onClick={handleClose}/>
          <div className={s.Modal__content}>
            <div className={s.Modal__image}>
              <img src={src} alt="image" />
            </div>
            <div className={s.Modal__description}>
              <div className={s.Modal__text}>
                <p className={s.Modal__title}>{title}</p>
                <p className={s.Modal__subtitle}>{desc}</p>
                <p className={s.Modal__structure}>asdasdasda</p>
              </div>
              <div className={s.Modal__settings}>
                <div className={s.Modal__size}>
                  <Button
                    CustomClass={`${s.Button__modal} ${
                      activeSize === "small" ? s.active : ""
                    }`}
                    onClick={() => handleSizeClick("small")}
                  >
                    Маленькая
                  </Button>
                  <Button
                    CustomClass={`${s.Button__modal} ${
                      activeSize === "medium" ? s.active : ""
                    }`}
                    onClick={() => handleSizeClick("medium")}
                  >
                    Средняя
                  </Button>
                  <Button
                    CustomClass={`${s.Button__modal} ${
                      activeSize === "large" ? s.active : ""
                    }`}
                    onClick={() => handleSizeClick("large")}
                  >
                    Большая
                  </Button>
                </div>
                <div className={s.Modal__testo}>
                  <Button
                    CustomClass={`${s.Button__modal} ${
                      activeDough === "traditional" ? s.active : ""
                    }`}
                    onClick={() => handleDoughClick("traditional")}
                  >
                    Традиционное
                  </Button>
                  <Button
                    CustomClass={`${s.Button__modal} ${
                      activeDough === "thin" ? s.active : ""
                    }`}
                    onClick={() => handleDoughClick("thin")}
                  >
                    Тонкое
                  </Button>
                </div>
                <div className={s.Modal__cards}>
                  <p className={s.Modal__titleCard}>Добавить в пиццу</p>
                  <div className={s.Modal__card}>
                    {modalCards.map((el) => (
                      <ModalCard
                        key={el.id}
                        title={el.title}
                        price={el.price}
                        src={el.src}
                      />
                    ))}
                  </div>

                  <Button CustomClass={s.Button__add}>
                    Добавить в корзину за 625р
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
