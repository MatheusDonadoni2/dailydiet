import { Text, TouchableOpacity, View } from "react-native";
import { useTheme } from "styled-components";
import { Container, Title, SelectStylesProps, IconStatus } from "./styles";

export function Select({ type, selected = false, ...rest }: SelectStylesProps) {
  const theme = useTheme();

  return (
    <Container type={type} selected={selected} {...rest}>
      <IconStatus type={type} />
      <Title>{type === "YES" ? "Sim" : "Não"}</Title>
    </Container>
  );
}
