import styled from 'styled-components';

const getColor = (color, theme) => {
  const colors = {
    gray: theme.GrayDark,
    white: theme.White,
    blue: theme.Blue,
  };
  if (!color) return colors.gray;
  return colors[color];
};

export const SectionTitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: ${({ theme, color }) => (getColor(color, theme))};
  padding: ${({ padding }) => padding}px;
  h2{
    color: ${({ theme, color }) => (getColor(color, theme))};
    font-size: 38px;
    font-weight: 100;
    margin: 0;
    ${({ theme }) => theme.MediaQueryMediumSmall}{
      font-size: 46px;
    }
  }
  i{
    font-size: 56px;
  }
`;

export const SectionTitle = styled.h2`
  
`;
