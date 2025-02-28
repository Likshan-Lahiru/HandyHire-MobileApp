import { useRouter } from "expo-router";
import { View, Button, Text } from "react-native";

export default function SecondPage() {
    const router = useRouter();

    return (
        <View>
            <Text>This is the Second Page</Text>
            <Button title="Go Back" onPress={() => router.back()} />
        </View>
    );
}
