import { TouchableOpacity, TouchableOpacityProps } from "react-native";
import styled, { css } from "styled-components/native";

type Props = {
  color: "RED" | "GREEN";
};

export const Container = styled(TouchableOpacity)<TouchableOpacityProps>`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  padding: 11px;
  min-height: 49px;
  max-height: 49px;

  margin-bottom: 8px;

  border: solid 1px ${({ theme }) => theme.COLORS.GRAY_500};
  border-radius: 6px;
`;

export const Hour = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.FONT_FAMILY.BOLD};
    font-size: ${theme.FONT_SIZE.MD}px;
    color: ${theme.COLORS.GRAY_100};
  `}
`;

export const Meal = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.FONT_FAMILY.REGULAR};
    font-size: ${theme.FONT_SIZE.MD}px;
    color: ${theme.COLORS.GRAY_200};
    overflow: hidden;
    white-space: nowrapd;
    text-overflow: ellipsis;
  `}
`;

export const Status = styled.View<Props>`
  height: 14px;
  width: 14px;
  border-radius: 999px;
  background-color: ${({ theme, color }) =>
    color === "RED" ? theme.COLORS.RED_MIND : theme.COLORS.GREEN_MIND};
`;
