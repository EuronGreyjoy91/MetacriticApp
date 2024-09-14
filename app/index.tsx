import { useState, useEffect } from "react";
import { StyleSheet, View } from "react-native";

import { getLatestGames } from "../lib/metacritic";

import { Game } from "../components/GameCard/Game";
import GamesList from "../components/GamesList/GamesList";

import { StatusBar } from "expo-status-bar";

export default function IndexPage() {
    const [latestGames, setLatestGames] = useState<Game[]>([]);

    useEffect(() => {
        getLatestGames().then((response) => {
            setLatestGames(response);
        });
    }, []);

    return (
        <View style={styles.container}>
            <GamesList games={latestGames} />
            <StatusBar style="light" />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        backgroundColor: "#000",
    },
});
