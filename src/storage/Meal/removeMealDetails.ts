import AsyncStorage from "@react-native-async-storage/async-storage";
import { MEAL_COLLECTION } from "@storage/storageConfig";
import { getMeal } from "./getMeal";

export async function removeMealDetails(id: string) {
  const storedMeal = await getMeal();
  storedMeal?.forEach((meals, mealsIndex) => {
    const indexDetails = meals.data.findIndex((object) => {
      return object.id === id;
    });
    if (indexDetails >= 0) {
      meals.data.splice(indexDetails, 1);
    }
    if (meals.data.length === 0) {
      storedMeal.splice(mealsIndex, 1);
    }
  });

  const meals = JSON.stringify(storedMeal);

  await AsyncStorage.setItem(`${MEAL_COLLECTION}`, meals);
}
