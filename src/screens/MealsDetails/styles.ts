import { View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import styled, { css } from "styled-components/native";

export type MealsDetailsStyles = {
  includeDiet: boolean;
};

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

export const Title = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.FONT_FAMILY.BOLD};
    font-size: ${theme.FONT_SIZE.LX}px;
    color: ${theme.COLORS.GRAY_100};
  `}
  margin-bottom:8px;
`;
export const SubTitle = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.FONT_FAMILY.REGULAR};
    font-size: ${theme.FONT_SIZE.MD}px;
    color: ${theme.COLORS.GRAY_200};
  `}
  margin-bottom:24px;
`;

export const IncludeDiet = styled.TouchableOpacity`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  width: 144px;
  height: 34px;
  border-radius: 1000px;

  background-color: ${({ theme }) => theme.COLORS.GRAY_600};
`;

export const IconStatus = styled(View)<MealsDetailsStyles>`
  width: 8px;
  height: 8px;

  margin-right: 8px;

  border-radius: 1000px;
  background-color: ${({ theme, includeDiet }) =>
    includeDiet ? theme.COLORS.GREEN_DARK : theme.COLORS.RED_DARK};
`;
