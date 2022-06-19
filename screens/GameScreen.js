import { StyleSheet, View, Text } from 'react-native';

function GameScreen() {
    return (
        <View style={styles.screen}>
            <Text>Game Screen!</Text>
        </View>
    );
}

export default GameScreen;

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        padding: 24
    }
});