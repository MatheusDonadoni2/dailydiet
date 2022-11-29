import { Button } from "@components/Button";
import { Container, FeedBackStyles, Image, SubTitle, Title } from "./styles";
import { useNavigation, useRoute } from "@react-navigation/native";
import imgDietsIncludes from "@assets/feedback-dietsIncludes.png";
import imgDietsNotIncludes from "@assets/feedback-dietsNotIncludes.png";

type RouteParams = {
  dietsIncludes: boolean;
};

export function Feedback() {
  const navigation = useNavigation();
  const route = useRoute();
  const { dietsIncludes } = route.params as RouteParams;

  return (
    <Container>
      {dietsIncludes ? (
        <Title dietsIncludes={dietsIncludes}>Continue assim!</Title>
      ) : (
        <Title dietsIncludes={dietsIncludes}>Que pena!</Title>
      )}
      {dietsIncludes ? (
        <SubTitle>Você continua dentro da dieta. Muito bem!</SubTitle>
      ) : (
        <SubTitle>
          Você saiu da dieta dessa vez, mas continue se esforçando e não
          desista!
        </SubTitle>
      )}
      <Image source={dietsIncludes ? imgDietsIncludes : imgDietsNotIncludes} />

      <Button
        title="Ir para a página inicial"
        width="191"
        onPress={() => navigation.navigate("main")}
      />
    </Container>
  );
}
