import s from "./Home.module.css";
import { cardsPizzas } from "../../data/DataRenderPizza.js";
import { cardsCombos } from "../../data/DataRenderCombo.js";
import { cardsSnack } from "../../data/DataRenderSnack.js";
import { cardsDeserts } from "../../data/DataRenderDeserts.js";
import { cardsDrinks } from "../../data/DataRenderDrinks.js";
import { Header } from "../../../layout/Header/Header.jsx";
import { Slider } from "../../../components/Slider/Slider.jsx";
import { SectionNew } from "../../../components/SectionNew/SectionNew.jsx";
import { SectionPizza } from "../../../components/SectionPizza/SectionPizza.jsx";
import { Footer } from "../../../layout/Footer/Footer.jsx";

export const Home = () => {
  return (
    <>
      <Header/>
      <Slider/>
      <SectionNew/>
      <SectionPizza arr={cardsPizzas} title={`Пицца`} sectionTitle={`Пицца`} />
      <SectionPizza arr={cardsCombos} title={`Комбо`} sectionTitle={`Комбо`} />
      <SectionPizza
        arr={cardsSnack}
        title={`Закуски`}
        sectionTitle={`Закуски`}
      />
      <SectionPizza
        arr={cardsDeserts}
        title={`Десерты`}
        sectionTitle={`Десерты`}
      />
      <SectionPizza
        arr={cardsDrinks}
        title={`Напитки`}
        sectionTitle={`Напитки`}
      />
      <Footer/>
    </>
  );
};
