import { StackScreenProps } from "@react-navigation/stack";
import { Button, Text, View } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import i18n from "../i18n";
type props = StackScreenProps<{ Welcome: undefined; Home: undefined }>;
const HomeScreen = ({ navigation, route }: props) => {
  const count = useSelector((state) => state.count);
  const dispatch = useDispatch();
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>
        {i18n.t("HOME")} {count}
      </Text>
      <Button onPress={() => navigation.push("Welcome")} title="go next" />
    </View>
  );
};
export default HomeScreen;
