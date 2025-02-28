import { Stack } from "expo-router";
import {ClerkProvider} from "@clerk/clerk-expo";
const PUBLISHABLE_KEY = "pk_test_aW5maW5pdGktcmFiYml0LTIwLmNsZXJrLmFjY291bnRzLmRldiQ";

export default function RootLayout() {
    return (
        <Stack screenOptions={{ headerShown: false }}>
            <Stack.Screen name="(tabs)" />
            <Stack.Screen name="dashboard" />
        </Stack>

    );
}
