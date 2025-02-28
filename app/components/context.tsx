import { createContext, useContext, useState, useEffect, ReactNode } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

interface CartItem {
    id: number;
    name: string;
    rentPricePerDay: number;
    description: string;
    quantity: number;
    picture: string;
}

interface CartContextType {
    cart: CartItem[];
    addToCart: (item: CartItem) => void;
    updateQuantity: (id: number, delta: number) => void;
    removeItem: (id: number) => void;
    clearCart: () => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export function useCart() {
    const context = useContext(CartContext);
    if (!context) {
        throw new Error("useCart must be used within a CartProvider");
    }
    return context;
}

export function CartProvider({ children }: { children: ReactNode }) {
    const [cart, setCart] = useState<CartItem[]>([]);


    useEffect(() => {
        const loadCart = async () => {
            try {
                const savedCart = await AsyncStorage.getItem("cart");
                if (savedCart) {
                    setCart(JSON.parse(savedCart));
                }
            } catch (error) {
                console.error("Failed to load cart", error);
            }
        };

        loadCart();
    }, []);

    useEffect(() => {
        const saveCartToStorage = async () => {
            try {
                await AsyncStorage.setItem("cart", JSON.stringify(cart));
            } catch (error) {
                console.error("Failed to save cart to storage", error);
            }
        };

        if (cart.length > 0) {
            saveCartToStorage();
        }
    }, [cart]);

    const addToCart = (item: CartItem) => {
        setCart((prevCart) => {
            const existingItem = prevCart.find((cartItem) => cartItem.id === item.id);
            if (existingItem) {
                return prevCart.map((cartItem) =>
                    cartItem.id === item.id ? { ...cartItem, quantity: cartItem.quantity + 1 } : cartItem
                );
            } else {
                return [...prevCart, { ...item, quantity: 1 }];
            }
        });
    };

    const updateQuantity = (id: number, delta: number) => {
        setCart((prevCart) =>
            prevCart.map((item) =>
                item.id === id ? { ...item, quantity: Math.max(1, item.quantity + delta) } : item
            )
        );
    };

    const removeItem = (id: number) => {
        setCart((prevCart) => prevCart.filter((item) => item.id !== id));
    };

    const clearCart = () => {
        setCart([]);
        AsyncStorage.removeItem("cart");
    };

    return (
        <CartContext.Provider value={{ cart, addToCart, updateQuantity, removeItem, clearCart }}>
            {children}
        </CartContext.Provider>
    );
}
