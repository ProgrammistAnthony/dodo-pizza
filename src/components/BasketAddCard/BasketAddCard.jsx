import React, { useState } from 'react';
import s from './BasketAddCard.module.scss';
import img from '../../assets/img/do-do-pizzas-img/basketAddCard/moloko.png';
import imgCheck from '../../assets/img/do-do-pizzas-img/modalCards/close_btn.svg';

export const BasketAddCard = ({ title, src, subtitle }) => {
    const [isExpanded, setIsExpanded] = useState(false);
    const [isActive, setIsActive] = useState(false);  // Состояние для управления активацией карточки

    const handleTitleClick = () => {  // Обработчик для раскрытия текста
        setIsExpanded(!isExpanded);
    };

    const handleCardClick = () => {  // Обработчик для активации карточки
        setIsActive(!isActive);
    };

    return (
        <article onClick={handleCardClick}>
            <div className={isActive ? `${s.content} ${s.content__active}` : s.content}>
                <input type="image" src={imgCheck} className={`${s.content__check} ${isActive ? s.content__check_visible : ''}`} />
                <div className={s.content__img}>
                    <img src={src} alt="img" />
                </div>
                <div className={s.content__text}>
                    <p className={`${s.content__title} ${isExpanded ? s.expanded : ''}`} onClick={handleTitleClick}>
                        {title}
                    </p>
                    <p className={s.content__subtitle}>{`${subtitle} ₽`}</p>
                </div>
            </div>
        </article>
    );
};