import { Tabs } from "expo-router";

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
        name="(post)"
        options={{
          title: "Post",
        }}
        listeners={{
            tabPress: (e) => {
                e.preventDefault();
                console.log("Tab intercepted!");
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
