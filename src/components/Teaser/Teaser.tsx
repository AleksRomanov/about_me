import React from 'react';
import {TeaserStyles} from './Teaser.styles.tw';
// import Image from '../../assets/img/2.jpg'

function Teaser() {
  return (
    <TeaserStyles className="teaser">
      <h1>TEASER COMPONENT</h1>
      {/*<img className={'teaser-background'} src={Image} alt=""/>*/}
    </TeaserStyles>
  );
}

export default Teaser;
