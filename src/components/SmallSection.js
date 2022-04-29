import React from 'react'
import '../styles/Small.scss'

const SmallSection = ({image,type,name}) => {
    return (
        <section className='second-section'>
            <div className="allcart">
            <div className="cart">
                    <img src="https://funart.pro/uploads/posts/2021-04/1617356104_11-p-oboi-kolsaiskie-ozyora-natsionalnii-park-12.jpg" alt="Kolsai" />
                    <p>Kolsai Lakes</p>
                    <h1>The National Park is included in the UNESCO World Network of Biosphere Reserves</h1>
            </div>

            <div className="cart">
                    <img src="https://tour.raisen.ru/img/content_image3.jpg" alt="Charyn" />
                    <p>Charyn canyon</p>
                    <h1>The Red Canyon or "Valley of Castles" is a dry gorge washed by meltwater</h1>
            </div>

            <div className="cart">
                    <img src="http://content.foto.my.mail.ru/mail/bojsyamnu/krasivo/h-6555.jpg" alt="Issyk" />
                    <p>Issyk (lake)</p>
                    <h1>It comes from the Kazakh word Esik — "door, narrow gorge, gorge"</h1>
            </div>

            <div className="cart">
                    <img src="https://pibig.info/uploads/posts/2021-06/1623389596_12-pibig_info-p-gora-ulutau-priroda-krasivo-foto-13.jpg" alt="ULYTAU" />
                    <p>Ulytau (mountains)</p>
                    <h1>The greatness of these ancient mountains lies in the significance of the events of the national history of Kazakhstan</h1>
            </div>

            </div>
        </section>
    )
}

export default SmallSection
