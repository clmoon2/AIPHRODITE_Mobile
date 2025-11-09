import { Text, View } from "react-native";
import { LightTheme, DarkTheme } from "@/assets/styles/globals";
// THIS SHOULD NOT BE EDITED AND THIS PAGE SHOULD NEVER BE RENDERED
export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: LightTheme.background,
      }}
    >
      <Text>THIS SCREEN SHOULD NEVER BE RENDERED</Text>
    </View>
  );
}
