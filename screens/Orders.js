import React from 'react';
import { View,StyleSheet,Text } from 'react-native';
const Orders =()=> {
    return (
        <View>
            <Text style={styles.text1}>Based On Your Orders.</Text>
        </View>
    );
}

export default Orders;

const styles = StyleSheet.create({

    text1:{
        fontSize:24,
        fontWeight:'bold',
        marginLeft: 20,
        marginTop:10,
    
    }


})