import styled from 'styled-components';

import { darken } from 'polished';

export const Container = styled.div`
  width: 100%;
  max-width: 940px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: flex-end;

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
      color: #e95818;
      align-self: flex-start;
      margin-left: 20px;
      margin-top: -8px;
      margin-bottom: 10px;
    }

    button {
      align-self: flex-end;
      background: #f94d6a;
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
        background: ${darken(0.04, '#f94d6a')};
      }

      svg {
        margin-right: 10px;
      }
    }
  }

  hr {
    border-style: solid;
    border-width: 0 0 1px 0;
    border-color: rgba(255, 255, 255, 0.1);
    margin: 20px 0px;
  }
`;
