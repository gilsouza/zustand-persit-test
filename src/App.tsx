/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from "react";
import {
    SafeAreaView,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    TouchableHighlight,
    useColorScheme,
    View,
} from "react-native";

import { Colors } from "react-native/Libraries/NewAppScreen";
import { useStore } from "./store";

const App = () => {
    const bears = useStore((state) => state.bears);
    const fishes = useStore((state) => state.fishes);
    const addBear = useStore((state) => state.addBear);
    const addFish = useStore((state) => state.addFish);

    const isDarkMode = useColorScheme() === "dark";

    const backgroundStyle = {
        backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
    };

    return (
        <SafeAreaView style={backgroundStyle}>
            <StatusBar barStyle={isDarkMode ? "light-content" : "dark-content"} />
            <ScrollView contentInsetAdjustmentBehavior="automatic" style={backgroundStyle}>
                <View>
                    <View style={styles.titleContainer}>
                        <Text>{`Fishes: ${fishes}`}</Text>
                        <TouchableHighlight style={styles.buttonContainer} onPress={addFish}>
                            <Text>{"+"}</Text>
                        </TouchableHighlight>
                    </View>
                    <View style={styles.titleContainer}>
                        <Text>{`Bears: ${bears}`}</Text>
                        <TouchableHighlight style={styles.buttonContainer} onPress={addBear}>
                            <Text>{"+"}</Text>
                        </TouchableHighlight>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    titleContainer: {
        flexDirection: "row",
        marginTop: 32,
        paddingHorizontal: 24,
        fontSize: 24,
        fontWeight: "600",
    },
    buttonContainer: {
        height: 20,
        width: 20,
        marginLeft: 20,
        backgroundColor: "gray",
        justifyContent: "center",
        alignItems: "center",
    },
});

export default App;
