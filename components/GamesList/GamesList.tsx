import { ScrollView, StyleSheet } from "react-native";
import { Game } from "../GameCard/Game";
import GameCard from "../GameCard/GameCard";

interface GamesListProps {
    games: Game[];
}

export default function GamesList({ games }: GamesListProps) {
    return (
        <ScrollView style={styles.container}>
            {games.map((game) => (
                <GameCard key={game.slug} game={game} />
            ))}
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        marginTop: 10,
    },
});
