import tw from 'twin.macro';
import styled from 'styled-components';

export const SkillsStyles = styled.div`
  ${tw`relative text-white p-[0 20px] h-[auto]`}
  .skills-title {
    &:after {
      position: absolute;
      content: "";
      top: 15px;
      right: 0;
      width: 145px;
      height: 1px;
      border: solid 1px #ffffff;
    }

    ${tw`relative font-light text-2xl mb-[35px]`}
  }

  .skills-intro-title {
    ${tw`text-sm font-bold mb-[27px] opacity-70`}
    width: 100%;
  }

  .skills-background {
    ${tw`absolute top-[120px] left-0`}
  }


  .skills-info {
    color: rgba(248, 247, 249, .5);
    ${tw`relative text-xs z-10 text-sm text-center mb-[190px]`}
  }

  .skills-projects {
    ${tw`block m-[0 auto] text-white`}
  }

  .skills-title-small {
    text-align: center;
    margin-bottom: 18px;
  }

  .skills-title-content {
    text-align: center;
    font-size: 11px;
    margin-bottom: 18px;
  }

  .skills-swiper {
    margin-bottom: 50px;
  }

  .swiper-item {
    position: relative;
    width: 350px;
    //height: 200px;
    //display: flex;
    //flex-direction: column;
    //align-items: center;

    &:hover {
      opacity: .7;
    }
    & h1 {
      display: block;
      width: 100%;
      margin-bottom: 10px;  
      text-align: center;
      //position: absolute;
      //content: "";
      //padding: 5px 10px;
      top: 0;
      left: 0;
      //width: 263px;
      //height: 102px;
      background-color: rgba(0, 0, 0, .7);
      //z-index: 99999;
    }
  }

  .swiper-item-image__content {
    border: 1px solid yellow;
    border-radius: 20px;
    position: relative;
    display: flex;
    flex-wrap: wrap;

    & p {
      //max-width: 100px;
      font-size: 18px;
      margin: 20px;
      //text-align: left;
      //margin-bottom: 11px;
      //margin-right: 11px;
    }

    & span {
      font-size: 12px;
      text-align: left;
    }
  }
`
