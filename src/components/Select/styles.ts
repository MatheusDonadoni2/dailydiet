import theme from "@theme/index";
import { TouchableOpacity, TouchableOpacityProps } from "react-native";
import styled, { css } from "styled-components/native";

export type SelectStylesProps = TouchableOpacityProps & {
  type: "YES" | "NO";
  selected?: boolean;
};

export const Container = styled(TouchableOpacity)<SelectStylesProps>`
  flex-direction: row;
  align-items: center;
  justify-content: center;

  width: 160px;
  height: 50px;
  background-color: ${({ selected, type }) =>
    selected
      ? type === "YES"
        ? theme.COLORS.GREEN_LIGHT
        : theme.COLORS.RED_LIGHT
      : theme.COLORS.GRAY_600};

  border-radius: 6px;
  border: solid 1px
    ${({ selected, theme, type }) =>
      selected
        ? type === "YES"
          ? theme.COLORS.GREEN_DARK
          : theme.COLORS.RED_DARK
        : theme.COLORS.GRAY_600};
`;

export const Title = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.FONT_FAMILY.BOLD};
    font-size: ${theme.FONT_SIZE.MD}px;
    color: ${theme.COLORS.GRAY_100};
  `}
`;

export const IconStatus = styled.View<SelectStylesProps>`
  width: 8px;
  height: 8px;
  border-radius: 999px;
  margin-right: 8px;

  background-color: ${({ type }) =>
    type === "YES" ? theme.COLORS.GREEN_DARK : theme.COLORS.RED_DARK};
`;
