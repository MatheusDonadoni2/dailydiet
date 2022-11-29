import { TouchableOpacity } from "react-native";
import styled, { css } from "styled-components/native";

import { ArrowUpRight } from "phosphor-react-native";

type PercentualCardMainStylesProps = {
  percentualValue: number;
};

export const Container = styled.TouchableOpacity<PercentualCardMainStylesProps>`
  flex: 1;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 8px;

  max-height: 102px;
  border-radius: 8px;
  background-color: ${({ theme, percentualValue }) =>
    percentualValue > 40 ? theme.COLORS.GREEN_LIGHT : theme.COLORS.RED_LIGHT};
  margin-top: 70px;
`;

export const RedirectButton = styled(TouchableOpacity)`
  max-width: 24px;
  height: 24px;
`;
export const Icon = styled(ArrowUpRight).attrs(
  ({ theme, percentualValue }) => ({
    size: 18,
    color: theme.COLORS.GREEN_DARK,
  })
)<PercentualCardMainStylesProps>``;

export const Value = styled.Text`
  margin-top: -20px;
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
