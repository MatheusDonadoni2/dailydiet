import theme from "@theme/index";
import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  min-height: 40px;
  max-height: 40px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const Logo = styled.Image`
  width: 83px;
  height: 37px;
`;

export const Avatar = styled.Image`
  width: 40px;
  height: 100%;
  border-radius: 999px;
  border: solid 4px ${({ theme }) => theme.COLORS.GRAY_200};
`;
