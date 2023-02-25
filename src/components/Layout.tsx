import styled from "styled-components";
import React from "react";
import { Outlet } from "react-router-dom";

interface LayoutProps {
  children: React.ReactNode;
}

const Wrapper = styled.main`
  padding: 0 10%;
`;

export default function Layout({ children }: LayoutProps) {
  return (
    <Wrapper>
      {children}
      <Outlet />
    </Wrapper>
  );
}
