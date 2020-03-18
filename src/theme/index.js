import styled from 'styled-components';

export const Content = styled.div`
  flex: 1;
`;

const getBgColor = (color, theme) => {
  if (!color) return '';
  const colors = {
    gray: theme.GrayLight,
  };
  const selectedColor = colors[color];
  return selectedColor ? `background-color:${selectedColor};` : '';
};

export const Section = styled.section`
  min-height: 400px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  ${({ color, theme }) => (getBgColor(color, theme))}
  ${({ theme }) => theme.MediaQueryMediumSmall}{
    height: ${({ isFullPage }) => (isFullPage ? '100vh' : 'auto')};
  }
`;

export const Container = styled.div`
  width: 100%;
  position: relative;
  margin: 0 auto;
  box-sizing: border-box;
  max-width: 1000px;
  padding: 0px 20px;
`;

export const ContainerXL = styled(Container)`
  max-width: 1200px;
`;

export const Rows = styled.div`
  display: flex;
  flex-direction: row;
  width:100%;
  box-sizing: border-box;
  flex-wrap: ${({ flexWrap }) => (flexWrap ? 'wrap' : 'nowrap')};
  justify-content: ${({ align }) => ((align && align === 'start') ? 'flex-start' : align)};
  align-items: ${({ verticalAlign }) => ((verticalAlign && verticalAlign === 'start') ? 'flex-start' : verticalAlign)};
`;

export const Row = styled.div`
`;

const TextColors = {
  white: {
    basic: '#fff',
  },
};

export const TextWrapper = styled.div`
  position: relative;
  z-index: 1;
  *{
    color: ${({ color }) => TextColors[color].basic};
    text-align: ${({ textAlign }) => (textAlign || 'left')};
  }
  h1{
    font-weight: 100;
    font-size: 38px;
    margin: 0;
  }
  ${({ theme }) => theme.MediaQueryMediumSmall}{
    h1{
      font-size: 60px;
    }
  }
`;
