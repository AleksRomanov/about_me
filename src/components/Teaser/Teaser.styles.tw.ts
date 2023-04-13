import tw from 'twin.macro';
import styled from 'styled-components';

export const TeaserStyles = styled.div`
  ${tw`relative text-white p-[34px 20px] h-[530px]`}
  .teaser-background {
    ${tw`absolute top-[120px] left-0`}
  }
  .teaser-intro-title {
    ${tw`text-sm font-bold mb-[27px] opacity-70`}
    width: 100%;
  }
  .teaser-title {
    ${tw`text-3xl font-bold text-center opacity-70 mb-[75px]`}
  }
  .teaser-info {
    color: rgba(248, 247,249, .5);
    ${tw`relative text-xs z-10 text-sm text-center mb-[190px]`}
  }
  .teaser-projects {
    ${tw`block m-[0 auto] text-white`}
  }
`
