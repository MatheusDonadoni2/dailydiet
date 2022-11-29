import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Main } from "@screens/Main";
import { Feedback } from "@screens/Feedback";
import { NewMeal } from "@screens/NewMeal";
import { DietDetails } from "@screens/DietDetails";
import { MealsDetails } from "@screens/MealsDetails";

const { Navigator, Screen } = createNativeStackNavigator();

export function AppRoutes() {
  return (
    <Navigator
      initialRouteName="main"
      screenOptions={{
        headerShown: false,
        animation: "fade_from_bottom",
      }}
    >
      <Screen name="main" component={Main} />
      <Screen name="newMeal" component={NewMeal} />
      <Screen name="feedBack" component={Feedback} />
      <Screen name="mealsDetails" component={MealsDetails} />
      <Screen name="dietDetails" component={DietDetails} />
    </Navigator>
  );
}
