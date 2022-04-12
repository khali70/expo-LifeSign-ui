import { StackScreenProps } from "@react-navigation/stack";
import { Button, Text, View } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import i18n from "../i18n";

type props = StackScreenProps<{ Welcome: undefined; Home: undefined }>;

const WelcomeScreen = ({ navigation, route }: props) => {
  const count = useSelector((state) => state.count);
  const dispatch = useDispatch();
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>
        {i18n.t("Welcome")} {count}
      </Text>
      <Button onPress={() => navigation.push("Home")} title="go Home" />
      <Button onPress={() => dispatch({type:""})} title="go Home" />
      {/* <Button
        onPress={() => dispatch({ type: "CounterAdd", payload: count + 1 })}
        title="add one"
      /> */}
    </View>
  );
};
export default WelcomeScreen;
