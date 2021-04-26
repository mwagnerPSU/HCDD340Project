import * as React from 'react';
import {View, Text, StyleSheet, SafeAreaView} from 'react-native';
import Navigator from '../Navigation/Navigator';


export default function App() {

    

    return(
        <SafeAreaView style={styles.container}>
            <Text>Home Screen</Text>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});