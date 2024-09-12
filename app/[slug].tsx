import { Stack, useLocalSearchParams } from "expo-router";
import { Text, View, StyleSheet } from "react-native";

import { useState, useEffect } from "react";

import { getGameDetails } from "../lib/metacritic";
import { GameInfo } from "./GameInfo";


export default function GameSlug(){
    const { slug } = useLocalSearchParams();
    const [game, setGame] = useState<GameInfo>();

    useEffect(() => {
        getGameDetails(slug).then((response) => {
            setGame(response);
            console.log(game)
        });
    }, []);

    return (
        <View style={styles.container}>
            <Stack.Screen
                options={{
                    headerStyle: { backgroundColor: "#ffee00" },
                    headerTintColor: "black",
                    headerTitle: "The Legend of Zelda: Breath of the Wild",
                }}
            />
            <Text style={styles.text}>{slug}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#000",
        padding: 10,
        flex: 1,
    },
    mainText: {
        color: "#fff",
        marginBottom: 10,
        marginTop: 10,
        fontWeight: "bold",
    },
    text: {
        color: "#fff",
        marginBottom: 10,
    },
});