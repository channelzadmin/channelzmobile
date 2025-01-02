import { Tabs } from "expo-router";
import FontAwesome from "@expo/vector-icons/FontAwesome";
export default function TabsLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: "black",
        tabBarShowLabel: false,
        headerTitleAlign: "center",
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "For you",
          tabBarIcon: ({ color }) => (
            <FontAwesome size={28} name="home" color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="new"
        options={{
          title: "New post",
          tabBarIcon: ({ color }) => (
            <FontAwesome size={28} name="plus-square-o" color={color} />
          ),
        }}
      />
    </Tabs>
  );
}
