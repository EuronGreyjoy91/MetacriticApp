import {
    View,
    Text,
    StyleSheet,
    Image,
    Pressable,
    Linking,
} from "react-native";

export default function Github() {
    const openGithub = () => {
        Linking.openURL("https://github.com/EuronGreyjoy91");
    };

    return (
        <View style={styles.container}>
            <Pressable onPress={openGithub} style={styles.pressable}>
                <Image
                    style={styles.image}
                    source={{
                        uri: "https://avatars.githubusercontent.com/u/52301500?v=4",
                    }}
                />
                <Text style={styles.text}>Ir a Github!</Text>
            </Pressable>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#000",
        flex: 1,
        alignItems: "center",
    },
    pressable: {
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
