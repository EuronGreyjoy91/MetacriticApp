import { Stack } from "expo-router";
import { Text, View, StyleSheet, Image, ScrollView } from "react-native";
import { StatusBar } from "expo-status-bar";

import { GameInfo } from "./GameInfo";
import ScoreLabel from "../ScoreLabel/ScoreLabel";

interface GameDetailProps {
    game: GameInfo;
}

export default function GameDetail({ game }: GameDetailProps) {
    return (
        <View style={styles.container}>
            <StatusBar style="dark" />
            <ScrollView contentContainerStyle={{ alignItems: "center" }}>
                <Stack.Screen
                    options={{
                        headerStyle: { backgroundColor: "#ffee00" },
                        headerTintColor: "black",
                        headerTitle: game.title,
                        headerLeft: null,
                        headerRight: null,
                    }}
                />
                <Image style={styles.image} source={{ uri: game.img }}></Image>
                <ScoreLabel score={game.score}></ScoreLabel>
                <Text style={styles.title}>{game.title}</Text>
                <Text style={styles.description}>{game.description}</Text>
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#000",
        padding: 20,
        flex: 1,
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
