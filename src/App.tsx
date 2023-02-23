import styled from "styled-components";
import GlobalStyle from "./styles/globalStyles";

const Wrapper = styled.main`
  padding: 0 10%;
`;

export default function App() {
  return (
    <Wrapper>
      <GlobalStyle />
    </Wrapper>
  );
}
