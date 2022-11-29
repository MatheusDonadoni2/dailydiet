import { View } from "react-native";
import { useTheme } from "styled-components/native";
import { Container, Hour, Meal, Status } from "./styles";

type Props = {
  hour: string;
  meal: string;
  dietIncludes: boolean;
};

export function CardItemDailyDiet({
  hour,
  meal,
  dietIncludes,
  ...rest
}: Props) {
  const theme = useTheme();

  return (
    <Container {...rest}>
      <Hour>{hour}</Hour>
      <View
        style={{
          marginLeft: 10,
          marginRight: 10,
          width: 1,
          height: "100%",
          backgroundColor: theme.COLORS.GRAY_400,
        }}
      />
      <View
        style={{
          flex: 1,
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "center",
        }}
      >
        <Meal>{meal}</Meal>
      </View>
      <Status color={dietIncludes ? "GREEN" : "RED"} />
    </Container>
  );
}
