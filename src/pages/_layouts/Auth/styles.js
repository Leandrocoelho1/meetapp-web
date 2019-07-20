import styled from 'styled-components';

import { darken } from 'polished';

export const Wrapper = styled.div`
  background: linear-gradient(to bottom, #22202c, #402845);
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Content = styled.div`
  width: 100%;
  max-width: 315px;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  img {
    width: 41px;
    height: 42px;
    margin-bottom: 50px;
  }

  form {
    display: flex;
    flex-direction: column;
    width: 100%;

    input {
      background: #271d2e;
      padding: 14px 20px;
      height: 50px;
      color: #fff;
      font-size: 18px;
      border-radius: 4px;
      border: none;
      margin-bottom: 10px;

      &::placeholder {
        color: #938e97;
      }
    }

    span {
      font-size: 12px;
      color: #E95818;
      align-self: flex-start;
      margin-left: 20px;
      margin-top: -8px;
      margin-bottom: 10px;
    }

    button {
      background: #f94d6a;
      border: 0;
      height: 50px;
      margin: 5px 0 20px;
      border-radius: 4px;
      color: #fff;
      font-weight: bold;
      font-size: 18px;
      transition: background 0.2s ease-in-out;

      &:hover {
        background: ${darken(0.04, '#f94d6a')}
      }
    }

  }
      a {
        color: #fff;
        font-size: 16px;
        opacity: 0.6;
        transition: opacity 0.2s;

        &:hover {
          opacity: 0.8;
        }
`;
