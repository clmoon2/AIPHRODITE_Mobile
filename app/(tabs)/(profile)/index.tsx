import { Text, View } from "react-native";
import { LightTheme, DarkTheme } from "@/assets/styles/globals";

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
      <Text>Edit app/(tabs)/(profile)/index.tsx to edit this screen.</Text>
    </View>
  );
}
