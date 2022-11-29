import AsyncStorage from "@react-native-async-storage/async-storage";
import { MEAL_COLLECTION } from "@storage/storageConfig";
import { getMeal } from "./getMeal";

import { MealStorageDTO } from "./MealDTO";

export async function getMealByDate(
  date: string
): Promise<MealStorageDTO[] | undefined> {
  try {
    const storage = await AsyncStorage.getItem(`${MEAL_COLLECTION}`);
    const meals: MealStorageDTO[] = storage ? JSON.parse(storage) : [];
    const data = meals?.filter((item) => {
      return item.date === date;
    });
    return data;
  } catch (error) {
    console.log(error);
  }
}
