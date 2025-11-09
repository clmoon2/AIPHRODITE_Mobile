import { Tabs, router } from "expo-router";
import { Ionicons } from "@expo/vector-icons";

export default function TabsLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
      }}
    >
    <Tabs.Screen
        name="(home)"
        options={{
          title: "Home",
        }}
    />

    <Tabs.Screen
        name="(feed)"
        options={{
          title: "Feed",
        }}
    />
    
    <Tabs.Screen
        name="(post-dummy)"
        options={{
          title: "Post",
        }}
        listeners={{
            tabPress: (e) => {
                e.preventDefault();
                router.push("../(post)");
            }
        }}
    />

    <Tabs.Screen
        name="(shop)"
        options={{
          title: "Shop",
        }}
    />

    <Tabs.Screen
        name="(closet)"
        options={{
          title: "Closet",
        }}
    />
    </Tabs>
  );
}
