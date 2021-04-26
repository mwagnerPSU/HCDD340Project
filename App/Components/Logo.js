import React from 'react';
import {View, Image, StyleSheet} from 'react-native';

export default function Search(props) {
    return(
        <View style={styles.logoArea} >
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
    justifyContent: 'space-around',
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
    width: '50%',
    height: '100%',
    resizeMode: 'contain',
}

});