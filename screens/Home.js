import React from 'react';
import { StyleSheet, Text, View} from 'react-native';
import { ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Categories from '../components/Categories';
import HeaderTabs from '../components/HeaderTabs';
import RestaurantItems, { localRestaurants } from '../components/RestaurantItems';
//import RestaurantItem from '../components/RestaurantItems';
import SearchBar from '../components/SearchBar';

const YELP_API_KEY = ""

export default function Home() {
  const [restaurantData, setRestaurantData] = React.useState(localRestaurants);
  return (
    <SafeAreaView style={{backgroundColor:"#D3D3D3",flex:1}}>
      <View style={{backgroundColor:"#fff" , padding:15 }}>
        <HeaderTabs/>
        <SearchBar/>
        </View>
        <ScrollView showsVerticalScrollIndicator={false}>
          <Categories/>
          <RestaurantItems restaurantData={restaurantData}/>
          </ScrollView>
    </SafeAreaView>
  );
}

