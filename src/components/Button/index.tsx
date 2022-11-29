import { Container, Title } from "./styles";
import { PencilSimpleLine, Plus, Trash } from "phosphor-react-native";
import { TouchableOpacityProps } from "react-native";

type Props = TouchableOpacityProps & {
  title: string;
  width?: string;
  fill?: boolean;
  icon?: "Plus" | "PencilSimpleLine" | "Trash";
};

export function Button({ title, width, fill = true, icon, ...rest }: Props) {
  return (
    <Container width={width} fill={fill} {...rest}>
      {icon === "Plus" ? <Plus color={fill ? "white" : "black"} /> : null}
      {icon === "PencilSimpleLine" ? (
        <PencilSimpleLine color={fill ? "white" : "black"} />
      ) : null}
      {icon === "Trash" ? <Trash color={fill ? "white" : "black"} /> : null}
      <Title fill={fill}>{title}</Title>
    </Container>
  );
}
