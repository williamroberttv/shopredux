import styled from 'styled-components';

export const ProductsList = styled.ul`
  display: grid;
  row-gap: 10px;
  grid-template-columns: repeat(3, 1fr);
  li {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 20px;
    list-style: none;
    background-color: #fff;
    width: 300px;
    height: 400px;
    span {
      font-weight: 700;
    }

    button {
      display: flex;
      align-items: center;
      justify-content: center;
      height: 36px;
      width: 250px;
      border: none;
      background-color: #e18139;

      div {
        margin-right: 10px;
        background-color: #e78728;
      }
    }
  }
`;
