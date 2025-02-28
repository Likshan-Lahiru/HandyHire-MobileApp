import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { BlurView } from "expo-blur";
import { StyleSheet } from "react-native";
import { Tabs } from "expo-router";
import { Ionicons } from "@expo/vector-icons";

const Tab = createBottomTabNavigator();

export default function TabsLayout() {
    return (
        <Tabs
            screenOptions={({ route }) => ({
        tabBarStyle: { position: "absolute", backgroundColor: "transparent" },
        tabBarBackground: () => (
            <BlurView tint="light" intensity={100} style={StyleSheet.absoluteFill} />
),
    tabBarIcon: ({ color, size }) => {
        let iconName;
        if (route.name === "index") iconName = "home";
        else if (route.name === "dashboard") iconName = "grid";
        else if (route.name === "profile") iconName = "person";

        return <Ionicons name={iconName} size={size} color={color} />;
    },
})}
>
    <Tabs.Screen name="index" options={{ title: "Home" }} />
    <Tabs.Screen name="dashboard" options={{ title: "Dashboard" }} />
    <Tabs.Screen name="profile" options={{ title: "Profile" }} />
    </Tabs>
);
}
