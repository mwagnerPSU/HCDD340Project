import React from 'react';
import {View, Image, StyleSheet, Text} from 'react-native';

export default function Search(props) {
    return(
        <View style={styles.logoArea} >
            <Image
            source={require('../Images/Caddy.jpg')}
            style={styles.logo}
            />
            <Text style={styles.title}>Caddy</Text>
        </View>
    );

}

const styles = StyleSheet.create({

logoArea: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    ...Platform.select({
    android: {
        marginLeft: 40,
    },
    ios: {
        marginLeft: 40,
    },
    }),
},
logo:{
    width: '40%',
    height: '100%',
    resizeMode: 'contain',
},
title:{
    marginTop: '5%',
}

});