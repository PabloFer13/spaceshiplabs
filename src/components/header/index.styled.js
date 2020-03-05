import styled from 'styled-components';

export const Header = styled.header`
  padding: ${({ isScrolled }) => (isScrolled ? '5px 10px' : '10px')};
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 100;
  box-sizing: border-box;
  background-color: ${({ theme, isScrolled }) => (isScrolled ? theme.Blue : 'transparent')};
  transition: all .3s;
`;

export const Logo = styled.a`
  text-decoration: none;
  i{
    font-size: 52px;
    color: #fff;
  }
`;

const MenuItemSharedStyles = (withBorder, theme) => (`
  color: #fff;
  display: inline-block;
  text-decoration: none;
  font-size: 14px;
  font-weight: 600;
  padding: 6px 5px;
  text-transform: uppercase;
  position: relative;
  border:${(withBorder ? '1px solid #fff' : '0 none')};
  span{
    position: relative;
  }
  &::before{
    content: "";
    position: absolute;
    width: 0;
    bottom: ${withBorder ? '0' : '2'}px;
    left: 0;
    height: ${withBorder ? '100%' : '1px'};
    background-color: #fff;
    transition: width 0.4s;
    z-index: 0;
  }
  &:hover{
    color: ${withBorder ? theme.GreenLight : '#fff'};
    &::before{
      width: 100%;
    }
  }
  img{
    width: 92px;
    vertical-align: bottom;
    top: 2px;
    position: relative;
  }
`);

export const MenuItem = styled.a`
  ${({ withBorder, theme }) => MenuItemSharedStyles(withBorder, theme)}
`;

export const SubMenu = styled.ul`
  opacity: 0;
  visibility: hidden;
  position: absolute;
  left: 50%;
  padding-left: 0;
  list-style: none;
  min-width: 138px;
  width: 100%;
  padding: 4px 0;
  margin-top: 0px;
  border: 2px solid #fff;
  transform: translateX(-50%);
  background-color: ${({ theme }) => (theme.Blue)};
  transition: all .3s;
  li ${MenuItem}{
    font-size: 12px;
    padding: 6px 0;
  }
`;

export const Menu = styled.ul`
  flex-shrink: 1;
  margin: 0;
  padding: 5px 0;
  display: none;
  li{
    display: inline-block;
    position: relative;
    margin: 0 4px;
    li{
      display: block;
      text-align: center;
      padding: 0 12px;
    }
    &:hover ${SubMenu}{
      opacity: 1;
      visibility: visible;
      margin-top: 5px;
    }
  }
  ${({ theme }) => (theme.MediaQueryMedium)}{
    display: initial;
  }
`;

export const Hamburguer = styled.button`
  height: 35px;
  padding: 5px 0;
  width: 35px;
  background-color: transparent;
  border: 0 none;
  flex-shrink: 1;
  cursor: pointer;
  hr{
    background: #fff;
    border-radius: 3px;
    margin: 3px 5px;
    height: 4px;
    width: 30px;
    box-sizing: border-box;
    border: 0 none;
  }
  ${({ theme }) => (theme.MediaQueryMedium)}{
    display: none;
  }
`;
