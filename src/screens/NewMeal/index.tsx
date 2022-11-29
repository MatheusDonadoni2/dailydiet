import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";

import { useEffect, useState } from "react";
import { Text, View } from "react-native";
import DateTimePicker, {
  DateTimePickerAndroid,
} from "@react-native-community/datetimepicker";
import { FlatList } from "react-native-gesture-handler";

import { Button } from "@components/Button";
import { Header } from "@components/Header";
import { Select } from "@components/Select";
import {
  Container,
  ContainerHeader,
  ContainerMain,
  Content,
  Form,
} from "./styles";
import { TextInput } from "@components/TextInput";
import { useNavigation } from "@react-navigation/native";
import { mealAddByDate } from "@storage/Meal/mealAddByDate";

import uuid from "react-native-uuid";

const newMealValidateSchema = z.object({
  name: z.string().min(1, "Informe um nome válido"),
  description: z.string().min(1, "Informe uma descrição válida"),
  date: z.string().min(1, "Informe uma hora válida"),
  hour: z.string().min(1, "Informe uma hora válida"),
});

export function NewMeal() {
  const [date, setDate] = useState(new Date());
  const [dietIncludes, setDietIncludes] = useState("");
  const [dateMealPicker, setDateMealPicker] = useState(new Date());

  const navigation = useNavigation();
  const { register, setValue, handleSubmit } = useForm({
    resolver: zodResolver(newMealValidateSchema),
  });

  const onChange = (event: any, selectedDate: any) => {
    const currentDate = selectedDate;
    setDate(currentDate);
  };

  const showMode = (currentMode: any) => {
    DateTimePickerAndroid.open({
      value: date,
      onChange,
      mode: currentMode,
      is24Hour: true,
    });

    if (currentMode === "date") {
      setDateMealPicker(new Date(dataAtualFormatada(date)));
      setValue("date", dateMealPicker);
    } else {
      setValue("hour", date);
    }
  };

  const showDatepicker = () => {
    showMode("date");
  };

  const showTimepicker = () => {
    showMode("time");
  };

  function dataAtualFormatada(date: Date) {
    var data = date,
      dia = data.getDate().toString(),
      diaF = dia.length == 1 ? "0" + dia : dia,
      mes = (data.getMonth() + 1).toString(), //+1 pois no getMonth Janeiro começa com zero.
      mesF = mes.length == 1 ? "0" + mes : mes,
      anoF = data.getFullYear();
    return diaF + "/" + mesF + "/" + anoF;
  }

  async function handleNewMeals(formData: any) {
    try {
      const id = uuid.v4().toString();
      const details = [
        {
          id,
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
      await mealAddByDate(newMeals);
      navigation.navigate("feedBack", {
        dietsIncludes: newMeals.data[0].dietIncludes,
      });
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    register("name");
    register("description");
    register("date");
    register("hour"), [register];
  });

  return (
    <Container>
      <ContainerHeader>
        <Header title="Nova refeição" />
      </ContainerHeader>
      <ContainerMain>
        <Content>
          <Form>
            <TextInput
              title="Nome"
              height={48}
              onChangeText={(text) => setValue("name", text)}
              style={{ marginBottom: 24 }}
            />
            <TextInput
              title="Descrição"
              height={120}
              multiline
              numberOfLines={10}
              textAlignVertical={"top"}
              onChangeText={(text) => setValue("description", text)}
              style={{ marginBottom: 24 }}
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
                <TextInput
                  title="Data"
                  onPressIn={showDatepicker}
                  caretHidden={true}
                  value={dateMealPicker}
                  onChangeText={(dateMealPicker) =>
                    setValue("date", dateMealPicker)
                  }
                />
              </View>
              <View
                style={{
                  width: 153.5,
                }}
              >
                <TextInput
                  title="Hora"
                  onPressIn={showTimepicker}
                  caretHidden={true}
                  value={date.toLocaleTimeString()}
                  onChange={(text) => {
                    setValue("hour", text);
                  }}
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
          </Form>
          <Button
            title="Cadastrar refeição"
            onPress={handleSubmit(handleNewMeals)}
          />
        </Content>
      </ContainerMain>
    </Container>
  );
}
