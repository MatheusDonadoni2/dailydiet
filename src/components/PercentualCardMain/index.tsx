import { useNavigation } from "@react-navigation/native";
import { Rows } from "phosphor-react-native";
import { TouchableOpacityProps, View } from "react-native";
import { Container, Value, Text, RedirectButton, Icon } from "./styles";

type PercentualCardMain = TouchableOpacityProps & {
  percentualValue: number;
};

export function PercentualCardMain({
  percentualValue,
  ...rest
}: PercentualCardMain) {
  return (
    <Container {...rest} percentualValue={percentualValue}>
      <View
        style={{
          height: 24,
          display: "flex",
          flexDirection: "row",
          alignContent: "center",
          justifyContent: "flex-end",
          width: "100%",
        }}
      >
        <RedirectButton>
          <Icon />
        </RedirectButton>
      </View>
      <Value>{percentualValue ? percentualValue : 0}%</Value>
      <Text>das refeições dentro da dieta</Text>
    </Container>
  );
}
