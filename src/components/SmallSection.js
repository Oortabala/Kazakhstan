import React from "react";
import "../styles/Small.scss";

const SmallSection = ({ image, type, name }) => {
  return (
    <section className="second-section">
      <div className="allcart">
        <Cart
          source="https://funart.pro/uploads/posts/2021-04/1617356104_11-p-oboi-kolsaiskie-ozyora-natsionalnii-park-12.jpg"
          alt="Kolsai"
          name="Kolsai Lakes"
          text="The National Park is included in the UNESCO World Network of Biosphere Reserves"
        />
        <Cart
          source="https://tour.raisen.ru/img/content_image3.jpg"
          alt="Charyn"
          name="Charyn canyon"
          text='The Red Canyon or "Valley of Castles" is a dry gorge washed by meltwater'
        />
        <Cart
          source="http://content.foto.my.mail.ru/mail/bojsyamnu/krasivo/h-6555.jpg"
          alt="Issyk"
          name="Issyk (lake)"
          text='It comes from the Kazakh word Esik — "door, narrow gorge, gorge"'
        />
        <Cart
          source="https://pibig.info/uploads/posts/2021-06/1623389596_12-pibig_info-p-gora-ulutau-priroda-krasivo-foto-13.jpg"
          alt="ULYTAU"
          name="Ulytau (mountains)"
          text="The greatness of these ancient mountains lies in the significance of
          the events of the national history of Kazakhstan"
        />
      </div>
    </section>
  );
};

function Cart(props) {
  return (
    <div className="cart">
      <img src={props.source} alt={props.alt} />
      <p>{props.name}</p>
      <h1>{props.text}</h1>
    </div>
  );
}

export default SmallSection;
