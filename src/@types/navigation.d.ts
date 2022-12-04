export declare global {
  namespace ReactNavigation {
    interface RootParamList {
      main: undefined;
      dietDetails: {
        percentualValue: number;
        bestRecordDietMeals: number;
        countMeals: number;
        countMealsIncludesInDiet: number;
        countMealsNotIncludesInDiet: number;
      };
      newMeal: {
        id?: string | undefined;
      };
      feedBack: {
        dietsIncludes: boolean;
      };
      mealsDetails: {
        id: string;
      };
    }
  }
}
