import React from 'react';
import { StyleSheet, Pressable, Image,View } from 'react-native';
// import Offers from './screen'

const  images =()=> {
    return (
        <Pressable>

        <View style={styles.image1}>

        <Image style={{alignItems:'center', width:380, height:110, marginLeft:20,borderRadius:10}}
        source={require('../assets/Offers.png')
    } />
        

        </View>
    </Pressable>

    );
}

export default images;

const styles = StyleSheet.create({

})