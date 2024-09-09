import { useState, useEffect } from "react";
import { StyleSheet, View } from "react-native";

import { getLatestGames } from "../lib/metacritic";

import { Game } from "../components/GamesList/Game";
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
            <GamesList games={latestGames} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
    },
});
