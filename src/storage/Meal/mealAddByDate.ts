import AsyncStorage from "@react-native-async-storage/async-storage";
import { getMealByDate } from "./getMealByDate";

import { MEAL_COLLECTION } from "@storage/storageConfig";
("./storageConfig");
import { MealStorageDTO } from "./MealDTO";
import { getMeal } from "./getMeal";

export async function mealAddByDate(newMeal: MealStorageDTO) {
  try {
    //await AsyncStorage.clear();
    //return;
    const storedMeals = await getMeal();
    const dateAlreadyExist = await getMealByDate(newMeal.date);

    if (dateAlreadyExist?.length) {
      storedMeals?.forEach((storedMeal) => {
        if (storedMeal.date === newMeal.date) {
          storedMeal.data.push(...newMeal.data);
        }
      });
    } else {
      storedMeals?.push(newMeal);
    }
    const storage = JSON.stringify(storedMeals);

    await AsyncStorage.setItem(`${MEAL_COLLECTION}`, storage);
  } catch (error) {
    console.log(error);
  }
}
