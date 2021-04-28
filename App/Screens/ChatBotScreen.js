import * as React from 'react';
import { useState } from 'react';
import { View, Text, StyleSheet, SafeAreaView, Button, TouchableOpacity, ScrollView } from 'react-native';
import Navigator from '../Navigation/Navigator';

export default function App() {
    
    const [firstResp, setFirstResp] = useState("");
    const [secondResp, setSecondResp] = useState("");
    //const [thirdResp, setThirdResp] = useState("");
    const [showFirstDialogue, setShowFirstDialogue] = useState("");
    const [showSecondButtons, setShowSecondButtons] = useState("");
    const [showSecondDialogue, setShowSecondDialogue] = useState("");

    function choice1answer1() {
        if(showFirstDialogue === ""){
            setShowFirstDialogue(!showFirstDialogue);
            setShowSecondButtons(!showSecondButtons);
        }
        if(showSecondDialogue === true){
            setShowSecondDialogue(!showSecondDialogue);
        }
        setSecondResp("");
        setFirstResp("SUD stands for substance use disorder and it's a condition in which there is uncontrolled use of a substance despite harmful consequence");
    }
    
    function choice1answer2() {
        if(showFirstDialogue === ""){
            setShowFirstDialogue(!showFirstDialogue);
            setShowSecondButtons(!showSecondButtons);
        }
        if(showSecondDialogue === true){
            setShowSecondDialogue(!showSecondDialogue);
        }
        setSecondResp("");
        setFirstResp("SUDs symptoms are grouped into four categories:\n1. Impaired control\n2. Social problems\n3. Risky use\n4. Drug effect");
    }
    
    function choice1answer3() {
        if(showFirstDialogue === ""){
            setShowFirstDialogue(!showFirstDialogue);
            setShowSecondButtons(!showSecondButtons);
        }
        if(showSecondDialogue === true){
            setShowSecondDialogue(!showSecondDialogue);
        }
        setSecondResp("");
        setFirstResp("Reach out to a medical professional should conduct a formal assessment of symptoms to identify is a SUD is present");
    }

    function choice2answer1() {
        if (firstResp === "SUD stands for substance use disorder and it's a condition in which there is uncontrolled use of a substance despite harmful consequence"){
            if(showSecondDialogue === false || showSecondDialogue === ""){
                setShowSecondDialogue(!showSecondDialogue);
            }
            setSecondResp("Changes in the brain's structure and function are what cause people to have these intense cravings, sever SUDs are sometimes called addictions");
        }
        else if (firstResp === "SUDs symptoms are grouped into four categories:\n1. Impaired control\n2. Social problems\n3. Risky use\n4. Drug effect"){
            if(showSecondDialogue === false || showSecondDialogue === ""){
                setShowSecondDialogue(!showSecondDialogue);
            }
            setSecondResp("Along with these the addiction may cause physical and psychological problems as well and relationship problems with family or friends");
        }
        else if (firstResp === "Reach out to a medical professional should conduct a formal assessment of symptoms to identify is a SUD is present"){
            if(showSecondDialogue === false || showSecondDialogue === ""){
                setShowSecondDialogue(!showSecondDialogue);
            }
            setSecondResp("There are many different treatments for SUD depending on the person and SUD, these could include hospitalization, therapeutic communities, residential treatments and others");
        }
    }

    function choice2answer2() {
        if(showSecondDialogue === false || showSecondDialogue === ""){
            setShowSecondDialogue(!showSecondDialogue);
        }
        setSecondResp("Have a nice day!");
    }

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.chatArea}>
                <ScrollView>
                    <View style={styles.chatBubble}>
                        <Text>Hi, I'm Caddy!</Text>    
                    </View> 
                    <View style={styles.chatBubble}>
                        <Text>What brings you here today?</Text>   
                    </View>  
                    <View style={styles.firstChoice}>  
                        <View style={styles.button}>
                            <TouchableOpacity
                                onPress={choice1answer1}
                            >
                                <Text style={styles.buttonText}>What is SUD?</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={styles.button}>
                            <TouchableOpacity
                                onPress={choice1answer2}
                            >
                                <Text style={styles.buttonText}>Symptoms</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={styles.button}>
                            <TouchableOpacity
                                onPress={choice1answer3}
                            >
                                <Text style={styles.buttonText}>Looking for help</Text>
                            </TouchableOpacity>
                        </View>   
                    </View> 
                    { showFirstDialogue ?
                    <View style={styles.chatBubble}>
                        <Text>{firstResp}</Text>
                    </View>
                    : null }
                    { showSecondButtons ? 
                    <View style={styles.secondChoice}>
                        <View style={styles.button}>
                            <TouchableOpacity
                                onPress={choice2answer1}
                            >
                                <Text style={styles.buttonText}>Learn More</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={styles.button}>
                            <TouchableOpacity
                                onPress={choice2answer2}
                            >
                                <Text style={styles.buttonText}>Quit</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                    : null }
                    { showSecondDialogue ? 
                    <View style={styles.chatBubble}>
                        <Text>{secondResp}</Text>
                    </View>
                    : null }
                </ScrollView>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'flex-start',
        backgroundColor: '#EBF5E8',
        borderTopWidth: 2,
        borderBottomWidth: 2,
        borderColor: '#6C796A', 

    },
    chatArea: {
        width: '80%',
        height: '90%',
        backgroundColor: 'white',
        borderWidth: 1,
        borderColor: '#f0ead6',
        shadowColor: 'gray',
        shadowOpacity: 5,
        marginTop: 40,
        padding: 20,
    },
    chatBubble: {
        backgroundColor: '#add8e6',
        marginBottom: 4,
        marginRight: 'auto',
        padding: 5,
        borderRadius: 10,
    },
    firstChoice: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        marginTop: 10,
        marginBottom: 10,
        justifyContent: 'flex-end',
    },
    secondChoice: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        marginTop: 10,
        marginBottom: 10,
        justifyContent: 'flex-end',
    },
    button: {
        width: 'auto',
        height: 'auto',
        borderWidth: 2,
        borderColor: 'gray',
        borderRadius: 10,
        padding: 5,
        margin: 5,
    },
    buttonText: {
        fontSize: 15,
    },
});