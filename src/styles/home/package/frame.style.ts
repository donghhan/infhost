import styled from "styled-components";

const Border = styled.div`
  width: 480px;
  height: 100px;
`;

const TitleBox = styled.div`
  width: 100%;
  height: 40px;
  background-color: ${(props) => props.theme.colors.orange};
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    margin-right: 5px;
  }
`;

const Title = styled.span`
  color: ${(props) => props.theme.colors.white};
`;

const ContentBox = styled.div`
  border: 3px solid ${(props) => props.theme.colors.orange};
  padding: 32px;
`;

export { Border, TitleBox, ContentBox, Title };
