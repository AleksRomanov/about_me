import tw from 'twin.macro';
import styled from 'styled-components';

export const AboutStyles = styled.div`
  ${tw`relative text-white p-[0 20px] h-[auto]`}
  .about-title {
    &:after {
      position: absolute;
      content: "";
      top: 15px;
      right: 0;
      width: 190px;
      height: 1px;
      border: solid 1px #ffffff;
    }
    ${tw`relative font-light text-2xl mb-[35px]`}
  }

  .about-intro-title {
    ${tw`text-sm font-bold mb-[27px] opacity-70`}
    width: 100%;
  }

  .about-background {
    ${tw`absolute top-[120px] left-0`}
  }


  .about-info {
    color: rgba(248, 247, 249, .5);
    ${tw`relative text-xs z-10 text-sm text-center mb-[190px]`}
  }

  .about-projects {
    ${tw`block m-[0 auto] text-white`}
  }
  .about-title-small {
    text-align: left;
    margin-bottom: 14px;
  }
  .about-title-content {
    text-align: center;
    font-size: 11px;
    margin-bottom: 40px;
  }
`
