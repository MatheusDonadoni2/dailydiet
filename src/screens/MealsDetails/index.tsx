import { useCallback, useEffect, useState } from "react";
import {
  Dimensions,
  ImageBackground,
  Platform,
  Text,
  View,
} from "react-native";
import {
  useFocusEffect,
  useNavigation,
  useNavigationState,
  useRoute,
} from "@react-navigation/native";

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
import Modal from "react-native-modal";
import { getMeal } from "@storage/Meal/getMeal";

import { Header } from "@components/Header";
import { Button } from "@components/Button";
import { Loading } from "@components/Loading";
import { MealStorageDTO } from "@storage/Meal/MealDTO";

import { useTheme } from "styled-components";
import theme from "@theme/index";
import { removeMealDetails } from "@storage/Meal/removeMealDetails";
import { FileX } from "phosphor-react-native";

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
  const [isLoading, setIsLoading] = useState(true);
  const [isModalVisible, setModalVisible] = useState(false);
  const theme = useTheme();
  const route = useRoute();
  const navigate = useNavigation();
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
        }
      });
    });
    setIsLoading(false);
  }

  async function handleDeleteMeal(id: string) {
    await removeMealDetails(id);
    navigate.navigate("main");
  }

  useFocusEffect(
    useCallback(() => {
      fetchData();
    }, [])
  );

  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <>
          <Modal
            isVisible={isModalVisible}
            onBackdropPress={() => setModalVisible(false)}
            // deviceWidth={deviceWidth}
            // deviceHeight={deviceHeight}
            hideModalContentWhileAnimating={true}
          >
            <View
              style={{
                display: "flex",
                backgroundColor: theme.COLORS.WHITE,
                height: 192,
                width: 327,
                padding: 24,
                paddingTop: 40,
                borderRadius: 8,
              }}
            >
              <Text
                style={{
                  textAlign: "center",
                  marginBottom: 32,
                  fontFamily: theme.FONT_FAMILY.BOLD,
                  fontSize: theme.FONT_SIZE.MD,
                  color: theme.COLORS.GRAY_200,
                }}
              >
                Deseja realmente excluir o registro da refeição?
              </Text>
              <View
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                  backgroundColor: theme.COLORS.WHITE,
                  height: 50,
                }}
              >
                <Button
                  title="Cancelar"
                  fill={false}
                  width={"135"}
                  onPress={() => setModalVisible(false)}
                />
                <Button
                  title="Sim, excluir"
                  width={"135"}
                  onPress={() => handleDeleteMeal(id)}
                />
              </View>
            </View>
          </Modal>

          <Container
            style={{
              backgroundColor: meal.data.dietIncludes
                ? theme.COLORS.GREEN_LIGHT
                : theme.COLORS.RED_LIGHT,
            }}
          >
            <ContainerHeader>
              <Header
                title="Editar refeição"
                color={meal.data.dietIncludes ? "GREEN" : "RED"}
              />
            </ContainerHeader>
            <ContainerMain>
              <>
                <Content style={{ flex: 1 }}>
                  <Title>{meal.data.name}</Title>
                  <SubTitle>{meal.data.description}</SubTitle>
                  <Text
                    style={{
                      fontSize: 14,
                      fontWeight: "700",
                    }}
                  >
                    Data e hora
                  </Text>
                  <SubTitle style={{ marginBottom: 24 }}>
                    {meal.date} às {meal.data.hour}
                  </SubTitle>
                  <IncludeDiet>
                    <IconStatus includeDiet={meal.data.dietIncludes} />
                    <Text
                      style={{
                        fontSize: 14,
                      }}
                    >
                      {meal.data.dietIncludes
                        ? "Dentro da dieta"
                        : "Fora da dieta"}
                    </Text>
                  </IncludeDiet>
                </Content>
                <View style={{ padding: 24 }}>
                  <Button
                    title="Editar refeição"
                    icon="PencilSimpleLine"
                    style={{ marginBottom: 9 }}
                    onPress={() => navigate.navigate("newMeal", { id })}
                  />
                  <Button
                    title="Excluir refeição"
                    icon="Trash"
                    fill={false}
                    onPress={() => setModalVisible(true)}
                  />
                </View>
              </>
            </ContainerMain>
          </Container>
        </>
      )}
    </>
  );
}
