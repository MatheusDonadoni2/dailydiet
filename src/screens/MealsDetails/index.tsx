import { useCallback, useEffect, useState } from "react";
import { ImageBackground, Text, View } from "react-native";
import { useFocusEffect, useRoute } from "@react-navigation/native";

import {
  Container,
  ContainerHeader,
  ContainerMain,
  Content,
  IconStatus,
  IncludeDiet,
  SubTitle,
  Title,
} from "./styles";

import { getMeal } from "@storage/Meal/getMeal";

import { Header } from "@components/Header";
import { MealStorageDTO } from "@storage/Meal/MealDTO";
import { Loading } from "@components/Loading";
import { Button } from "@components/Button";
import { ThemeConsumer, useTheme } from "styled-components";
import theme from "@theme/index";

type RoutesProps = {
  id: string;
};

type Meal = {
  date: string;
  data: {
    id: string;
    name: string;
    description: string;

    hour: string;
    dietIncludes: boolean;
  };
};

export function MealsDetails() {
  const [meal, setMeal] = useState({} as Meal);
  const theme = useTheme();
  const route = useRoute();
  const { id } = route.params as RoutesProps;

  async function fetchData() {
    const dataMeals = await getMeal();

    if (!dataMeals) {
      return;
    }

    dataMeals.forEach((item) => {
      item.data.forEach((itemDetails) => {
        if (itemDetails.id === id) {
          setMeal({ date: item.date, data: itemDetails });
          console.log({ date: item.date, data: itemDetails });
          console.log(meal);
        }
      });
    });
  }

  useFocusEffect(
    useCallback(() => {
      fetchData();
    }, [])
  );

  return (
    <Container />
    // <Container
    //   style={{
    //     backgroundColor: meal.data.dietIncludes
    //       ? theme.COLORS.GREEN_LIGHT
    //       : theme.COLORS.RED_LIGHT,
    //   }}
    // >
    //   <ContainerHeader>
    //     <Header
    //       title="Editar refeição"
    //       color={meal.data.dietIncludes ? "GREEN" : "RED"}
    //     />
    //   </ContainerHeader>
    //   <ContainerMain>
    //     <>
    //       <Content style={{ flex: 1 }}>
    //         <Title>{meal.data.name}</Title>
    //         <SubTitle>{meal.data.description}</SubTitle>
    //         <Text
    //           style={{
    //             fontSize: 14,
    //             fontWeight: "700",
    //           }}
    //         >
    //           Data e hora
    //         </Text>
    //         <SubTitle style={{ marginBottom: 24 }}>
    //           28/11/ às {meal.data.hour}
    //         </SubTitle>
    //         <IncludeDiet>
    //           <IconStatus includeDiet={meal.data.dietIncludes} />
    //           <Text
    //             style={{
    //               fontSize: 14,
    //             }}
    //           >
    //             {meal.data.dietIncludes ? "Dentro da dieta" : "Fora da dieta"}
    //           </Text>
    //         </IncludeDiet>
    //       </Content>
    //       <View style={{ padding: 24 }}>
    //         <Button
    //           title="Editar refeição"
    //           icon="PencilSimpleLine"
    //           style={{ marginBottom: 9 }}
    //         />
    //         <Button title="Excluir refeição" icon="Trash" fill={false} />
    //       </View>
    //     </>
    //   </ContainerMain>
    // </Container>
  );
}
