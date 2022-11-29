import { ViewProps } from "react-native";
import styled, { css } from "styled-components/native";

export type PropsContainer = {
  color: "GRAY" | "RED" | "GREEN";
};

export const Container = styled.View<PropsContainer>`
  align-items: center;
  justify-content: center;
  padding: 16px;

  width: 100%;
  height: 89px;
  background: ${({ theme, color }) =>
    color === "GRAY"
      ? theme.COLORS.GRAY_600
      : color === "RED"
      ? theme.COLORS.RED_LIGHT
      : theme.COLORS.GREEN_LIGHT};
  border-radius: 8px;
`;

export const Title = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.FONT_FAMILY.BOLD};
    font-size: ${theme.FONT_SIZE.XL}px;
    color: ${theme.COLORS.GRAY_100};
  `}
`;
export const SubTitle = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.FONT_FAMILY.REGULAR};
    font-size: ${theme.FONT_SIZE.SM}px;
    color: ${theme.COLORS.GRAY_200};
  `}
  text-align:center
`;
