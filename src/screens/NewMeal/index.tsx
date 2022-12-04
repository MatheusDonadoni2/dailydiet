import { useCallback, useEffect, useState } from "react";

import { FlatList } from "react-native-gesture-handler";
import {
  useFocusEffect,
  useNavigation,
  useRoute,
} from "@react-navigation/native";

import {
  Container,
  ContainerHeader,
  ContainerMain,
  Content,
  Form,
} from "./styles";

import { Header } from "@components/Header";
import { Loading } from "@components/Loading";

import { MealsForm } from "./MealsForm";

import { getMeal } from "@storage/Meal/getMeal";
import { MealStorageDTO } from "@storage/Meal/MealDTO";
import { Text, View } from "react-native";

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
type RoutesProps = {
  id: string;
};

export function NewMeal() {
  const [data, setData] = useState({});
  const [meal, setMeal] = useState({} as Meal);
  const [date, setDate] = useState(new Date());
  const [isLoading, setIsLoading] = useState(true);

  const route = useRoute();
  const { id } = route.params as RoutesProps;
  const isAddMode = !id;
  const [dateMealPicker, setDateMealPicker] = useState(new Date());

  // const onChange = (event: any, selectedDate: any) => {
  //   const currentDate = selectedDate;
  //   setDateMealPicker(new Date(dataAtualFormatada(currentDate)));
  // };

  // const showMode = (currentMode: any) => {
  //   DateTimePickerAndroid.open({
  //     value: date,
  //     onChange,
  //     mode: currentMode,
  //     is24Hour: true,
  //   });
  // };

  // const showDatepicker = () => {
  //   showMode("date");
  // };

  // const showTimepicker = () => {
  //   showMode("time");
  // };

  // function dataAtualFormatada(date: Date) {
  //   var data = date,
  //     dia = data.getDate().toString(),
  //     diaF = dia.length == 1 ? "0" + dia : dia,
  //     mes = (data.getMonth() + 1).toString(), //+1 pois no getMonth Janeiro começa com zero.
  //     mesF = mes.length == 1 ? "0" + mes : mes,
  //     anoF = data.getFullYear();
  //   return diaF + "/" + mesF + "/" + anoF;
  // }

  async function fetchData() {
    try {
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
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
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
        <Container>
          <ContainerHeader>
            <Header title={isAddMode ? "Nova refeição" : "Editar refeição"} />
          </ContainerHeader>
          <ContainerMain>
            <Content>
              {meal.data || isAddMode ? (
                <MealsForm preloaded={meal} />
              ) : (
                <Loading />
              )}
            </Content>
          </ContainerMain>
        </Container>
      )}
    </>
  );
}
