import { View, Text, StyleSheet, FlatList } from "react-native";
import { useState, useEffect } from "react";
import axios from "axios";
import ToolCard from "../components/toolCard";

export default function HomeScreen() {
    const [tools, setTools] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchTools = async () => {
            try {
                const response = await axios.get("http://localhost:8000/api/tools/get-all");
                setTools(response.data);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchTools();
    }, []);

    return (
        <View style={styles.container}>
            {loading ? (
                <Text style={styles.loadingText}>Loading tools...</Text>
            ) : error ? (
                <Text style={styles.loadingText}>Error: {error}</Text>
            ) : tools.length > 0 ? (
                <FlatList
                    data={tools}
                    keyExtractor={(item, index) => index.toString()}
                    renderItem={({ item }) => <ToolCard {...item} />}
                    numColumns={2}
                    contentContainerStyle={styles.list}
                />
            ) : (
                <Text style={styles.loadingText}>No tools available</Text>
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
