import styled from 'styled-components';
import { darken } from 'polished';
import { Form } from '@rocketseat/unform';

export const StyledForm = styled(Form)`
  display: flex;
  flex-direction: column;
  width: 100%;

  .react-datepicker-wrapper, .react-datepicker__input-container {
    width: 100%;
  }

  input, textarea {
      background: #271d2e;
      padding: 14px 20px;
      width: 100%;
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

    textarea {
      height: 200px;

      &::placeholder {
        font-family:  Helvetica, Arial, sans-serif;
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

    button.react-datepicker__navigation {
          background: none;
          line-height: 1.7rem;
          text-align: center;
          cursor: pointer;
          position: absolute;
          top: 10px;
          width: 0;
          padding: 0;
          border: 0.45rem solid transparent;
          z-index: 1;
          height: 10px;
          width: 10px;
          text-indent: -999em;
          overflow: hidden;
    }

    button.react-datepicker__navigation--next {
      right: 10px;
      border-left-color: #ccc !important;
    }

    button.react-datepicker__navigation--previous {
      left: 10px;
      border-right-color: #ccc;
    }
  }
`;
