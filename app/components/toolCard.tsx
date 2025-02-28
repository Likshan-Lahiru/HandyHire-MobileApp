import React, { useState } from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { useCart } from "./context";

const ToolCard = ({ id, picture, name, description, rentPricePerDay, remainingCount }) => {
    const [remainingStock, setRemainingStock] = useState(remainingCount);
    const { addToCart } = useCart();
    const [isFavorite, setIsFavorite] = useState(false);

    const handleAddToCart = () => {
        if (remainingStock > 0) {
            setRemainingStock((prevStock) => prevStock - 1);
            addToCart({ id, name, rentPricePerDay, description, quantity: 1, picture });
        }
    };

    return (
        <View style={styles.card}>
            <TouchableOpacity style={styles.favoriteButton} onPress={() => setIsFavorite(!isFavorite)}>
                <AntDesign name={isFavorite ? "heart" : "hearto"} size={20} color={isFavorite ? "red" : "gray"} />
            </TouchableOpacity>

            <Image source={{ uri: picture }} style={styles.image} />

            <View style={styles.textContainer}>
                <Text style={styles.title}>{name}</Text>
                <Text style={styles.description}>{description}</Text>
                <Text style={styles.price}>RS. {rentPricePerDay.toFixed(2)}</Text>
                <Text style={[styles.stock, remainingStock === 0 ? styles.outOfStock : styles.inStock]}>
                    {remainingStock > 0 ? `Remaining: ${remainingStock}` : "Out of Stock"}
                </Text>
                <TouchableOpacity
                    style={[styles.button, remainingStock === 0 ? styles.disabledButton : styles.activeButton]}
                    onPress={handleAddToCart}
                    disabled={remainingStock === 0}
                >
                    <Text style={styles.buttonText}>Add to Cart</Text>
                </TouchableOpacity>
            </View>
        </View>
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
        width: 170,
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
    inStock: {
        color: "green",
    },
    outOfStock: {
        color: "red",
    },
    button: {
        marginTop: 10,
        paddingVertical: 8,
        paddingHorizontal: 15,
        borderRadius: 5,
    },
    activeButton: {
        backgroundColor: "#007bff",
    },
    disabledButton: {
        backgroundColor: "gray",
    },
    buttonText: {
        color: "white",
        fontSize: 14,
        fontWeight: "bold",
    },
});

export default ToolCard;
