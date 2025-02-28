/*
import React, { useState } from "react";
import { useRouter } from "expo-router";
import { Button, StyleSheet, Text, TextInput, View, Alert } from "react-native";
import {ClerkProvider} from "@clerk/clerk-expo";

const PUBLISHABLE_KEY = "pk_test_aW5maW5pdGUtcmFiYml0LTIwLmNsZXJrLmFjY291bnRzLmRldiQ"

export default function LoginScreen() {
    const router = useRouter();
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    function handleLogin() {
       /!* if (username.trim() === "User" && password.trim() === "user") {
            router.replace("/tabs"); // Redirect to bottom tab navigation
        } else {
            setError("Invalid username or password");
            Alert.alert("Login Failed", "Incorrect username or password");
        }*!/
        router.replace("/tabs"); // Redirect to bottom tab navigation
    }

    return (

        <View style={styles.container}>
            <Text style={styles.loginText}>Login</Text>

            <TextInput
                style={styles.textFields}
                placeholder="Username"
                autoCapitalize="none"
                onChangeText={setUsername}
            />

            <TextInput
                style={styles.textFields}
                placeholder="Password"
                secureTextEntry
                autoCapitalize="none"
                onChangeText={setPassword}
            />

            {error ? <Text style={styles.errorText}>{error}</Text> : null}

            <Button
                onPress={handleLogin}
                title="Login"
                disabled={!username || !password} // Disable if empty
            />
        </View>

    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        padding: 20,
    },
    loginText: {
        fontSize: 24,
        fontWeight: "bold",
        marginBottom: 20,
        textAlign: "center",
    },
    textFields: {
        borderWidth: 1,
        padding: 12,
        marginBottom: 10,
        borderRadius: 8,
    },
    errorText: {
        color: "red",
        textAlign: "center",
        marginBottom: 10,
    },
});
/!*import { ClerkProvider, SignedIn, SignedOut } from "@clerk/clerk-expo";
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from "react-native";
import { useOAuth } from "@clerk/clerk-expo";
import { useRouter } from "expo-router";
import { FontAwesome } from "@expo/vector-icons";


const PUBLISHABLE_KEY = "pk_test_aW5maW5pdGUtcmFiYml0LTIwLmNsZXJrLmFjY291bnRzLmRldiQ"


export default function App() {
    return (
        <ClerkProvider publishableKey={PUBLISHABLE_KEY}>
            <View style={styles.container}>
                <SignedIn>
                    <Text>Welcome! You are signed in. 🎉</Text>
                </SignedIn>

                <SignedOut>
                    <View style={styles.card}>
                        <Text style={styles.title}>Sign in to HANDY-HIRE</Text>
                        <Text style={styles.subtitle}>Welcome back! Please sign in to continue</Text>

                        <View style={styles.oauthContainer}>
                            <OAuthButton provider="facebook" icon="facebook" color="#3b5998" />
                            <OAuthButton provider="github" icon="github" color="#333" />
                            <OAuthButton provider="google" icon="google" color="#db4437" />
                        </View>

                        <Text style={styles.orText}>or</Text>

                        <TextInput style={styles.input} placeholder="Enter your email address" />
                        <TouchableOpacity style={styles.button}>
                            <Text style={styles.buttonText}>Continue</Text>
                        </TouchableOpacity>

                        <Text style={styles.footerText}>Don’t have an account? <Text style={styles.signUpText}>Sign up</Text></Text>
                        <Text style={styles.devMode}>Secured by Clerk | Development mode</Text>
                    </View>
                </SignedOut>
            </View>
        </ClerkProvider>
    );
}

const OAuthButton = ({ provider, icon, color }) => {
    const { startOAuthFlow } = useOAuth({ strategy: `oauth_${provider}` });
    const router = useRouter();

    const handleSignIn = async () => {
        try {
            const { createdSessionId } = await startOAuthFlow();
            if (createdSessionId) {
                router.replace("/tabs");
                Alert.alert("Success", "You are signed in! 🎉");
            }
        } catch (err) {
            Alert.alert("Error", "Sign-in failed. Please try again.");
        }
    };

    return (
        <TouchableOpacity style={[styles.oauthButton, { backgroundColor: color }]} onPress={handleSignIn}>
            <FontAwesome name={icon} size={24} color="#fff" />
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#f5f5f5",
    },
    card: {
        backgroundColor: "#fff",
        padding: 20,
        borderRadius: 10,
        shadowColor: "#000",
        shadowOpacity: 0.1,
        shadowRadius: 10,
        width: 350,
        alignItems: "center",
    },
    title: {
        fontSize: 20,
        fontWeight: "bold",
    },
    subtitle: {
        color: "#555",
        marginBottom: 15,
    },
    oauthContainer: {
        flexDirection: "row",
        justifyContent: "space-around",
        width: "100%",
        marginBottom: 10,
    },
    oauthButton: {
        padding: 10,
        borderRadius: 5,
        width: 50,
        justifyContent: "center",
        alignItems: "center",
    },
    orText: {
        marginVertical: 10,
        color: "#777",
    },
    input: {
        width: "100%",
        padding: 10,
        borderWidth: 1,
        borderColor: "#ccc",
        borderRadius: 5,
        marginBottom: 10,
    },
    button: {
        backgroundColor: "#333",
        padding: 10,
        borderRadius: 5,
        width: "100%",
        alignItems: "center",
    },
    buttonText: {
        color: "#fff",
        fontWeight: "bold",
    },
    footerText: {
        marginTop: 15,
        color: "#555",
    },
    signUpText: {
        color: "blue",
    },
    devMode: {
        marginTop: 10,
        fontSize: 12,
        color: "orange",
    },
});*!/

*/
import { SignedIn, SignedOut, useOAuth } from "@clerk/clerk-expo";
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from "react-native";
import { useRouter } from "expo-router";
import { FontAwesome } from "@expo/vector-icons";

