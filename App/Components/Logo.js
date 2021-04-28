import React from 'react';
import {View, Image, StyleSheet, Text} from 'react-native';

export default function Search(props) {
    return(
        <View style={styles.logoArea} >
            {/* <Text style={styles.title}>Caddy</Text> */}
            <Image
            source={require('../Images/Caddy.jpg')}
            style={styles.logo}
            />
        </View>
    );

}

const styles = StyleSheet.create({

    logoArea: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        // paddingLeft: 20,
        
    },
    logo:{
        width: '50%',
        height: '120%',
        resizeMode: 'contain',
        marginBottom: 5,
    },
    title:{
        marginTop: '5%',
    }

});