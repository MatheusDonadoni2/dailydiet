import { TextInputProps, ViewProps } from "react-native";
import { Container, Input, Text, TextInputStylesProps } from "./styles";

type Props = TextInputProps &
  ViewProps &
  TextInputStylesProps & {
    title: string;
  };

export function TextInput({ title, height = 48, width, ...rest }: Props) {
  return (
    <Container {...rest}>
      <Text>{title}</Text>
      <Input height={height} width={width} {...rest} />
    </Container>
  );
}
