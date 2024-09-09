import { ScrollView } from "react-native";
import { Game } from "./Game";
import GameCard from "./GameCard";

interface GamesListProps {
    games: Game[];
}

export default function GamesList({ games }: GamesListProps) {
    return (
        <ScrollView>
            {games.map((game) => (
                <GameCard key={game.slug} game={game} />
            ))}
        </ScrollView>
    );
}
