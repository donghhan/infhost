import styled from "styled-components";

const FooterSection = styled.footer`
  width: 100%;
  min-height: 600px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => props.theme.colors.deepPurple};
`;

const FooterContentWrapper = styled.div``;

const MenuContainer = styled.div`
  display: flex;
  ul {
    .menu-title {
    }

    li {
    }
  }
`;

const BorderLine = styled.hr``;

const SNSWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

const AllRightsText = styled.span`
  color: ${(props) => props.theme.colors.lightgray};
`;

const SNSIConWrapper = styled.ul`
  display: flex;
  gap: 24px;
`;

const SNSIconLink = styled.li``;

export {
  FooterSection,
  FooterContentWrapper,
  MenuContainer,
  BorderLine,
  SNSWrapper,
  AllRightsText,
  SNSIConWrapper,
  SNSIconLink,
};
