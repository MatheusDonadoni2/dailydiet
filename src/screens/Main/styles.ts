import { SafeAreaView } from "react-native-safe-area-context";
import styled from "styled-components/native";

export const Container = styled(SafeAreaView)`
  flex: 1;
  background-color: ${({ theme }) => theme.COLORS.WHITE};
  padding: 24px 24px 0px 24px;
`;

export const Header = styled.View`
  flex: 1;
`;

export const Content = styled.View`
  flex: 1;
  margin-top: 40px;
`;
