import { useCallback, useState } from "react";
import { SectionList, Text } from "react-native";
import { useFocusEffect, useNavigation } from "@react-navigation/native";

import { useTheme } from "styled-components";

import { getMeal } from "@storage/Meal/getMeal";
import { MealStorageDTO } from "@storage/Meal/MealDTO";

import { Button } from "@components/Button";
import { HeaderMain } from "@components/HeaderMain";
import { RouteDietDetailsProps as DietDetailsProps } from "@screens/DietDetails";
import { TitleSection } from "@components/TitleSection";
import { CardItemDailyDiet } from "@components/CardItemDailyDiet";
import { PercentualCardMain } from "@components/PercentualCardMain";

import { Container, Content } from "./styles";
import { number } from "zod";
import { Loading } from "@components/Loading";

export function Main() {
  const navigation = useNavigation();
  const theme = useTheme();
  const [isLoading, setIsLoading] = useState(true);
  const [dietDetailsProps, setDietDetailsProps] = useState<DietDetailsProps>(
    {} as DietDetailsProps
  );
  const [meals, setMeals] = useState<MealStorageDTO[]>([] as MealStorageDTO[]);
  const [percentualValue, setPercentualValue] = useState(0);

  function handleMealsDetails(id: string) {
    navigation.navigate("mealsDetails", { id });
  }

  function assignInfoDietDetails(data: MealStorageDTO[]) {
    let percentualValue = 0;
    let recordDietMeals = 0;
    let bestRecordDietMeals = 0;
    let countMeals = 0;
    let countMealsIncludesInDiet = 0;
    let countMealsNotIncludesInDiet = 0;

    data?.forEach((item) => {
      countMeals += item.data.length;

      item.data.forEach((detail) => {
        if (detail.dietIncludes) {
          countMealsIncludesInDiet += 1;
          recordDietMeals += 1;
        } else {
          countMealsNotIncludesInDiet += 1;
          recordDietMeals > bestRecordDietMeals
            ? (bestRecordDietMeals = recordDietMeals)
            : bestRecordDietMeals;
          recordDietMeals = 0;
        }
      });
    });
    recordDietMeals > bestRecordDietMeals
      ? (bestRecordDietMeals = recordDietMeals)
      : bestRecordDietMeals;
    percentualValue = (countMealsIncludesInDiet * 100) / countMeals;
    percentualValue = parseFloat(percentualValue.toFixed(2));
    setPercentualValue(percentualValue);
    setDietDetailsProps({
      percentualValue,
      bestRecordDietMeals,
      countMeals,
      countMealsIncludesInDiet,
      countMealsNotIncludesInDiet,
    });
  }

  async function fetchMeals() {
    try {
      setIsLoading(true);
      const data = await getMeal();

      if (data) {
        assignInfoDietDetails(data);
        setMeals(data);
      }
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  }

  useFocusEffect(
    useCallback(() => {
      fetchMeals();
    }, [])
  );

  return (
    <Container>
      <HeaderMain imgAvatar="https://instagram.fmea2-1.fna.fbcdn.net/v/t51.2885-19/137107710_471791860890949_1572521529897098087_n.jpg?stp=dst-jpg_s150x150&_nc_ht=instagram.fmea2-1.fna.fbcdn.net&_nc_cat=101&_nc_ohc=zdT5YDLNcXoAX8HQuMK&tn=vjhtOSg8gx6bNquV&edm=ACWDqb8BAAAA&ccb=7-5&oh=00_AfBm1Y3vQU8VfXRMjQLuvNzV0Ycbs2KnQMzLO7oINpHLWA&oe=637E71DC&_nc_sid=1527a3" />
      <PercentualCardMain
        percentualValue={percentualValue}
        onPress={() =>
          navigation.navigate("dietDetails", {
            percentualValue: dietDetailsProps.percentualValue,
            bestRecordDietMeals: dietDetailsProps.bestRecordDietMeals,
            countMeals: dietDetailsProps.countMeals,
            countMealsIncludesInDiet: dietDetailsProps.countMealsIncludesInDiet,
            countMealsNotIncludesInDiet:
              dietDetailsProps.countMealsNotIncludesInDiet,
          })
        }
      />

      <Content>
        <Text
          style={{
            marginBottom: 13,
            fontSize: theme.FONT_SIZE.MD,
            fontFamily: theme.FONT_FAMILY.REGULAR,
            color: theme.COLORS.GRAY_100,
          }}
        >
          Refeições
        </Text>
        <Button
          title="Nova refeição"
          icon="Plus"
          fill={true}
          onPress={() => navigation.navigate("newMeal", { id: "" })}
        />
        {isLoading ? (
          <Loading />
        ) : (
          <SectionList
            style={{
              marginTop: 36,
            }}
            sections={meals}
            keyExtractor={({ id }) => id}
            renderItem={({ item }) => (
              <CardItemDailyDiet
                meal={item.description}
                hour={item.hour}
                dietIncludes={item.dietIncludes}
                onPress={() => handleMealsDetails(item.id)}
              />
            )}
            renderSectionHeader={({ section: { date } }) => (
              <Text
                style={{
                  fontSize: theme.FONT_SIZE.LG,
                  fontFamily: theme.FONT_FAMILY.BOLD,
                  color: theme.COLORS.GRAY_100,
                  marginBottom: 14,
                }}
              >
                {date.split("/").join(".")}
              </Text>
            )}
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{
              paddingBottom: 100,
            }}
          />
        )}
      </Content>
    </Container>
  );
}
