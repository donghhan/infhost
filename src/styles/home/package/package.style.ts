import styled from "styled-components";

const PackageSectionWrapper = styled.section`
  padding-top: 550px;
  width: 100%;
  display: flex;
  justify-content: center;
  gap: 120px;
  background-color: ${(props) => props.theme.colors.ghostWhite};
`;

const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 600px;

  img {
    width: 100%;
    margin-top: 55px;
  }
`;

const Title = styled.h1`
  font-size: 48px;
  font-weight: 600;
  line-height: 1.25;
  margin-bottom: 25px;
`;

const Text = styled.span`
  color: ${(props) => props.theme.colors.gray};
  font-size: 16px;
  max-width: 400px;
`;

export { PackageSectionWrapper, Title, Text, TextWrapper };
