import { Container } from "../Container/Container";
import s from "./Footer.module.scss";
import { Ul } from "../../components/Ul/Ul";
import googlePlay from "../../assets/img/googlePlay.png";
import appStore from "../../assets/img/AppStore.png";
import vk from "../../assets/img/vkontakte.svg";
import odnoklassniki from "../../assets/img/odnoklassniki.svg";
import inst from "../../assets/img/instagram.svg";
import youtube from "../../assets/img/youtube.svg";
import facebook from "../../assets/img/facebook.svg";

export const Footer = () => {
  const footerDodoPizza = [
    "Додо Пицца",
    { about: "О нас", url: "#" },
    { book: "Додо-книга", url: "#" },
    { blog: "Блог «Сила ума»", url: "#" },
    { ic: "Додо ИС", url: "#" },
  ];
  const footerWork = [
    "Работа",
    { restoran: "В пиццерии", url: "#" },
    { contact: "В контакт-центре", url: "#" },
  ];

  const footerPartner = [
    "Франшиза",
    { investition: "Инвестиции", url: "#" },
    { post: "Поставщикам", url: "#" },
    { room: "Предложить помещение", url: "#" },
  ];

  const footerQA = [
    "Это интересно",
    { masterClass: "Экскурсии и мастер-классы", url: "#" },
    { corporation: "Корпоративные заказы", url: "#" },
  ];

  return (
    <>
      <footer className={s.Footer}>
        <Container>
        <div className={s.Footer__content}>
          <div className={s.Footer__top}>
            <div className={s.Footer__links}>
              <Ul arr={footerDodoPizza} />
              <Ul arr={footerWork} />
              <Ul arr={footerPartner} />
              <Ul arr={footerQA} />
            </div>
            <div className={s.Footer__info}>
              <div className={s.Footer__setter}>
                <a href="#">
                  <img
                    type="image"
                    alt="google play"
                    src={googlePlay}
                    className={s.Footer__img}
                  />
                </a>
                <a href="#">
                  <img
                    type="image"
                    alt="App Store"
                    src={appStore}
                    className={s.Footer__img}
                  />
                </a>
              </div>
              <div className={s.Footer__communication}>
                <div className={s.Footer__tel}>
                  <p className={s.Footer__number}>8-800-302-00-60</p>
                  <p className={s.Footer__call}>Звонок бесплатный</p>
                </div>
                <a type="" className={s.Footer__mail}>
                  feedback@dodopizza.com
                </a>
              </div>
            </div>
          </div>
          <div className={s.Footer__mid}>
            <div className={s.Footer__revenue}>
              <p className={s.Footer__many}>1 396 362 874 ₽</p>
              <p className={s.Footer__quantity}>
                Выручка российской сети в этом месяце. В прошлом — 2 460 305 416
                ₽
              </p>
            </div>
            <div className={s.Footer__revenue}>
              <p className={s.Footer__many}>688 пиццерий</p>
              <p className={`${s.Footer__quantity} ${s.Footer__quantityTwo}`}>
                в 14 странах, включая Китай, США и Великобританию
              </p>
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
            <div className={s.Footer__icons}>
              <div className={s.Footer__box}>
                <a>
                  <img alt="icon" className={s.Footer__icon} src={facebook} />
                </a>
              </div>
              <div className={s.Footer__box}>
                <a>
                  <img alt="icon" className={s.Footer__icon} src={inst} />
                </a>
              </div>
              <div className={s.Footer__box}>
                <a>
                  <img
                    alt="icon"
                    className={s.Footer__icon}
                    src={odnoklassniki}
                  />
                </a>
              </div>
              <div className={s.Footer__box}>
                <a>
                  <img alt="icon" className={s.Footer__icon} src={vk} />
                </a>
              </div>
              <div className={s.Footer__box}>
                <a>
                  <img alt="icon" className={s.Footer__icon} src={youtube} />
                </a>
              </div>
            </div>
          </div>
          </div>
        </Container>
      </footer>
    </>
  );
};