export default function App() {
    return (
        <View style={styles.container}>
            <SignedIn>
                <Text>Welcome! You are signed in. 🎉</Text>
            </SignedIn>

            <SignedOut>
                <View style={styles.card}>
                    <Text style={styles.title}>Sign in to HANDY-HIRE</Text>
                    <Text style={styles.subtitle}>Welcome back! Please sign in to continue</Text>

                    <View style={styles.oauthContainer}>
                        <OAuthButton provider="facebook" icon="facebook" color="#3b5998" />
                        <OAuthButton provider="github" icon="github" color="#333" />
                        <OAuthButton provider="google" icon="google" color="#db4437" />
                    </View>

                    <Text style={styles.orText}>or</Text>

                    <TextInput style={styles.input} placeholder="Enter your email address" />
                    <TouchableOpacity style={styles.button}>
                        <Text style={styles.buttonText}>Continue</Text>
                    </TouchableOpacity>

                    <Text style={styles.footerText}>
                        Don’t have an account? <Text style={styles.signUpText}>Sign up</Text>
                    </Text>
                    <Text style={styles.devMode}>Secured by Clerk | Development mode</Text>
                </View>
            </SignedOut>
        </View>
    );
}

const OAuthButton = ({ provider, icon, color }) => {
    const { startOAuthFlow } = useOAuth({ strategy: `oauth_${provider}` });
    const router = useRouter();

    const handleSignIn = async () => {
        try {
            const { createdSessionId } = await startOAuthFlow();
            if (createdSessionId) {
                router.replace("/tabs");
                Alert.alert("Success", "You are signed in! 🎉");
            }
        } catch (err) {
            Alert.alert("Error", "Sign-in failed. Please try again.");
        }
    };

    return (
        <TouchableOpacity style={[styles.oauthButton, { backgroundColor: color }]} onPress={handleSignIn}>
            <FontAwesome name={icon} size={24} color="#fff" />
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#f5f5f5",
    },
    card: {
        backgroundColor: "#fff",
        padding: 20,
        borderRadius: 10,
        shadowColor: "#000",
        shadowOpacity: 0.1,
        shadowRadius: 10,
        width: 350,
        alignItems: "center",
    },
    title: {
        fontSize: 20,
        fontWeight: "bold",
    },
    subtitle: {
        color: "#555",
        marginBottom: 15,
    },
    oauthContainer: {
        flexDirection: "row",
        justifyContent: "space-around",
        width: "100%",
        marginBottom: 10,
    },
    oauthButton: {
        padding: 10,
        borderRadius: 5,
        width: 50,
        justifyContent: "center",
        alignItems: "center",
    },
    orText: {
        marginVertical: 10,
        color: "#777",
    },
    input: {
        width: "100%",
        padding: 10,
        borderWidth: 1,
        borderColor: "#ccc",
        borderRadius: 5,
        marginBottom: 10,
    },
    button: {
        backgroundColor: "#333",
        padding: 10,
        borderRadius: 5,
        width: "100%",
        alignItems: "center",
    },
    buttonText: {
        color: "#fff",
        fontWeight: "bold",
    },
    footerText: {
        marginTop: 15,
        color: "#555",
    },
    signUpText: {
        color: "blue",
    },
    devMode: {
        marginTop: 10,
        fontSize: 12,
        color: "orange",
    },
});
