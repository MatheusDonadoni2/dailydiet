import AsyncStorage from "@react-native-async-storage/async-storage";
import { MEAL_COLLECTION } from "@storage/storageConfig";
import { MealStorageDTO } from "./MealDTO";

export async function getMeal() {
  try {
    const storage = await AsyncStorage.getItem(`${MEAL_COLLECTION}`);
    const meals: MealStorageDTO[] = storage ? JSON.parse(storage) : [];
    return meals;
  } catch (error) {
    console.log(error);
  }
}
