import { SafeAreaView } from "react-native-safe-area-context";
import styled, { css } from "styled-components/native";

type Props = {
  color: "RED" | "GREEN";
};

export const Container = styled(SafeAreaView)<Props>`
  flex: 1;
  background-color: ${({ theme, color }) =>
    color === "RED" ? theme.COLORS.RED_LIGHT : theme.COLORS.GREEN_LIGHT};
`;

export const Content = styled.View`
  padding: 24px;
  align-items: center;
`;

export const PercentualHeader = styled.View`
  height: 88px;
  width: 100%;
  justify-content: center;
  align-items: center;
`;

export const Value = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.FONT_FAMILY.BOLD};
    font-size: ${theme.FONT_SIZE.XXL}px;
    color: ${theme.COLORS.GRAY_100};
  `}
`;
export const Text = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.FONT_FAMILY.REGULAR};
    font-size: ${theme.FONT_SIZE.SM}px;
    color: ${theme.COLORS.GRAY_200};
  `}
`;

export const Statics = styled.View`
  flex: 1;
  background: white;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
`;
