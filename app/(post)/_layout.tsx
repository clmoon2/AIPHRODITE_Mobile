import { Stack } from "expo-router";

export default function PostLayout() {
  return (
    <Stack
      initialRouteName="(camera)"
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen
        name="(camera)"
        options={{
          headerShown: false,
        }}
      />
      
      <Stack.Screen
        name="(photo-select)"
        options={{
          headerShown: false,
        }}
      />
      
    </Stack>
  );
}