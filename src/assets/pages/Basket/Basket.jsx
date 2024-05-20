import { FooterBasket } from "../../../components/FooterBasket/FooterBasket";
import s from "./Basket.module.scss";
import {HeaderBasket} from "../../../layout/HeaderBasket/HeaderBasket"
import { SectionMain } from "../../../components/SectionMain/SectionMain";

export const Basket = () => {
  return (
    <div>
      <HeaderBasket/>
      <SectionMain/>
      <FooterBasket />
    </div>
  );
};
