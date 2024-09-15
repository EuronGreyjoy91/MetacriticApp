import { View, Text, Image, StyleSheet, Pressable } from "react-native";

import { Game } from "./Game";
import ScoreLabel from "../ScoreLabel/ScoreLabel";
import { Link } from "expo-router";

interface GameCardProps {
    game: Game;
}

export default function GameCard({ game }: GameCardProps) {
    return (
        <Link href={`/${game.slug}`} asChild>
            <Pressable>
                <View style={styles.card}>
                    <Image
                        style={styles.image}
                        source={{ uri: game.image }}
                    ></Image>
                    <View style={styles.textContainer}>
                        <Text style={styles.title}>{game.title}</Text>
                        <View>
                            <ScoreLabel score={game.score} />
                            <Text style={styles.releaseDate}>
                                {game.releaseDate}
                            </Text>
                        </View>
                        <Text style={styles.description}>
                            {game.description.slice(0, 120)} ...
                        </Text>
                    </View>
                </View>
            </Pressable>
        </Link>
    );
}

const styles = StyleSheet.create({
    card: {
        marginBottom: 10,
        flexDirection: "row",
        backgroundColor: "#242424",
        padding: 15,
        marginLeft: 10,
        marginRight: 10,
        borderRadius: 10,
    },
    textContainer: {
        flexDirection: "column",
        marginLeft: 10,
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
    },
    description: {
        fontSize: 16,
        color: "#eee",
        fontStyle: "italic",
    },
    releaseDate: {
        fontWeight: "bold",
        color: "#ffee00",
    },
});
