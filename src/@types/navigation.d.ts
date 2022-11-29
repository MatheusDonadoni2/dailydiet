export declare global {
  namespace ReactNavigation {
    interface RootParamList {
      main: undefined;
      dietDetails: {
        percentualValue: number;
        recordDietMeals: number;
        countMeals: number;
        countMealsIncludesInDiet: number;
        countMealsNotIncludesInDiet: number;
      };
      newMeal: undefined;
      feedBack: {
        dietsIncludes: boolean;
      };
      mealsDetails: {
        id: string;
      };
    }
  }
}
