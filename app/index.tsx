import { useState, useEffect } from "react";
import { StyleSheet, View, ScrollView } from "react-native";
import { StatusBar } from "expo-status-bar";

import { getLatestGames } from "../lib/metacritic";

import { Game } from "../components/GameCard/Game";
import GameCard from "../components/GameCard/GameCard";
import LoadingIndicator from "../components/LoadingIndicator/LoadingIndicator";

export default function Index() {
    const [latestGames, setLatestGames] = useState<Game[]>([]);

    useEffect(() => {
        getLatestGames().then((response) => {
            setLatestGames(response);
        });
    }, []);

    return (
        latestGames == null
        ? <LoadingIndicator/>
        : <View style={styles.container}>
            <StatusBar style="light" />
            <ScrollView contentContainerStyle={{flex: 1, marginTop: 10}}>
                {latestGames.map((game) => (
                    <GameCard key={game.slug} game={game} />
                ))}
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#000",
        flex: 1
    }
});
