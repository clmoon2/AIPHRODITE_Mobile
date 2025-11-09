import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack
      initialRouteName="(tabs)"
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen
        name="(tabs)"
        options={{
          headerShown: false,
        }}
      />

      <Stack.Screen
        name="(post)"
        options={{
          headerShown: false,
        }}
      />
    </Stack>
  );
}
