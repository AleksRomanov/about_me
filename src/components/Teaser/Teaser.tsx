import React from 'react';
import {TeaserStyles} from './Teaser.styles.tw';
import Bckrnd from '../../assets/img/teaser_bg_mobile.png';
import {Button} from "antd";

function Teaser() {
    return (
        <TeaserStyles className="teaser">
            <img className="teaser-background" src={Bckrnd} alt=""/>
            <p className="teaser-intro-title">ПРИВЕТ, Я АЛЕКС.</p>
            <h1 className="teaser-title">ВЕБ РАЗРАБОТЧИК</h1>
            <p className="teaser-info">Разрабатываю скоростные, легковесные лэндинги, сложные сайты на React Js.</p>
            <Button className="teaser-projects">МОИ ПРОЕКТЫ</Button>
        </TeaserStyles>
    );
}

export default Teaser;
