import { useRouter } from "expo-router";
import {View, Button, Text, SafeAreaView} from "react-native";

export default function DashboardScreen() {
    const router = useRouter();

    return (
        <SafeAreaView>
            <View>
                <Text>Welcome to Dashboard</Text>
                <Button title="Go to First Page" onPress={() => router.push("/dashboard/firstPage")} />
                <Button title="Go to Second Page" onPress={() => router.push("/dashboard/secondPage")} />
            </View>
        </SafeAreaView>

);
}
