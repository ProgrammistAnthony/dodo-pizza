/* eslint-disable react/prop-types */
import { Container } from "../../layout/Container";
import { ArticlePizza } from "../ArticlePizza/ArticlePizza";
import s from "./SectionPizza.module.scss";

export const generateIdFromTitle = (title) => {
    return title.toLowerCase()
    .replace(/\s+/g, '-')  // Заменяем пробелы на дефисы
    .replace(/[^a-z0-9а-яё-]/gi, '')  // Удаляем все недопустимые символы, разрешаем кириллицу
    .replace(/-+/g, '-')  // Удаляем множественные дефисы
    .replace(/^-|-$/g, '');
  }
  console.log(generateIdFromTitle('Пицца'));
export const SectionPizza = ({arr, title}) => {
  console.log(arr);
  
  const sectionId = generateIdFromTitle(title);
  return (
    <>
      <section id={sectionId} className={s.SectionPizza}>
        <Container>
          <div className={s.SectionPizza__content}>
            <div className={s.SectionPizza__title}>
              <p>{title}</p>
            </div>
            <div className={s.SectionPizza__cards}>
              {arr.map((el) => (
                <ArticlePizza
                  key={el.id}
                  title={el.title}
                  price={el.price}
                  src={el.path}
                  desc={el.desc}
                  sectionTitle={title} 
                />
              ))}
            </div>
          </div>
        </Container>
      </section>
    </>
  );
};
