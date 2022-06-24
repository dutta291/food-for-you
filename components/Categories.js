//import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image, ScrollView} from 'react-native';

const items = [

    // Images and text in items categories
    {
        Image : require('../assets/images/shopping-bag.png'),
        Text:"Pick-Up",
    },

    {
        Image : require('../assets/images/soft-drink.png'),
        Text:"Soft Drinks",
    },

    {
        Image : require('../assets/images/bread.png'),
        Text:"Bakery Items",
    },

    {
        Image : require('../assets/images/fast-food.png'),
        Text:"Fast Foods",
    },

    {
        Image : require('../assets/images/deals.png'),
        Text:"Deals",
    },

    {
        Image : require('../assets/images/coffee.png'),
        Text:"Coffee & Tea",
    },

    {
        Image : require('../assets/images/desserts.png'),
        Text:"Desserts",
    },
];

export default function Categories() {
  return (
    <View 
    style={{
        marginTop:3,
        backgroundColor:'#fff',
        paddingVertical:10,
        paddingLeft:20,
    }}>

    <ScrollView horizontal showsHorizontalScrollIndicator={false}>

        {/* Loop Start here */}
        
        {items.map((item, index) => (            
        <View key={index} style={{alignItems:'center',marginRight:15}}>
        <Image 
        source = {item.Image} 
        style={{
            width:50,
            height:40,
            resizeMode:"contain",
        }}
        />
        <Text style={{fontSize:13,fontWeight:'900',}}>{item.Text}</Text>
        </View>
        ))}

        {/* Loop End Here */}


    </ScrollView>

    </View>
  );
}

