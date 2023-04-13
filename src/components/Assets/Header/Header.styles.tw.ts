import tw from 'twin.macro';
import styled from 'styled-components';


export const HeaderStyles = styled.div`
  ${tw`flex items-center justify-between p-[20px] text-white text-base h-[100px] border-b-2`}
  .header-background {
    ${tw``}
  }
  
  .header__burger-button {
    ${tw`border-slate-50`}
  }
`
