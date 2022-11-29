import styled, { css } from "styled-components/native";
import { TouchableOpacity } from "react-native";

export const Container = styled.View`
  flex-direction: row;
  height: 24px;
  width: 100%;
`;

export const BackButton = styled(TouchableOpacity)`
  height: 100%;
  width: 24px;
`;

export const TitleContent = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export const Title = styled.Text`
  flex: 1;
  height: 100%;
  ${({ theme }) => css`
    font-family: ${theme.FONT_FAMILY.BOLD};
    font-size: ${theme.FONT_SIZE.LG}px;
    color: ${theme.COLORS.GRAY_100};
  `}
`;
