// // import { addDoc, collection } from "firebase/firestore";
// import  addUser from "../function/user";
// import { useState } from "react";
// import {
//     Alert,
//     KeyboardAvoidingView,
//     Platform,
//     Pressable,
//     SafeAreaView,
//     ScrollView,
//     StyleSheet,
//     Text,
//     TextInput,
//     View,
// } from "react-native";

// export default function Index() {
// 	const [name, setName] = useState("");
// 	const [email, setEmail] = useState("");
// 	const [age, setAge] = useState("");
// 	const [isSubmitting, setIsSubmitting] = useState(false);
// 	const [statusMessage, setStatusMessage] = useState("");

// 	const handleSubmit = async () => {
// 		const trimmedName = name.trim();
// 		const trimmedEmail = email.trim();
// 		const trimmedAge = age.trim();

// 		if (!trimmedName || !trimmedEmail || !trimmedAge) {
// 			Alert.alert("Missing information", "Please fill in all fields before saving.");
// 			return;
// 		}

// 		setIsSubmitting(true);
// 		setStatusMessage("");

// 		try {
//             await addUser({
//                 name: trimmedName,
//                 email: trimmedEmail,
//                 age: Number(trimmedAge),
//                 createdAt: new Date().toISOString()
//             });
// 			setName("");
// 			setEmail("");
// 			setAge("");
// 			setStatusMessage("User saved successfully.");
// 		} catch (error) {
// 			console.error("Error adding document: ", error);
// 			Alert.alert("Save failed", "We could not save this record right now.");
// 		} finally {
// 			setIsSubmitting(false);
// 		}
// 	};

// 	return (
// 		<SafeAreaView style={styles.safeArea}>
// 			<KeyboardAvoidingView
// 				style={styles.flex}
// 				behavior={Platform.OS === "ios" ? "padding" : undefined}
// 			>
// 				<ScrollView contentContainerStyle={styles.content} keyboardShouldPersistTaps="handled">
// 					<View style={styles.header}>
// 						<Text style={styles.kicker}>User Form</Text>
// 						<Text style={styles.title}>Add a new user</Text>
// 						<Text style={styles.subtitle}>Fill out the fields below and save the record to Firestore.</Text>
// 					</View>

// 					<View style={styles.card}>
// 						<Text style={styles.label}>Full name</Text>
// 						<TextInput
// 							style={styles.input}
// 							placeholder="John Doe"
// 							placeholderTextColor="#8B93A7"
// 							value={name}
// 							onChangeText={setName}
// 							autoCapitalize="words"
// 							returnKeyType="next"
// 						/>

// 						<Text style={styles.label}>Email</Text>
// 						<TextInput
// 							style={styles.input}
// 							placeholder="john@example.com"
// 							placeholderTextColor="#8B93A7"
// 							value={email}
// 							onChangeText={setEmail}
// 							keyboardType="email-address"
// 							autoCapitalize="none"
// 							returnKeyType="next"
// 						/>

// 						<Text style={styles.label}>Age</Text>
// 						<TextInput
// 							style={styles.input}
// 							placeholder="24"
// 							placeholderTextColor="#8B93A7"
// 							value={age}
// 							onChangeText={setAge}
// 							keyboardType="number-pad"
// 							returnKeyType="done"
// 						/>

// 						<Pressable
// 							style={({ pressed }) => [styles.button, pressed && styles.buttonPressed, isSubmitting && styles.buttonDisabled]}
// 							onPress={handleSubmit}
// 							disabled={isSubmitting}
// 						>
// 							<Text style={styles.buttonText}>{isSubmitting ? "Saving..." : "Save user"}</Text>
// 						</Pressable>

// 						{statusMessage ? <Text style={styles.successText}>{statusMessage}</Text> : null}
// 					</View>
// 				</ScrollView>
// 			</KeyboardAvoidingView>
// 		</SafeAreaView>
// 	);
// }

// const styles = StyleSheet.create({
// 	safeArea: {
// 		flex: 1,
// 		backgroundColor: "#EEF2FF",
// 	},
// 	flex: {
// 		flex: 1,
// 	},
// 	content: {
// 		flexGrow: 1,
// 		paddingHorizontal: 20,
// 		paddingVertical: 24,
// 		justifyContent: "center",
// 	},
// 	header: {
// 		marginBottom: 20,
// 	},
// 	kicker: {
// 		fontSize: 13,
// 		fontWeight: "700",
// 		letterSpacing: 1.2,
// 		textTransform: "uppercase",
// 		color: "#4F46E5",
// 		marginBottom: 8,
// 	},
// 	title: {
// 		fontSize: 32,
// 		fontWeight: "800",
// 		color: "#111827",
// 		marginBottom: 10,
// 	},
// 	subtitle: {
// 		fontSize: 15,
// 		lineHeight: 22,
// 		color: "#4B5563",
// 	},
// 	card: {
// 		backgroundColor: "#FFFFFF",
// 		borderRadius: 24,
// 		padding: 20,
// 		shadowColor: "#0F172A",
// 		shadowOpacity: 0.08,
// 		shadowRadius: 20,
// 		shadowOffset: {
// 			width: 0,
// 			height: 10,
// 		},
// 		elevation: 4,
// 	},
// 	label: {
// 		fontSize: 14,
// 		fontWeight: "700",
// 		color: "#1F2937",
// 		marginBottom: 8,
// 		marginTop: 14,
// 	},
// 	input: {
// 		borderWidth: 1,
// 		borderColor: "#D1D5DB",
// 		backgroundColor: "#F9FAFB",
// 		borderRadius: 16,
// 		paddingHorizontal: 16,
// 		paddingVertical: 14,
// 		fontSize: 16,
// 		color: "#111827",
// 	},
// 	button: {
// 		marginTop: 22,
// 		backgroundColor: "#4F46E5",
// 		borderRadius: 16,
// 		paddingVertical: 16,
// 		alignItems: "center",
// 	},
// 	buttonPressed: {
// 		opacity: 0.9,
// 		transform: [{ scale: 0.99 }],
// 	},
// 	buttonDisabled: {
// 		opacity: 0.7,
// 	},
// 	buttonText: {
// 		color: "#FFFFFF",
// 		fontSize: 16,
// 		fontWeight: "800",
// 	},
// 	successText: {
// 		marginTop: 14,
// 		color: "#047857",
// 		fontSize: 14,
// 		fontWeight: "600",
// 		textAlign: "center",
// 	},
// });