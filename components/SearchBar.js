import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
//import  Icon  from 'react-native-vector-icons/Icon';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';

export default function SearchBar() {
  return (
    <View style={{marginTop:15, flexDirection:'row'}}>

    {/* Search Bar On HeaderTabs*/}
      <GooglePlacesAutocomplete 
      placeholder='Search'
      styles={{
        textInput:{
            backgroundColor:'#eee',
            borderRadius:20,
            fontWeight:'700',
            marginTop:7,
            
        },
        // text input in search bar
        textInputContainer:{
            backgroundColor:'#eee',
            borderRadius:50,
            flexDirection:'row',
            alignItems:'center',
            marginRight:10,
            paddingHorizontal:10,
        },
      }}

      // location icon left side on search bar
      renderLeftButton={() =>(
        <View>
            <Ionicons name="location-sharp" size={24}/>
        </View>
      )}

        // clock circle icon on right side of search bar
      renderRightButton={() =>(
        <View style={{
            flexDirection:'row',
            backgroundColor:'white',
            padding:9,
            borderRadius:30,
            alignItems:'center'
        }}>
            <AntDesign name='clockcircle'
            size={13}
            style={{marginHorizontal:6}}
            />
            <Text>Search</Text>
        </View>
      )}
      />
    </View>
  );
}
