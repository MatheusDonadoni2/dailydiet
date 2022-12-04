import { useState } from "react";

import * as z from "zod";
import uuid from "react-native-uuid";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useNavigation, useRoute } from "@react-navigation/native";

import { FlatList, View } from "react-native";

import { MealStorageDTO } from "@storage/Meal/MealDTO";
import { mealAddByDate } from "@storage/Meal/mealAddByDate";

import { Form } from "./styles";
import { Select } from "@components/Select";
import { Button } from "@components/Button";
import { TextInput } from "@components/TextInput";
import { editMeal } from "@storage/Meal/editMeals";

const newMealValidateSchema = z.object({
  name: z.string().min(1, "Informe um nome válido"),
  description: z.string().min(1, "Informe uma descrição válida"),
  date: z.string().min(1, "Informe uma data válida"),
  hour: z.string().min(1, "Informe uma hora válida"),
});

type RoutesProps = {
  id: string;
};

export function MealsForm({ preloaded }: MealStorageDTO) {
  const route = useRoute();
  const { id } = route.params as RoutesProps;
  const isAddMode = !id;

  const [dietIncludes, setDietIncludes] = useState(
    isAddMode ? "" : preloaded.data.dietIncludes ? "YES" : "NO"
  );

  const navigation = useNavigation();

  const { register, setValue, handleSubmit, control } = useForm({
    resolver: zodResolver(newMealValidateSchema),
    defaultValues: {
      date: !isAddMode ? preloaded.date : "",
      name: !isAddMode ? preloaded.data.name : "",
      description: !isAddMode ? preloaded.data.description : "",
      hour: !isAddMode ? preloaded.data.hour : "",
    },
  });

  async function onCreteNewMeals(data: MealStorageDTO) {
    await mealAddByDate(data);
    navigation.navigate("feedBack", {
      dietsIncludes: data.data[0].dietIncludes,
    });
  }
  async function onUpdateNewMeals(data: MealStorageDTO) {
    await editMeal(id, data);
    navigation.navigate("feedBack", {
      dietsIncludes: data.data[0].dietIncludes,
    });
  }

  async function handleNewMeals(formData: any) {
    try {
      const newId = uuid.v4().toString();
      const details = [
        {
          id: newId,
          name: formData.name,
          description: formData.description,

          hour: formData.hour,
          dietIncludes: dietIncludes === "YES" ? true : false,
        },
      ];
      const newMeals = {
        date: formData.date,
        data: details,
      };
      isAddMode ? onCreteNewMeals(newMeals) : onUpdateNewMeals(newMeals);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <Form>
      <Controller
        control={control}
        rules={{
          required: true,
        }}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
            title="Nome"
            height={48}
            style={{ marginBottom: 24 }}
          />
        )}
        name="name"
      />

      <Controller
        control={control}
        rules={{
          required: true,
        }}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
            title="Descrição"
            height={120}
            multiline
            numberOfLines={10}
            textAlignVertical={"top"}
            style={{ marginBottom: 24 }}
          />
        )}
        name="description"
      />

      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <View
          style={{
            width: 153.5,
            marginBottom: 24,
          }}
        >
          <Controller
            control={control}
            rules={{
              required: true,
            }}
            render={({ field: { onChange, onBlur, value } }) => (
              <TextInput
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
                title="Data"
              />
            )}
            name="date"
          />
        </View>
        <View
          style={{
            width: 153.5,
          }}
        >
          <Controller
            control={control}
            rules={{
              required: true,
            }}
            render={({ field: { onChange, onBlur, value } }) => (
              <TextInput
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
                title="Hora"
              />
            )}
            name="hour"
          />
        </View>
      </View>

      <FlatList
        data={["YES", "NO"]}
        keyExtractor={(item, index) => item}
        renderItem={({ item }) => (
          <Select
            type={item}
            selected={item === dietIncludes}
            onPress={() => setDietIncludes(item)}
          />
        )}
        contentContainerStyle={{
          flexGrow: 1,
          justifyContent: "space-between",
        }}
        horizontal
      />
      <Button
        title={isAddMode ? "Cadastrar refeição" : "Salvar alterações"}
        onPress={handleSubmit(handleNewMeals)}
      />
    </Form>
  );
}
