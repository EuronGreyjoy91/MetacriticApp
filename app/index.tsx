import { useState, useEffect } from "react";
import { StyleSheet, View } from "react-native";
import { StatusBar } from "expo-status-bar";

import { getLatestGames } from "../lib/metacritic";

import { Game } from "../components/GameCard/Game";
import GamesList from "../components/GamesList/GamesList";

export default function IndexPage() {
    const [latestGames, setLatestGames] = useState<Game[]>([]);

    useEffect(() => {
        getLatestGames().then((response) => {
            setLatestGames(response);
        });
    }, []);

    return (
        <View style={styles.container}>
            <StatusBar style="light" />
            <GamesList games={latestGames} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        display: "flex",
        alignItems: "center",
        backgroundColor: "#000",
    },
});
