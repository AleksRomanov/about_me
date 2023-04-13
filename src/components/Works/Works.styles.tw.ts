import tw from 'twin.macro';
import styled from 'styled-components';

export const WorksStyles = styled.div`
  ${tw`relative text-white p-[0 20px] h-[auto]`}
  .works-title {
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

  .works-intro-title {
    ${tw`text-sm font-bold mb-[27px] opacity-70`}
    width: 100%;
  }

  .works-background {
    ${tw`absolute top-[120px] left-0`}
  }


  .works-info {
    color: rgba(248, 247, 249, .5);
    ${tw`relative text-xs z-10 text-sm text-center mb-[190px]`}
  }

  .works-projects {
    ${tw`block m-[0 auto] text-white`}
  }

  .works-title-small {
    text-align: center;
    margin-bottom: 18px;
  }

  .works-title-content {
    text-align: center;
    font-size: 11px;
    margin-bottom: 18px;
  }

  .works-swiper {
    margin-bottom: 50px;
  }

  .swiper-item {
    position: relative;
    width: 350px;
    height: 336px;
    display: flex;
    flex-direction: column;
    align-items: center;

    &:hover {
      opacity: .7;
    }
  }

  .swiper-item-image {
    position: relative;

    &__content {
      position: absolute;
      content: "";
      padding: 5px 10px;
      bottom: 0;
      left: 0;
      width: 263px;
      height: 102px;
      background-color: rgba(0, 0, 0, .7);
      z-index: 99999;

      & p {
        font-size: 18px;
        text-align: left;
        margin-bottom: 11px;
      }
      & span {
        font-size: 12px;
        text-align: left;
      }
      & a {
        display: block;
        font-size: 11px;
        margin-bottom: 15px;
      }
    }
  }
`
