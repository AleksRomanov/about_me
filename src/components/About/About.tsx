import React from 'react';
import {AboutStyles} from './About.styles.tw';
// import Bckrnd from '../../assets/img/teaser_bg_mobile.png';
// import {Button} from "antd";

function About() {
    return (
        <AboutStyles className="about">
            <h1 className="about-title">#ОБО МНЕ</h1>
            <h3 className="about-title-small">Привет, меня зовут Алекс!</h3>
            <p className="about-title-content">Я фронтенд-разработчик, базирующийся в Красноярске, Россия. Могу разработать адаптивный веб-сайт или приложение с нуля
                на скоростной технологии и превратить его в современный удобный веб-интерфейс как для нагруженной
                работы, так и для успешной презентации любого продукта в виде лэндинга. Работаю с дизайнами. Так же в
                команде имеются люди, которые занимаются разработкой приложений под IOS и Android.
                <br></br>
                <br></br>
                Превращение моего творчества и знаний технологий в веб-сайты, является моей страстью уже больше трех
                лет. Помогаю клиентам реализовать себя во всемирной паутине, всегда стремлюсь узнать о новейших
                технологиях, фреймворках и идти в ногу со временем.</p>
            {/*<img className="about-background" src={Bckrnd} alt=""/>*/}
            {/*<p className="about-intro-title">ПРИВЕТ, Я АЛЕКС.</p>*/}

            {/*<p className="about-info">Разрабатываю скоростные, легковесные лэндинги, сложные сайты на React Js.</p>*/}
            {/*<Button className="about-projects">МОИ ПРОЕКТЫ</Button>*/}
        </AboutStyles>
    );
}

export default About;
