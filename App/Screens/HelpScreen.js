import * as React from 'react';
import { View, Text, Image, StyleSheet, SafeAreaView } from 'react-native';
import { Header } from 'react-native/Libraries/NewAppScreen';
import Navigator from '../Navigation/Navigator';


export default function App() {
    const places = [
        {
            name: 'Suntra Modern Recovery ',
            location: 'New York, New York',
            phone: '886-292-1021',
            about: 'About: Recovery is personal to us. As patients and as providers we’ve been there, done that, and seen that. Our personal journeys inform our mission and help us ground the work we do every day.',
            image: require('../Images/suntra.jpg')
        },
        {
            name: 'Riverwalk Ranch',
            location: 'Mansfield, Texas',
            phone: '817-720-9520',
            about: 'About: Our Mission is to foster and facilitate substance use disorder treatment by using measurable assessments and outcomes, establishing individualized goals, and implementing proven strategies that promote long-term recovery',
            image: require('../Images/riverwalk.jpg')
        },
        {
            name: 'Laguna View Detox',
            location: 'Laguna Beach, California',
            phone: '888-448-1884',
            about: 'About: At Laguna View Detox, we understand addiction and know how to help you break free from drug and alcohol abuse once and for all. Addiction is different for every client that comes through our doors which is why we use individualized plans for each and every person',
            image: require('../Images/laguna.jpg')
        },
    ];
    return (
        <SafeAreaView style={styles.container}>

            <View style={styles.header}>
                <Text style={{ fontSize: 30, color: '#6C796A'}}>Find More Help:</Text>
            </View>
            <View style ={styles.borders}>
                {places.map((data) => (
                    
                    <Text key={data.id}>
                            
                            <Text style={styles.names}>{data.name} {"\n"}</Text>
                            <Image source ={data.image} style={styles.placeLogo} />
                            <Text style={styles.locations}>{"\n"}{data.location}{"\n"}</Text>
                            <Text style={styles.phones}>{data.phone}{"\n"}</Text>
                            <Text style={styles.abouts}>{data.about}{"\n"}</Text>
                        
                    </Text>
                ))}

            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#EBF5E8',
        borderTopWidth: 2,
        borderBottomWidth: 2,
        borderColor: '#6C796A',
        
        
    },

    borders: {
        marginLeft:20,
        paddingTop: 10, 
        
    },

    header: {
        alignItems: 'flex-start',
        marginLeft: 15,
        marginTop: 10,
        fontSize: 25,
        textAlign: 'left',
        color: '#758473'
    },

    names:{
        fontWeight: 'bold',
        paddingBottom:5,
        textAlign: "left",
        textAlignVertical: "top",
        color:'#758473',
        fontSize: 20,
       
    },

    locations:{
      
        textAlign: "left",
        color:'#758473',
        fontSize: 12,
    },

    phones:{
        textAlign: "left",
        color:'#758473',
        fontSize: 12,
    },

    abouts:{
        color:'#758473',
         fontSize: 15,
    },

    placeLogo: {
        paddingTop:5,
        height: 70,
        width: 70,
        borderWidth: 1,
        borderColor: '#6C796A',
     
    }

});