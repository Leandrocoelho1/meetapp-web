import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
  width: 100%;
  max-width: 940px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
`;

export const Header = styled.div`
  width: 100%;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 48px;

  h1 {
    font-size: 32px;
    font-weight: bold;
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
`;

export const MeetupList = styled.ul`
  list-style: none;
`;

export const Meetup = styled.li`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: #fff;
  background: rgba(0, 0, 0, 0.1);
  padding: 16px 30px;
  min-height: 62px;
  border-radius: 4px;

  & + li {
    margin-top: 10px;
  }

  strong {
    font-size: 18px;
    font-weight: bold;
  }

  span {
    margin: 0 30px 0 auto;
    opacity: 0.6;
    font-size: 16px;
  }

  a {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;
