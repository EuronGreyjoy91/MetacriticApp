import { ActivityIndicator, View, StyleSheet } from 'react-native';

export default function LoadingIndicator(){
    return (
        <View style = {styles.container}>
            <ActivityIndicator color={"black"} size={"large"} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center"
    }
});