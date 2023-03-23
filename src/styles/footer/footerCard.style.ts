import styled from "styled-components";

const FooterCardWrapper = styled.div`
  min-width: 570px;
  height: fit-content;
  padding: 48px;
  background-color: ${(props) => props.theme.colors.lightPurple};
  border-radius: 8px;
`;

const TopWrapper = styled.div`
  color: ${(props) => props.theme.colors.white};
`;

const FooterCardTitle = styled.div`
  display: flex;
  align-items: center;

  span {
    margin-left: 10px;
    font-weight: 700;
    font-size: 25px;
  }
`;

const ExplanationText = styled.span`
  font-family: ${(props) => props.theme.fonts.lato};
  font-size: 16px;
  margin-top: 25px;
`;

const BottomWrapper = styled.div`
  div {
    color: ${(props) => props.theme.colors.white};
    margin-top: 50px;
    display: flex;
    flex-direction: column;
    .bolded {
      font-size: 20px;
      font-weight: 600;
    }

    .normal {
    }
  }
`;

const SubscriptionForm = styled.form``;

export {
  FooterCardWrapper,
  FooterCardTitle,
  TopWrapper,
  ExplanationText,
  BottomWrapper,
  SubscriptionForm,
};
