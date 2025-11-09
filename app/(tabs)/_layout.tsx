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
          tabBarIcon: ({ color, size }) => (
              <Ionicons name="home-sharp" color={color} size={size} />
          ),
        }}
    />

    <Tabs.Screen
        name="(search)"
        options={{
          title: "Search",
          tabBarIcon: ({ color, size }) => (
              <Ionicons name="search" color={color} size={size} />
          ),
        }}
    />
    
    <Tabs.Screen
        name="(post-dummy)"
        options={{
          title: "",
          tabBarIcon: ({ color, size }) => (
              <Ionicons name="add-outline" color={color} size={size * 1.3} />
          ),
        }}
        listeners={{
            tabPress: (e) => {
                e.preventDefault();
                router.push("../(post)");
            }
        }}
    />

    <Tabs.Screen
        name="(closet)"
        options={{
          title: "Closet",
          tabBarIcon: ({ color, size }) => (
              <Ionicons name="shirt" color={color} size={size} />
          ),
        }}
    />

    <Tabs.Screen
        name="(profile)"
        options={{
          title: "Profile",
          tabBarIcon: ({ color, size }) => (
              <Ionicons name="person" color={color} size={size} />
          ),
        }}
    />
    </Tabs>
  );
}
