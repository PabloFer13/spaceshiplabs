import styled from 'styled-components';
import { Rows } from '../../theme';

export const GrisSquare = styled.div`
  flex-basis: 50%;
  box-sizing: border-box;
  border: 1px solid transparent;
  height: 120px;
  background: transparent url(${({ image }) => (image)}) no-repeat center center;
  ${({ theme }) => (theme.MediaQueryMediumSmall)}{
    flex-basis: 33.333%;
    height: 200px;
    border-bottom-color: ${({ theme }) => (theme.Gray)};
    border-right-color: ${({ theme }) => (theme.Gray)};
    &:nth-child(n+10){
      border-bottom-color: transparent;
    }
    &:nth-child(3n){
      border-right-color: transparent;
    }
  }
  ${({ theme }) => (theme.MediaQueryMedium)}{
    flex-basis: 20%;
    &:nth-child(n+6){
      border-bottom-color: transparent;
    }
    &:nth-child(3n){
      border-right-color: ${({ theme }) => (theme.Gray)};
    }
    &:nth-child(5n){
      border-right-color: transparent;
    }
  }
`;

export const Grid = styled(Rows)``;
