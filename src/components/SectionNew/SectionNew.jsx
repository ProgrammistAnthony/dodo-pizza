import React, { useEffect, useRef, useState } from "react";
import { Container } from "../../layout/Container";
import { ArticleNew } from "../ArticleNew/ArticleNew";
import { data } from "../../assets/data/DataArcticlesNew.js";
import s from "./SectionNew.module.scss";
import { Button } from "../../ui/Button/Button.jsx";
import { Link } from "../../ui/Link/Link.jsx";
import { generateIdFromTitle } from "../../components/SectionPizza/SectionPizza";

export const SectionNew = () => {
  const cardsRef = useRef(null);
  const linksRef = useRef(null);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 500);

  useEffect(() => {
    const handleWheel = (ref) => (event) => {
      if (!ref.current) return;
      event.preventDefault();
      const { deltaY } = event;
      ref.current.scrollLeft += deltaY;
    };

    const cardsContainer = cardsRef.current;
    const linksContainer = linksRef.current;

    if (cardsContainer) {
      cardsContainer.addEventListener("wheel", handleWheel(cardsRef), { passive: false });
    }
    if (linksContainer) {
      linksContainer.addEventListener("wheel", handleWheel(linksRef), { passive: false });
    }

    const handleResize = () => {
      setIsMobile(window.innerWidth < 500);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      if (cardsContainer) {
        cardsContainer.removeEventListener("wheel", handleWheel(cardsRef));
      }
      if (linksContainer) {
        linksContainer.removeEventListener("wheel", handleWheel(linksRef));
      }
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <>
      <section className={s.SectionNew}>
        <Container>
          <div className={s.SectionNew__content}>
            <div className={s.SectionNew__title}>
              <p>Новое и популярное</p>
            </div>
            <div ref={cardsRef} className={s.SectionNew__cards}>
              {data.map((el, i) => (
                <ArticleNew
                  key={i}
                  title={el.title}
                  price={el.price}
                  src={el.path}
                />
              ))}
            </div>
            <div className={s.SectionNew__nav}>
              <div
                ref={linksRef}
                className={s.SectionNew__links}
                style={{ overflowX: "auto", whiteSpace: "nowrap" }}
              >
                {isMobile ? (
                  <>
                    <Button href={`#${generateIdFromTitle('Пицца')}`}>Пицца</Button>
                    <Button href={`#${generateIdFromTitle('Комбо')}`}>Комбо</Button>
                    <Button href={`#${generateIdFromTitle('Закуски')}`}>Закуски</Button>
                    <Button href={`#${generateIdFromTitle('Десерты')}`}>Десерты</Button>
                    <Button href={`#${generateIdFromTitle('Напитки')}`}>Напитки</Button>
                    <Button href="##!">Другие товары</Button>
                  </>
                ) : (
                  <>
                    <Link href={`#${generateIdFromTitle('Пицца')}`}>Пицца</Link>
                    <Link href={`#${generateIdFromTitle('Комбо')}`}>Комбо</Link>
                    <Link href={`#${generateIdFromTitle('Закуски')}`}>Закуски</Link>
                    <Link href={`#${generateIdFromTitle('Десерты')}`}>Десерты</Link>
                    <Link href={`#${generateIdFromTitle('Напитки')}`}>Напитки</Link>
                    <Link>Другие товары</Link>
                  </>
                )}
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
};
