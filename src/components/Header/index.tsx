import { useNavigation } from "@react-navigation/native";
import { ArrowLeft } from "phosphor-react-native";
import { ViewProps } from "react-native";
import { useTheme } from "styled-components";
import { BackButton, Container, Title, TitleContent } from "./styles";

type Props = ViewProps & {
  title?: string;
  color?: "RED" | "GREEN";
};

export function Header({ color, title = "", ...rest }: Props) {
  const theme = useTheme();

  const navigation = useNavigation();

  function handleGoBack() {
    navigation.navigate("main");
  }

  return (
    <Container {...rest}>
      <BackButton onPress={handleGoBack}>
        <ArrowLeft
          color={
            color === "RED"
              ? theme.COLORS.RED_DARK
              : color === "GREEN"
              ? theme.COLORS.GREEN_DARK
              : theme.COLORS.GRAY_200
          }
        />
      </BackButton>
      <TitleContent>
        <Title>{title}</Title>
      </TitleContent>
    </Container>
  );
}
