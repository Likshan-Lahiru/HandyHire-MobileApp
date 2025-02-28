import React, { useState } from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity, Modal, TextInput } from "react-native";
import { useRouter } from "expo-router";  // Import useRouter

export default function ProfileScreen() {
    const router = useRouter();  // Initialize router

    const [profile, setProfile] = useState({
        avatar: "https://i.ibb.co/7xjkwXPy/IMG-5200.jpg",
        name: "Likshan Lahiru",
        address: "457.A.Bandaragama,kaluthara",
        contact: "+94 774703170",
        idNumber: "ID-987654321",
    });

    const [isModalVisible, setModalVisible] = useState(false);
    const [editedProfile, setEditedProfile] = useState({ ...profile });

    const handleSaveProfile = () => {
        setProfile(editedProfile);
        setModalVisible(false);
    };

    const handleLogout = () => {

        router.replace("/");
    };

    return (
        <View style={styles.container}>
            <Image source={{ uri: profile.avatar }} style={styles.avatar} />

            <View style={styles.infoContainer}>
                <Text style={styles.label}>Name:</Text>
                <Text style={styles.value}>{profile.name}</Text>

                <Text style={styles.label}>Address:</Text>
                <Text style={styles.value}>{profile.address}</Text>

                <Text style={styles.label}>Contact:</Text>
                <Text style={styles.value}>{profile.contact}</Text>

                <Text style={styles.label}>ID Number:</Text>
                <Text style={styles.value}>{profile.idNumber}</Text>
            </View>

            <TouchableOpacity style={styles.editButton} onPress={() => setModalVisible(true)}>
                <Text style={styles.buttonText}>Edit Profile</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.logoutButton} onPress={handleLogout}>
                <Text style={styles.buttonText}>Log Out</Text>
            </TouchableOpacity>

            <Modal animationType="slide" transparent={true} visible={isModalVisible}>
                <View style={styles.modalContainer}>
                    <View style={styles.modalContent}>
                        <Text style={styles.modalTitle}>Edit Profile</Text>

                        <TextInput style={styles.input} value={editedProfile.name} onChangeText={(text) => setEditedProfile({ ...editedProfile, name: text })} placeholder="Name" />
                        <TextInput style={styles.input} value={editedProfile.address} onChangeText={(text) => setEditedProfile({ ...editedProfile, address: text })} placeholder="Address" />
                        <TextInput style={styles.input} value={editedProfile.contact} onChangeText={(text) => setEditedProfile({ ...editedProfile, contact: text })} placeholder="Contact" />
                        <TextInput style={styles.input} value={editedProfile.idNumber} onChangeText={(text) => setEditedProfile({ ...editedProfile, idNumber: text })} placeholder="ID Number" />

                        <TouchableOpacity style={styles.modalButton} onPress={handleSaveProfile}>
                            <Text style={styles.buttonText}>Save</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.modalClose} onPress={() => setModalVisible(false)}>
                            <Text style={styles.closeText}>Cancel</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </Modal>
        </View>
    );
}

const styles = StyleSheet.create({
    container: { flex: 1, alignItems: "center", backgroundColor: "#f5f5f5", paddingTop: 50 },
    avatar: { width: 120, height: 120, borderRadius: 60, marginBottom: 20 },
    infoContainer: { width: "90%", backgroundColor: "#fff", padding: 20, borderRadius: 10, elevation: 2 },
    label: { fontSize: 16, fontWeight: "bold", color: "#555", marginTop: 10 },
    value: { fontSize: 16, color: "#333", marginBottom: 5 },

    editButton: { backgroundColor: "#007AFF", padding: 12, borderRadius: 5, marginTop: 20, width: "90%", alignItems: "center" },
    logoutButton: { backgroundColor: "#FF3B30", padding: 12, borderRadius: 5, marginTop: 10, width: "90%", alignItems: "center" },
    buttonText: { color: "white", fontSize: 16, fontWeight: "bold" },

    modalContainer: { flex: 1, justifyContent: "center", alignItems: "center", backgroundColor: "rgba(0,0,0,0.5)" },
    modalContent: { backgroundColor: "white", padding: 20, width: 300, borderRadius: 10, alignItems: "center" },
    modalTitle: { fontSize: 18, fontWeight: "bold", marginBottom: 10 },
    input: { borderWidth: 1, borderColor: "#ccc", borderRadius: 5, width: "100%", padding: 10, marginBottom: 10 },
    modalButton: { backgroundColor: "#007AFF", padding: 12, borderRadius: 5, width: "100%", alignItems: "center", marginBottom: 5 },
    modalClose: { marginTop: 10 },
    closeText: { color: "#007AFF", fontSize: 16, fontWeight: "bold" },
});
