import styled from 'styled-components';
import { Section, Container } from '../../theme';
import bg from '../../images/team.jpg';

export const SectionContact = styled(Section)`
  background: transparent url(${bg}) no-repeat center center;
  background-size: cover;
`;

export const ContainerContact = styled(Container)`
  max-width: 500px;
  p{
    color: #fff;
    text-align: center;
    font-weight: 300;
    font-size: 18px;
  }
`;

export const SocialIcon = styled.a`
  font-size: 24px;
  color: #fff;
  text-decoration: none;
  transition: color 0.4s;
  margin: 0 12px;
  &:hover{
    color: ${({ theme }) => (theme.Blue)};
  }
`;

export const Form = styled.form`
  position: relative;
  box-sizing: border-box;
  margin-top: 30px;
  margin-bottom: 40px;
  border: 2px solid ${({ theme }) => theme.Blue};
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  font-size: 15px;
  text-align: left;
  input,
  textarea{
    flex-basis: 100%;
    box-sizing: border-box;
    border: 0 none;
    background-color: transparent;
    padding: 12px 20px;
    color: ${({ theme }) => theme.Blue};
    resize: none;
  }
  textarea{
    border-top: 2px solid ${({ theme }) => theme.Blue};
    border-bottom: 2px solid ${({ theme }) => theme.Blue};
  }
  button{
    flex: 1;
    text-align: left;
    border: 0 none;
    background-color: transparent;
    padding: 14px 40px;
    position: relative;
    cursor: pointer;
    span{
      color: ${({ theme }) => theme.Blue};
      position: relative;
      z-index: 1;
      transition: color 0.3s;
    }
    &:before{
      content: '';
      position: absolute;
      left: 0;
      top: 0;
      height: 100%;
      width: 0;
      background-color: ${({ theme }) => theme.Blue};
      transition: width 0.4s;
    }
    &:hover{
      span{
        color: #fff;
      }
      &:before{
        width: 100%;
      }
    }
  }
  ${({ theme }) => theme.MediaQuerySmall}{
    input{
      flex-basis: 50%;
    }
    input[type='text']{
      border-right: 2px solid ${({ theme }) => theme.Blue};
    }
  }
`;
