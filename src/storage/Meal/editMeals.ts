import AsyncStorage from "@react-native-async-storage/async-storage";
import { MEAL_COLLECTION } from "@storage/storageConfig";
import { getMeal } from "./getMeal";
import { mealAddByDate } from "./mealAddByDate";
import { MealStorageDTO } from "./MealDTO";
import { removeMealDetails } from "./removeMealDetails";

export async function editMeal(id: string, data: MealStorageDTO) {
  const storedMeal = await getMeal();

  storedMeal?.forEach(async (meals, mealsIndex) => {
    const indexDetails = meals.data.findIndex((object) => {
      return object.id === id;
    });
    if (indexDetails >= 0) {
      if (meals.date !== data.date) {
        await removeMealDetails(id);
        await mealAddByDate(data);
      } else {
        meals.data[indexDetails] = data.data[0];
      }
    }
  });

  const meals = JSON.stringify(storedMeal);

  await AsyncStorage.setItem(`${MEAL_COLLECTION}`, meals);
}
