import { Stack } from "expo-router";
import { ClerkProvider } from "@clerk/clerk-expo";
import { Provider } from "react-redux";
import {store} from "./store/store";
import {CartProvider} from "./components/context";


const PUBLISHABLE_KEY = "pk_test_aW5maW5pdGUtcmFiYml0LTIwLmNsZXJrLmFjY291bnRzLmRldiQ";

export default function RootLayout() {
    return (
        <ClerkProvider publishableKey={PUBLISHABLE_KEY}>
            <Provider store={store}>
                <CartProvider>
                    <Stack screenOptions={{ headerShown: false }}>
                    <Stack.Screen name="(tabs)" />
                    <Stack.Screen name="dashboard" />
                </Stack>
                </CartProvider>
            </Provider>
        </ClerkProvider>
    );
}
