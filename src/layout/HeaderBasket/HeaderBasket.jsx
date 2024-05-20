import { Container } from "../Container";
import s from "./HeaderBasket.module.scss";
import logo from '../../assets/img/logo_dodo.svg';
import { Button } from "../../ui/Button";
import { Link } from "../../ui/Link/Link";


export const HeaderBasket = () => {
    return (
        <header>
            <Container>
            <div className={s.Header__content}>
                <div className={s.Header__top}>
                    <div className={s.Header__left}>
                        <img className={s.Header__logo} src={logo} alt="Logo"/>
                        <div className={s.Header__description}>
                            <p className={s.Header__subtext}>Додо пицца</p>
                            <p className={s.Header__secondaryText}>Сеть пиццерий №1 в России</p>
                        </div>
                    </div>
                    <div className={s.Header__right}>
                    <div className={s.dashed}></div>
                    <p className={s.Header__number}>8 800 302-00-60</p>
                    <p className={s.Header__call}>Звонок бесплатный</p>
                    </div>
                </div>
            </div>
            </Container>
        </header>
    );
};
