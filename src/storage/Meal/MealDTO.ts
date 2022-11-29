type details = [
  {
    id: string;
    name: string;
    description: string;

    hour: string;
    dietIncludes: boolean;
  }
];

export type MealStorageDTO = {
  date: string;
  data: {
    id: string;
    name: string;
    description: string;

    hour: string;
    dietIncludes: boolean;
  }[];
};
