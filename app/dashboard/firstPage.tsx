import { useRouter } from "expo-router";
import {View, Button, Text, SafeAreaView} from "react-native";

export default function FirstPage() {
    const router = useRouter();

    return (
        <SafeAreaView>
            <View>
                <Text>This is the First Page</Text>
                <Button title="Go Back" onPress={() => router.back()} />
            </View>
        </SafeAreaView>

    );
}
