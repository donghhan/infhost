import styled from "styled-components";

const PerkOptionWrapper = styled.div`
  display: flex;
  justify-content: space-evenly;
  margin-top: 70px;
  width: 100%;
`;

const PerkOptionBox = styled.div`
  max-width: 300px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;

  img {
    margin-bottom: 20px;
  }

  h2 {
    font-size: 16px;
    margin-bottom: 10px;
  }

  span {
    font-size: 14px;
  }
`;

export { PerkOptionWrapper, PerkOptionBox };
