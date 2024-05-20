import s from "./SectionMain.module.scss";
import {Container} from  "../../layout/Container/Container";
import { BasketCard } from "../BasketCard/BasketCard";
import { BasketAdd } from "../BasketAdd/BasketAdd";

export const SectionMain = () => {
  return (
    <div>
      <Container>
        <div className={s.wrapper}>
            <div className={s.wrapper__content}>
                <h1 className={s.wrapper__title}>Корзина</h1>
                <div className={s.wrapper__cards}>
                    <BasketCard/>
                </div>
            </div>
            <BasketAdd/> 
        </div>
      </Container>
    </div>
  );
};
