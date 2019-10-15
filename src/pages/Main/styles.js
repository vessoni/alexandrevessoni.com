import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

export const Item = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  h1 {
    font-size: 40px;
    font-weight: 700;
    margin-bottom: 0.5rem;
  }
  h2 {
    font-size: 20px;
    font-weight: 300;
    margin-top: 0;
    margin-bottom: 1rem;
  }
`;

export const Icons = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;

  p {
    margin: 5px;

    svg {
      text-shadow: 10px 10px #f00000;
    }
  }
`;
