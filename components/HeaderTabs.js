import React, { useState } from 'react';
import { StyleSheet, Text, View, SafeAreaView, TouchableOpacity } from 'react-native';


export default function HeaderTabs() {
    const[activeTabs, setActiveTabs] = useState("Delivery");
  return (
    <View style={{flexDirection:'row',alignSelf:"center"}}>

        {/* Delivery */}
        <HeaderButton 
        Text="Delivery" 
        btncolor="black" 
        textcolor="white" 
        activeTabs={activeTabs} 
        setActiveTabs={setActiveTabs}/>

        {/* PickUp */}
        <HeaderButton 
        Text="PickUp" 
        btncolor="white" 
        textcolor="black" 
        activeTabs={activeTabs} 
        setActiveTabs={setActiveTabs}/>
      
    </View>
  );
}

      // HeaderButton
const HeaderButton = (props) => ( 
    <TouchableOpacity style={{
      backgroundColor: props.activeTabs === props.Text ? "black" : "white",
      paddingVertical:6,
      paddingHorizontal:16,
      borderRadius:30,
      }}
      onPress = {() => props.setActiveTabs(props.Text)}
      >
        <Text style={{
          color: props.activeTabs === props.Text ? "white" : "black",
          fontSize:15,
          fontWeight:"900",
          }}>
          {props.Text}
        </Text>
    </TouchableOpacity>
);