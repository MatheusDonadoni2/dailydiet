import { TextInputProps } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import styled, { css } from "styled-components/native";

export const Container = styled(SafeAreaView)`
  flex: 1;
  background-color: ${({ theme }) => theme.COLORS.GRAY_500};
`;
export const ContainerHeader = styled.View`
  width: 100%;
  padding: 24px;
`;

export const ContainerMain = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.COLORS.WHITE};
  border-top-right-radius: 20px;
  border-top-left-radius: 20px;
`;

export const Content = styled.View`
  width: 100%;
  height: 100%;
  padding: 24px;
`;

export const Form = styled.View`
  flex: 1;
`;

export const Input = styled.TextInput`
  width: 100%;
  height: 48px;
  border-radius: 6px;
  padding: 17px;

  ${({ theme }) => css`
    border: solid 1px ${({ theme }) => theme.COLORS.GRAY_500};
    color: ${({ theme }) => theme.COLORS.GRAY_100};
    font-size: ${({ theme }) => theme.FONT_SIZE.SM}px;
    font-family: ${({ theme }) => theme.FONT_FAMILY.REGULAR};
  `}
`;

export const TextArea = styled.TextInput<TextInputProps>`
  width: 100%;
  height: 120px;
  border-radius: 6px;
  padding: 17px;

  ${({ theme }) => css`
    border: solid 1px ${({ theme }) => theme.COLORS.GRAY_500};
    color: ${({ theme }) => theme.COLORS.GRAY_100};
    font-size: ${({ theme }) => theme.FONT_SIZE.SM}px;
    font-family: ${({ theme }) => theme.FONT_FAMILY.REGULAR};
  `}
`;
