import { useLocalSearchParams } from "expo-router";
import { useState, useEffect } from "react";

import { getGameDetails } from "../lib/metacritic";
import { GameInfo } from "../components/GameDetail/GameInfo";
import GameDetail from "../components/GameDetail/GameDetail";
import LoadingIndicator from "../components/LoadingIndicator/LoadingIndicator";

export default function GameSlug() {
    const { slug } = useLocalSearchParams();
    const [game, setGame] = useState<GameInfo>();

    useEffect(() => {
        if (slug) {
            getGameDetails(slug).then(setGame);
        }
    }, [slug]);

    return game == null ? <LoadingIndicator /> : <GameDetail game={game} />;
}
