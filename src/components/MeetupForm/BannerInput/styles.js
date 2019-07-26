import styled from 'styled-components';

export const Container = styled.div`
  margin-bottom: 20px;
  position: relative;

  label {
    cursor: pointer;
    border-radius: 4px;
    background: #271d2e;
    display: block;
    width: 100%;
    height: 300px;
    display: flex;
    align-items: center;
    justify-content: center;
    opacity: 1;
    transition: opacity 0.3s ease-in-out;

    &:hover {
      opacity: 0.7;
    }

    p {
      color: #626262;
      display: flex;
      flex-direction: column;
      align-items: center;
      font-size: 20px;
      font-weight: bold;
      position: absolute;
    }

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }

    input {
      display: none;
    }
  }
`;
