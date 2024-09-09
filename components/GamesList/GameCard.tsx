import { View, Text, Image, StyleSheet } from "react-native";
import { Game } from "./Game";

interface GameCardProps {
    game: Game;
}

export default function GameCard({ game }: GameCardProps) {
    return (
        <View style={styles.card}>
            <Image style={styles.image} source={{ uri: game.image }}></Image>
            <View style={styles.textContainer}>
                <Text style={styles.title}>{game.title}</Text>
                <Text style={styles.score}>{game.score}</Text>
                <Text style={styles.description}>
                    {game.description.slice(0, 100)} ...
                </Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    card: {
        marginBottom: 30,
        flexDirection: "row",
        backgroundColor: "#09090b",
    },
    textContainer: {
        flexDirection: "column",
        flexShrink: 1,
    },
    image: {
        width: 107,
        height: 147,
        borderRadius: 10,
    },
    title: {
        fontSize: 20,
        fontWeight: "bold",
        color: "#fff",
        marginTop: 10,
    },
    description: {
        fontSize: 16,
        color: "#eee",
    },
    score: {
        fontSize: 20,
        fontWeight: "bold",
        color: "green",
        marginBottom: 10,
    },
});
