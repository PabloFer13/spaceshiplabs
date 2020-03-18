import styled from 'styled-components';

export const Footer = styled.footer`
  padding: 34px 0;
  background: ${({ theme }) => (theme.GradientGreenDarkBlue)};
  *{
    color: #fff;
  }
  
`;

export const InfoData = styled.div`
  flex-shrink: 1;
  text-align: right;
  p{
    font-size: ${({ theme }) => (theme.SmallText)};
    margin: 0;
  }
  a{
    text-decoration: none;
    font-weight: 700;
  }
  i{
    margin-right: 10px;
  }
`;

export const SmallLogo = styled.div`
  font-size: 58px;
`;
