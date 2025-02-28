import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { useState } from "react";
import { useUser } from "@clerk/clerk-expo";
import { CartProvider } from "./context";
import ToolModel from "../model/ToolModel";

const ToolCard = ({ id, picture, name, description, rentPricePerDay, remainingCount }: ToolModel) => {
    const { isSignedIn } = useUser();

    const [isFavorite, setIsFavorite] = useState(false);

    // Convert base64 string to image format
    const imageSource = `data:image/png;base64,${picture}`;

    return (
        <CartProvider>
            <View style={styles.card}>
                <TouchableOpacity
                    style={styles.favoriteButton}
                    onPress={() => setIsFavorite(!isFavorite)}
                >
                    <AntDesign
                        name={isFavorite ? "heart" : "hearto"}
                        size={20}
                        color={isFavorite ? "red" : "gray"}
                    />
                </TouchableOpacity>

                {/* Display base64 image */}
                <Image source={{ uri: imageSource }} style={styles.image} />

                <View style={styles.textContainer}>
                    <Text style={styles.title}>{name}</Text>
                    <Text style={styles.description}>{description}</Text>
                    <Text style={styles.price}>RS. {rentPricePerDay.toFixed(2)}</Text>
                    <Text style={[styles.stock]}>
                        {/* Display remaining count or stock availability */}
                    </Text>
                    <TouchableOpacity>
                        <Text style={styles.buttonText}>
                            {isSignedIn ? "Add to Cart" : "Sign in to Add"}
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
        </CartProvider>
    );
};

const styles = StyleSheet.create({
    card: {
        backgroundColor: "white",
        borderRadius: 10,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        padding: 15,
        alignItems: "center",
        width: 10,
        margin: 10,
        position: "relative",
    },
    favoriteButton: {
        position: "absolute",
        top: 10,
        right: 10,
    },
    image: {
        width: 120,
        height: 120,
        resizeMode: "contain",
    },
    textContainer: {
        alignItems: "center",
        marginTop: 10,
    },
    title: {
        fontSize: 16,
        fontWeight: "bold",
        color: "#333",
    },
    description: {
        fontSize: 12,
        color: "#777",
        textAlign: "center",
    },
    price: {
        fontSize: 14,
        fontWeight: "bold",
        color: "#007bff",
        marginTop: 5,
    },
    stock: {
        fontSize: 12,
        fontWeight: "bold",
        marginTop: 5,
    },
    buttonText: {
        color: "white",
        fontSize: 14,
        fontWeight: "bold",
    },
});

export default ToolCard;
