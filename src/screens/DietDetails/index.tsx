import { CardStatics } from "@components/CardStatics";
import { Header } from "@components/Header";
import { useRoute } from "@react-navigation/native";
import { View } from "react-native";
import { useTheme } from "styled-components";
import {
  Container,
  PercentualHeader,
  Value,
  Text,
  Content,
  Statics,
} from "./styles";

export type RouteDietDetailsProps = {
  percentualValue: number;
  bestRecordDietMeals: number;
  countMeals: number;
  countMealsIncludesInDiet: number;
  countMealsNotIncludesInDiet: number;
};

export function DietDetails() {
  const theme = useTheme();
  const route = useRoute();
  const {
    percentualValue,
    bestRecordDietMeals,
    countMeals,
    countMealsIncludesInDiet,
    countMealsNotIncludesInDiet,
  } = route.params as RouteDietDetailsProps;

  return (
    <Container color={percentualValue > 40 ? "GREEN" : "RED"}>
      <Content>
        <Header color={percentualValue > 40 ? "GREEN" : "RED"} />
        <PercentualHeader>
          <Value>{percentualValue ? percentualValue : 0}%</Value>
          <Text>das refeições dentro da dieta</Text>
        </PercentualHeader>
      </Content>
      <Statics>
        <Content>
          <Text
            style={{
              fontSize: theme.FONT_SIZE.SM,
              fontFamily: theme.FONT_FAMILY.BOLD,
              color: theme.COLORS.GRAY_100,
              marginBottom: 23,
            }}
          >
            Estatísticas gerais
          </Text>

          <CardStatics
            color={"GRAY"}
            titleValue={bestRecordDietMeals ? bestRecordDietMeals : 0}
            subTitle="melhor sequência de pratos dentro da dieta"
            style={{
              marginBottom: 12,
            }}
          />
          <CardStatics
            color={"GRAY"}
            titleValue={countMeals ? countMeals : 0}
            subTitle="refeições registradas"
            style={{
              marginBottom: 12,
            }}
          />
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              width: "100%",
            }}
          >
            <View
              style={{
                flex: 1,
                width: "50%",
                marginRight: 12,
              }}
            >
              <CardStatics
                color={"GREEN"}
                titleValue={
                  countMealsIncludesInDiet ? countMealsIncludesInDiet : 0
                }
                subTitle="refeições dentro da dieta"
              />
            </View>
            <View
              style={{
                flex: 1,
                width: "50%",
              }}
            >
              <CardStatics
                color={"RED"}
                titleValue={
                  countMealsNotIncludesInDiet ? countMealsNotIncludesInDiet : 0
                }
                subTitle="refeições fora da dieta"
              />
            </View>
          </View>
        </Content>
      </Statics>
    </Container>
  );
}
