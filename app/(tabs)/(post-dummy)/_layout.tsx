import { Stack } from "expo-router";

export default function PostDummyLayout() {
  return (
    <Stack
      screenOptions={{
        headerShown: false,
      }}
    />
  );
}