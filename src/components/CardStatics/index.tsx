import { View, ViewProps } from "react-native";
import { Container, Title, SubTitle, PropsContainer } from "./styles";

type Props = ViewProps & {
  titleValue: number;
  subTitle: string;
  color: "GRAY" | "RED" | "GREEN";
};

export function CardStatics({ titleValue, subTitle, color, ...rest }: Props) {
  return (
    <Container color={color} {...rest}>
      <Title>{titleValue}</Title>
      <SubTitle>{subTitle}</SubTitle>
    </Container>
  );
}
