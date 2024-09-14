import { Stack, useLocalSearchParams } from "expo-router";
import { Text, View, StyleSheet, Image } from "react-native";

import { useState, useEffect } from "react";

import { getGameDetails } from "../lib/metacritic";
import { GameInfo } from "./GameInfo";
import ScoreLabel from "../components/ScoreLabel/ScoreLabel";

export default function GameSlug() {
    const { slug } = useLocalSearchParams();
    const [game, setGame] = useState<GameInfo>();

    useEffect(() => {
        if (slug) {
            getGameDetails(slug).then(setGame);
        }
    }, [slug]);

    return (
        game != undefined && (
            <View style={styles.container}>
                <Stack.Screen
                    options={{
                        headerStyle: { backgroundColor: "#ffee00" },
                        headerTintColor: "black",
                        headerTitle: "Game info",
                        headerLeft: null,
                        headerRight: null,
                    }}
                />
                <Image style={styles.image} source={{ uri: game.img }}></Image>
                <ScoreLabel score={game.score}></ScoreLabel>
                <Text style={styles.title}>{game.title}</Text>
                <Text style={styles.description}>{game.description}</Text>
            </View>
        )
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#000",
        padding: 20,
        flex: 1,
        alignItems: "center",
    },
    image: {
        width: 214,
        height: 294,
        borderRadius: 10,
        marginBottom: 15,
        marginTop: 20,
    },
    title: {
        marginTop: 10,
        color: "#fff",
        fontSize: 20,
        fontWeight: "bold",
        marginBottom: 10,
    },
    description: {
        marginTop: 10,
        color: "#fff",
    },
});
