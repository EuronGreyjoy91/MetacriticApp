import { useState, useEffect } from "react";
import { StyleSheet, View, FlatList } from "react-native";

import { getLatestGames } from "../../lib/metacritic";

import { Game } from "../../components/GameCard/Game";
import GameCard from "../../components/GameCard/GameCard";
import LoadingIndicator from "../../components/LoadingIndicator/LoadingIndicator";
import WhiteStatusBar from "../../components/WhiteStatusBar/WhiteStatusBar";

export default function Home() {
    const [latestGames, setLatestGames] = useState<Game[]>([]);

    useEffect(() => {
        getLatestGames().then((response) => {
            setLatestGames(response);
        });
    }, []);

    return latestGames.length == 0 ? (
        <LoadingIndicator />
    ) : (
        <>
            <WhiteStatusBar />
            <View style={styles.container}>
                <FlatList
                    style={styles.list}
                    data={latestGames}
                    keyExtractor={(game) => game.slug}
                    renderItem={({ item }) => <GameCard game={item}></GameCard>}
                />
            </View>
        </>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#000",
        flex: 1,
    },
    list: {
        marginTop: 10,
    },
});
