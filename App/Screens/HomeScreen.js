import * as React from 'react';
import {View, Text, StyleSheet, SafeAreaView, Image} from 'react-native';
import Navigator from '../Navigation/Navigator';


export default function App() {

    

    return(
        <SafeAreaView style={styles.container}>
            <View style={styles.titleArea}>
                <Text style={styles.title}>Welcome to Caddy</Text>
            </View>
            <View style={styles.middleContent}>
                <Text style={styles.middleWords}>Caddy is a chatbot to help you</Text>
                <Text style={styles.middleWords}>understand substance abuse</Text>
                <Text style={styles.middleWords}>and provide help</Text>
            </View>
            <View style={styles.bottomContent}>
                <View style={styles.bottomWordsArea}>
                    <Text style={styles.caddyTopWords}>Hey I'm Caddy!</Text>
                    <Text style={styles.caddyBottomWords}>Click the "Chatbot" tab to talk!</Text>
                </View>
                <View style={styles.caddyArea}>
                    <Image
                        source={require('../Images/Caddy2.jpg')}
                        style={styles.caddy}
                    />
                </View>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: "flex-start",
        backgroundColor: '#EBF5E8',
        borderTopWidth: 2,
        borderBottomWidth: 2,
        borderColor: '#6C796A', 
        
    },
    titleArea: {
        alignItems: "center",
        marginTop: '20%',
        marginBottom: '20%',
    },
    title: {
        fontSize: 30,
        fontWeight: '700',
    },
    middleContent: {
        marginTop: '20%',
        marginBottom: '20%',
        width: '70%',
        alignItems: "center"
    },
    middleWords: {
        fontSize: 20,
        fontWeight: '500',
    },
    bottomContent: {
        flexDirection: 'row',
        marginTop: '30%',
        marginBottom: '124%',
        marginLeft: '20%',
        width: '80%',
        alignItems: "flex-start",
        alignContent: 'space-between',
        backgroundColor: "#637461",
    },
    bottomWordsArea: {
        
    },
    caddyTopWords: {
        fontSize: 17,
        fontWeight: '300',
        paddingTop: 5,
        paddingBottom: 20,
        paddingLeft: 5,
    },
    caddyBottomWords: {
        fontSize: 17,
        fontWeight: '300',
        paddingTop: 5,
        paddingLeft: 5,
    },
    caddyArea: {
        flex: 1,
        paddingLeft: 20,
        marginLeft: 0,
        
    },
    caddy: {
        width: '100%',
        height: '100%',
        resizeMode: 'contain',
        paddingLeft: 0,
        marginLeft: 0,
    },
});