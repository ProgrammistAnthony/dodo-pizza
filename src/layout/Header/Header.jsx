import { Container } from "../Container";
import s from "./Header.module.scss";
import logo from '../../assets/img/logo_dodo.svg';
import {Button} from '../../ui/Button';
import { Link } from "../../ui/Link/Link";
import { generateIdFromTitle } from "../../components/SectionPizza/SectionPizza";
import { NavLink } from "react-router-dom";
console.log(generateIdFromTitle('Пицца'));


export const Header = () => {
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
                    <p className={s.Header__number}>8 800 302-00-60</p>
                    <p className={s.Header__call}>Звонок бесплатный</p>
                    </div>
                </div>
                <div className={s.Header__nav}>
                    <div className={s.Header__links}>
                    <Link href={`#${generateIdFromTitle('Пицца')}`}>Пицца</Link>
                        <Link href={`#${generateIdFromTitle('Комбо')}`}>Комбо</Link>
                        <Link href={`#${generateIdFromTitle('Закуски')}`}>Закуски</Link>
                        <Link href={`#${generateIdFromTitle('Десерты')}`}>Десерты</Link>
                        <Link href={`#${generateIdFromTitle('Напитки')}`}>Напитки</Link>
                        <Link>Другие товары</Link>
                    </div>
                    <div className={s.Header__btn}>
                    <NavLink to={"/basket"}>
                        <Button>Корзина</Button>
                    </NavLink>
                    </div>
                </div>
            </div>
            </Container>
        </header>
    );
};
