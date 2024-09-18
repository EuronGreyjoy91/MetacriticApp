import { View, Text, StyleSheet } from "react-native";
import { StatusBar } from "expo-status-bar";
import { A } from "@expo/html-elements";
import { YoutubeIcon } from "../../components/Icons/Icons";

export default function About() {
    return (
        <View style={styles.container}>
            <StatusBar style="light" />
            <Text style={styles.mainText}>Sobre el proyecto:</Text>

            <Text style={styles.text}>
                Proyecto de practica clonando la app creada por Midudev
            </Text>

            <Text style={styles.text}>
                <A href="https://www.youtube.com/watch?v=7iobxzd_2wY&t=5s">
                    <YoutubeIcon /> Link a Parte 1!
                </A>
            </Text>
            <Text style={styles.text}>
                <A href="https://www.youtube.com/watch?v=ZDoiMLqWz2E">
                    <YoutubeIcon /> Link a Parte 2!
                </A>
            </Text>
            <Text style={styles.text}>-----</Text>
            <Text style={styles.text}>
                lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea
            </Text>
            <Text style={styles.text}>
                lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea
            </Text>
            <Text style={styles.text}>
                lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea
            </Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#000",
        padding: 20,
        flex: 1,
    },
    mainText: {
        color: "#fff",
        marginBottom: 10,
        marginTop: 10,
        fontWeight: "bold",
        fontSize: 20,
    },
    text: {
        color: "#fff",
        marginBottom: 10,
    },
});
