import React from 'react';
import { FlatList, Pressable, View,Text, StyleSheet } from 'react-native';
import { Entypo } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';

const Catogories =()=> {

    const items = [
        {
        id:'1',
        name:"Pure Veg",
    icon: <Entypo name="leaf" size={17} color="green" />},

        {
            id:'2',
            name:'Great Deals',
        icon:<MaterialCommunityIcons name="brightness-percent" size={17} color="blue" />},
    
            {
                id:'3',
                name:'Fast Delivery'},
        
                {
                    id:'4',
                    name:'Relevance',
                icon:<AntDesign name="arrowup" size={17} color="black" />,
            icon:<AntDesign name="arrowdown" size={17} color="black" />},
            
                    {
                        id:'5',
                        name:'Max safety',}
                
                                        

]
return(

    <View style={styles.list}>

    <FlatList showsHorizontalScrollIndicator={false} horizontal={true} data={items} renderItem={({item})=>(
        <Pressable>
           
            <Text style={styles.menu}>{item.icon}{item.name}</Text>
        </Pressable>
)} />       
    </View>
)

        }
        
        export default Catogories;


        const styles = StyleSheet.create({


            list:{
                margin: 15
            },

            menu:{
                margin: 7,
                backgroundColor:'white',
                padding: 5,
                borderRadius: 10,
                color:'black',
                borderWidth:1,
                borderColor:'#D8D8D8',
                // fontWeight:'bold'
                
            }
        })