import styled, { css } from "styled-components/native";
import { SafeAreaView } from "react-native-safe-area-context";

export type FeedBackStyles = {
  dietsIncludes: boolean;
};

export const Container = styled.SafeAreaView`
  flex: 1;
  align-items: center;
  background-color: ${({ theme }) => theme.COLORS.WHITE};
  padding: 132px 32px;
`;

export const Title = styled.Text<FeedBackStyles>`
  ${({ theme, dietsIncludes }) => css`
    font-family: ${theme.FONT_FAMILY.BOLD};
    font-size: ${theme.FONT_SIZE.XL}px;
    color: ${dietsIncludes ? theme.COLORS.GREEN_DARK : theme.COLORS.RED_DARK};
  `}
  margin-bottom:8px
`;

export const SubTitle = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.FONT_FAMILY.BOLD};
    font-size: ${theme.FONT_SIZE.MD}px;
    color: ${theme.COLORS.GRAY_100};
  `}
  text-align: center;
  margin-bottom: 40px;
`;

export const Image = styled.Image`
  width: 224px;
  height: 288px;
  margin-bottom: 32px;
`;
