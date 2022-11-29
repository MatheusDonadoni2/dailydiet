import { TouchableOpacity, Text } from "react-native";
import styled, { css } from "styled-components/native";

type Props = {
  width?: string;
  fill: boolean;
};

export const Container = styled(TouchableOpacity)<Props>`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  width: ${({ width }) => (width ? `${width}px` : "100%")};
  height: 50px;

  background-color: ${({ theme, fill }) =>
    fill ? theme.COLORS.GRAY_200 : "transparent"};
  border: solid 2px
    ${({ theme, fill }) => (!fill ? theme.COLORS.GRAY_200 : "transparent")};
  border-radius: 6px;
`;

export const Title = styled(Text)<Props>`
  ${({ theme, fill }) => css`
    font-family: ${theme.FONT_FAMILY.BOLD};
    font-size: ${theme.FONT_SIZE.SM}px;
    color: ${fill ? theme.COLORS.WHITE : theme.COLORS.GRAY_100};
  `}
  margin-left:12px;
`;
