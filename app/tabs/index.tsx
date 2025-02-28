import {View, Text, StyleSheet, FlatList} from "react-native";
import {useDispatch, useSelector} from "react-redux";
import {AppDispatch, RootState} from "../store/store";
import {useEffect} from "react";
import {getTools} from "../reducers/toolReducer";
import ToolCard from "../components/toolCard";

export default function HomeScreen() {
    const dispatch = useDispatch<AppDispatch>();
    const tools = useSelector((state: RootState) => state.tool);

    useEffect(() => {
        if (!tools || tools.length === 0) {
            dispatch(getTools());
        }
    }, [dispatch, tools]);

    return (
        <View style={styles.container}>
            {tools && tools.length > 0 ? (
                <FlatList
                    data={tools}
                    keyExtractor={(item, index) => index.toString()}
                    renderItem={({ item }) => <ToolCard {...item} />}
                    numColumns={2}
                    contentContainerStyle={styles.list}
                />
            ) : (
                <Text style={styles.loadingText}>Loading tools...</Text>
            )}
        </View>
    );
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
        backgroundColor: "#f8f8f8",
    },
    list: {
        paddingBottom: 20,
    },
    loadingText: {
        textAlign: "center",
        fontSize: 16,
        marginTop: 20,
    },
});