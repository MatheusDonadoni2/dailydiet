import { TextInput } from "react-native";
import styled, { css } from "styled-components/native";

export type TextInputStylesProps = {
  height?: number;
  width?: number;
};

export const Container = styled.View<TextInputStylesProps>`
  width: ${({ width }) => (width ? `${width}px` : "100%")};
`;

export const Input = styled(TextInput)<TextInputStylesProps>`
  width: 100%;
  height: ${({ height }) => height}px;
  border-radius: 6px;
  padding: 17px;
  ${({ theme }) => css`
    border: solid 1px ${({ theme }) => theme.COLORS.GRAY_500};
    color: ${({ theme }) => theme.COLORS.GRAY_100};
    font-size: ${({ theme }) => theme.FONT_SIZE.SM}px;
    font-family: ${({ theme }) => theme.FONT_FAMILY.REGULAR};
  `}
`;

export const Text = styled.Text`
  margin-bottom: 4px;
  ${({ theme }) => css`x
    color: ${({ theme }) => theme.COLORS.GRAY_200};
    font-size: ${({ theme }) => theme.FONT_SIZE.SM}px;
    font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
  `}
`;
