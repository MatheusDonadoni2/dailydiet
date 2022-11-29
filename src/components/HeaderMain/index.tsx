import { Image, View } from "react-native";
import { Avatar, Container, Logo } from "./styles";

import logoImg from "@assets/Logo.png";

type Props = {
  imgAvatar: string;
};

export function HeaderMain({ imgAvatar }: Props) {
  return (
    <Container>
      <Logo source={logoImg} />
      <Avatar source={{ uri: imgAvatar }} />
    </Container>
  );
}
