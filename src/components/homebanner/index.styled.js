import styled, { keyframes } from 'styled-components';
import { TextWrapper as TextWrapper_ } from '../../theme';

export const TextWrapper = styled(TextWrapper_)`
  p{
    font-size: 20px;
    font-weight: 300;
    margin: 0;
  }
`;

export const VideoWrapper = styled.video`
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const floatAnimation = keyframes`
  0%{
    transform: translateY(0px);
  }
  50%{
    transform: translateY(15px);
  }
  100%{
    transform: translateY(0px);
  }
`;

export const FloatingArrow = styled.button`
  background-color: transparent;
  border: 0 none;
  position: absolute;
  bottom: 20%;
  margin: 0 auto;
  cursor: pointer;
  animation: ${floatAnimation} 1.5s ease-in-out infinite;
`;
