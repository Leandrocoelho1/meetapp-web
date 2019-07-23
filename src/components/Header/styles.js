import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
  width: 100%;
  background: #000;
  padding: 0 30px;
  height: 92px;
`;

export const Content = styled.div`
  width: 100%;
  margin: 0 auto;
  max-width: 940px;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: #fff;

  nav {
    display: flex;

    img {
      width: 31px;
      height: 32px;
    }
  }

  aside {
    display: flex;
  }
`;

export const Profile = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  margin-right: 30px;

  strong {
    font-size: 14px;
    font-weight: bold;
  }

  a {
    color: #fff;
    opacity: 0.7;
    font-size: 14px;
    transition: opacity 0.2s ease-in-out;

    &:hover {
      opacity: 1;
    }
  }
`;

export const LogoutButton = styled.button`
  background: #d44059;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 25px;
  height: 42px;
  border-radius: 4px;
  border: 0;
  font-size: 16px;
  font-weight: bold;
  transition: background 0.25s ease-in-out;

  &:hover {
    background: ${darken(0.06, '#d44059')};
  }
`;
