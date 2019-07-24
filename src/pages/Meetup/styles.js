import styled from 'styled-components';

import { darken } from 'polished';

export const Container = styled.div`
  width: 100%;
  max-width: 940px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
`;

export const Loading = styled.div``;

export const Header = styled.div`
  display: flex;
  color: #fff;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 50px;

  h1 {
    font-size: 32px;
    font-weight: bold;
  }

  nav {
    display: flex;
  }

  button {
    align-self: flex-end;
    background: #4dbaf9;
    border: 0;
    height: 42px;
    padding: 0 25px 0 20px;
    border-radius: 4px;
    color: #fff;
    font-weight: bold;
    font-size: 16px;
    display: flex;
    align-items: center;
    transition: background 0.2s ease-in-out;

    &:hover {
      background: ${darken(0.04, '#4DBAF9')};
    }

    svg {
      margin-right: 10px;
    }
  }

  button + button {
    margin-left: 10px;
    background: #d44059;
    transition: background 0.2s ease-in-out;

    &:hover {
      background: ${darken(0.04, '#D44059')};
    }
  }
`;

export const Content = styled.div`
  img {
    width: 100%;
    max-width: 940px;
    height: 300px;
    object-fit: cover;
  }
  p {
    margin-top: 30px;
    color: #fff;
    font-size: 18px;
  }
`;

export const Details = styled.div`
  margin-top: 30px;
  display: flex;
  align-items: center;
  color: rgba(255, 255, 255, 0.6);

  div {
    display: flex;
    align-items: center;

    svg {
      margin-right: 6px;
    }
  }

  > div + div {
    margin-left: 30px;
  }
`;
