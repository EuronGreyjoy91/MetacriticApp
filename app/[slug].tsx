import { useLocalSearchParams } from "expo-router";
import { useState, useEffect } from "react";

import { getGameDetails } from "../lib/metacritic";
import { GameInfo } from "../components/GameDetail/GameInfo";
import GameDetail from "../components/GameDetail/GameDetail";

export default function GameSlug() {
    const { slug } = useLocalSearchParams();
    const [game, setGame] = useState<GameInfo>();

    useEffect(() => {
        if (slug) {
            getGameDetails(slug).then(setGame);
        }
    }, [slug]);

    return game != undefined && <GameDetail game={game} />;
}
