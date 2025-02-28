import { Stack } from "expo-router";

export default function DashboardLayout() {
    return (
        <Stack>
            <Stack.Screen name="index" options={{ title: "Dashboard", headerShown: false }} />
            <Stack.Screen name="firstpage" options={{ title: "First Page" }} />
            <Stack.Screen name="secondpage" options={{ title: "Second Page" }} />
        </Stack>
    );
}
