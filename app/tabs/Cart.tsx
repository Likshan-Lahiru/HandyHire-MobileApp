import React from "react";
import { View, Text, Image, TouchableOpacity, ScrollView, StyleSheet } from "react-native";
import { Trash } from "lucide-react-native";

import { useNavigation } from "@react-navigation/native";
import {useCart} from "../components/context";

export default function Cart() {
    const { cart, updateQuantity, removeItem } = useCart();
    const navigation = useNavigation();
    const subtotal = cart.reduce((acc, item) => acc + item.rentPricePerDay * item.quantity, 0);

    function clearCart() {
        // Implement clear cart logic
    }

    return (
        <ScrollView contentContainerStyle={styles.container}>
            <View style={styles.card}>
                {cart.length > 0 ? (
                    <>
                        {cart.map((item) => (
                            <View key={item.id} style={styles.itemContainer}>
                                <Image source={{ uri: item.picture }} style={styles.image} />
                                <View style={styles.detailsContainer}>
                                    <Text style={styles.itemName}>{item.name}</Text>
                                    <Text style={styles.itemDescription}>Size: {item.description}</Text>
                                </View>
                                <View style={styles.quantityContainer}>
                                    <TouchableOpacity onPress={() => updateQuantity(item.id, -1)} style={styles.quantityButton}>
                                        <Text>-</Text>
                                    </TouchableOpacity>
                                    <Text style={styles.quantityText}>{item.quantity}</Text>
                                    <TouchableOpacity onPress={() => updateQuantity(item.id, 1)} style={styles.quantityButton}>
                                        <Text>+</Text>
                                    </TouchableOpacity>
                                </View>
                                <Text style={styles.price}>Rs: {item.rentPricePerDay * item.quantity}</Text>
                                <TouchableOpacity onPress={() => removeItem(item.id)}>
                                    <Trash color="red" />
                                </TouchableOpacity>
                            </View>
                        ))}
                        <View style={styles.subtotalContainer}>
                            <Text>Subtotal:</Text>
                            <Text>Rs: {subtotal.toFixed(2)}</Text>
                        </View>
                        <View style={styles.buttonContainer}>
                            <TouchableOpacity onPress={clearCart} style={styles.clearCartButton}>
                                <Text style={styles.buttonText}>Clear Cart</Text>
                            </TouchableOpacity>
                            <View style={styles.navigationButtons}>
                                <TouchableOpacity style={styles.checkoutButton}>
                                    <Text style={styles.buttonText}>Checkout</Text>
                                </TouchableOpacity>

                            </View>
                        </View>
                    </>
                ) : (
                    <Text style={styles.emptyCartText}>Your cart is empty.</Text>
                )}
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        padding: 16,
    },
    card: {
        backgroundColor: "white",
        padding: 16,
        borderRadius: 8,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
    },
    itemContainer: {
        flexDirection: "row",
        alignItems: "center",
        borderBottomWidth: 1,
        borderBottomColor: "#ddd",
        paddingVertical: 10,
    },
    image: {
        width: 50,
        height: 50,
        borderRadius: 5,
    },
    detailsContainer: {
        flex: 1,
        marginLeft: 10,
    },
    itemName: {
        fontWeight: "bold",
    },
    itemDescription: {
        color: "gray",
    },
    quantityContainer: {
        flexDirection: "row",
        alignItems: "center",
    },
    quantityButton: {
        paddingHorizontal: 10,
        paddingVertical: 5,
        backgroundColor: "#ddd",
        borderRadius: 5,
    },
    quantityText: {
        marginHorizontal: 10,
    },
    price: {
        fontWeight: "bold",
        marginLeft: 10,
    },
    subtotalContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginTop: 20,
        fontWeight: "bold",
    },
    buttonContainer: {
        marginTop: 20,
    },
    clearCartButton: {
        backgroundColor: "red",
        padding: 10,
        borderRadius: 5,
    },
    buttonText: {
        color: "white",
        textAlign: "center",
    },
    navigationButtons: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginTop: 10,
    },
    checkoutButton: {
        backgroundColor: "blue",
        padding: 10,
        borderRadius: 5,
    },
    continueShoppingButton: {
        backgroundColor: "#ddd",
        padding: 10,
        borderRadius: 5,
    },
    emptyCartText: {
        textAlign: "center",
        color: "gray",
    },
});
