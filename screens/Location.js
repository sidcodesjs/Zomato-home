import { StyleSheet,Text, View, SafeAreaView, TextInput} from 'react-native';
import React  from 'react';
import { AntDesign } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';


const location = () => {
    return (
        <View style={styles.loc}>
            <Entypo  style={styles.icon2} name="location-pin" size={24} color="#E52850" />
              <Text style={styles.location}>HOME</Text>
              <Entypo style={styles.icon3} name="notification" size={20} color="black" />
              <Feather style={styles.icon4} name="globe" size={15} color="black" />
              <Text style={styles.lang}>English</Text>
              <FontAwesome5 style={styles.icon5} name="user-circle" size={22} color="black" />
              {/* <Text style={styles.address}>Sarojini Nagar near Xyz mall,...</Text>  */}
        </View>
    );
}

export default location;

const styles = StyleSheet.create({

    location:{
        marginTop:55,
        marginLeft: 5,
        fontWeight:'bold',
        fontSize: 18,
        color:'#E52850'
    
    
            
    },
    loc:{
        flexDirection: 'row',
        alignItems:'center'
    },
    icon2:{
       flexDirection:'row',
        marginTop: 55,
        marginLeft: 30,
    },

    address:{
        marginTop: 70,
        fontSize:10,
        marginRight:70,
        // flexDirection: ''
    },

    icon3:{
        marginLeft:130,
        marginTop:55,
    },
    icon4:{
        marginLeft: 10,
        marginTop: 55,

    },
    lang:{
        marginLeft: 10,
        marginTop: 55,
        borderWidth:1,
        borderColor:'#D8D8D8',
        padding:4,
        borderRadius:10
        

    },
    icon5:{
        marginTop: 55,
        marginLeft: 10,
    }
    
})