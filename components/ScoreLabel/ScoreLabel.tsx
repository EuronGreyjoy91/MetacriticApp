import { Text, StyleSheet, View } from "react-native";

interface ScoreLabelProps {
    score: number;
}

export default function ScoreLabel({score}: ScoreLabelProps){
    return (
        <View style={score > 97 ? styles.greenContainer : styles.yellowContainer}>
            <Text style={styles.score}>{score}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    greenContainer:{
        backgroundColor: "green",
        width: 25,
        height: 25,
        borderRadius: 25,
        alignItems: "center",
        justifyContent: "center"
    },
    yellowContainer:{
        backgroundColor: "orange",
        width: 25,
        height: 25,
        borderRadius: 25,
        marginBottom: 3,
        alignItems: "center",
        justifyContent: "center"
    },
    score: {
        fontWeight: "bold",
        color: "white",
        fontSize: 16
    },
});
