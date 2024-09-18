import { View, Text, StyleSheet, Image } from "react-native";
import { A } from "@expo/html-elements";

export default function Github() {
    return (
        <View style={styles.container}>
            <Image
                style={styles.image}
                source={{
                    uri: "https://avatars.githubusercontent.com/u/52301500?v=4",
                }}
            ></Image>

            <Text style={styles.text}>
                <A href="https://github.com/EuronGreyjoy91">Ir a Github!</A>
            </Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#000",
        flex: 1,
        alignItems: "center",
    },
    text: {
        marginTop: 20,
        color: "#fff",
        fontWeight: "bold",
        fontSize: 30,
    },
    image: {
        marginTop: 20,
        width: 300,
        height: 300,
        borderRadius: 150,
    },
});
