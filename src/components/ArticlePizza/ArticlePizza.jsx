import React, { useState } from "react";
import s from "./ArticlePizza.module.scss";
import { Button } from "../../ui/Button/Button.jsx";
import { Modal } from "../../layout/Modal/Modal.jsx";




export const ArticlePizza = ({ title, price, src, desc, sectionTitle }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [quantity, setQuantity] = useState(0);
  const [showCounter, setShowCounter] = useState(false);

  const toggleModal = () => setIsModalOpen(!isModalOpen);

  const toggleDescription = () => {
    setIsExpanded(!isExpanded);
  };

  const handleAddToCart = () => {
    if (quantity > 0) {
      console.log("Add to cart", quantity); // Пример обработки добавления в корзину
    } else {
      setQuantity(1);
      setShowCounter(true);
    }
  };

  const handleIncrement = () => {
    setQuantity((prev) => prev + 1);
  };

  const handleDecrement = () => {
    setQuantity((prev) => {
      if (prev === 1) {
        setShowCounter(false);
        return 0;
      }
      return prev - 1;
    });
  };

  let buttonProps;
  if (sectionTitle === "Комбо") {
    buttonProps = { children: "Собрать", CustomClass: s.ButtonStandard };
  } else if (sectionTitle === "Пицца") {
    buttonProps = { children: "Выбрать", CustomClass: s.Button__card };
  } else {
    buttonProps = {
      children: "В корзину",
      CustomClass: showCounter ? s.ButtonCounter : s.Button__card,
    };
  }

  return (
    <article className={s.Card__box}>
      <div className={s.Card__content}>
        <div className={s.Card__img}>
          <img alt="pizza" className={s.Card__image} src={src} />
        </div>
        <div className={s.Card__info}>
          <p className={s.Card__name}>{title}</p>
          <p
            className={`${s.Card__description} ${
              isExpanded ? s.Card__expanded : ""
            }`}
            onClick={toggleDescription}
          >
            {desc}
          </p>
        </div>
        <div className={s.Card__menu}>
          <p className={s.Card__price}>{price}</p>
          {showCounter ? (
            <div className={`${s.Counter} ${s.ButtonCounterBackground}`}>
              <button className={s.DecrementButton} onClick={handleDecrement}>
                -
              </button>
              <span>{quantity}</span>
              <button className={s.IncrementButton} onClick={handleIncrement}>
                +
              </button>
            </div>
          ) : (
            <Button {...buttonProps} onClick={sectionTitle === "Пицца" ? toggleModal : handleAddToCart} />
          )}
        </div>
      </div>
      <Modal isOpen={isModalOpen} onClose={toggleModal} title={title} desc={desc} src={src}></Modal>
    </article>
  );
};

