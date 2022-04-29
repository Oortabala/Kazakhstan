import React from 'react'
import '../styles/Main.scss'
import agronomy from '../assets/agronomy.png'
import food from '../assets/food.png'
import history from '../assets/history.png'
import people from '../assets/network.png'

const Main = () => {
    return (
        <section className='main'>
            <div className="center-text">
                <h1>Kazakhstan, You are my Homeland! </h1>
            </div>

        <div className="allExp">
            <div className="exps">
                <div className="gift">
                    <img src={people} alt="people" />
                </div>
                <p>Fact №1</p>
                <p>Kazakhstan is a multinational country
                </p>
            </div>

            <div className="exps">
                <div className="gift">
                    <img src={history} alt="history" />
                </div>
                <p>Fact №2</p>
                <p>Rich history of more than 500 years
                </p>
            </div>


            <div className="exps">
                <div className="gift">
                    <img src={food} alt="food" />
                </div>
                <p>Fact №3</p>
                <p>Many national dishes,which everyone loves
                </p>
            </div>



            <div className="exps">
                <div className="gift">
                    <img src={agronomy} alt="agronomy" />
                </div>
                <p>Fact №4</p>
                <p>All about the beauty of nature
                </p>

                </div>

            </div>
        </section>
    )
}

export default Main
