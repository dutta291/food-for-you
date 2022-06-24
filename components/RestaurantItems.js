import React from 'react';
import { StyleSheet, Text, View,Image , TouchableOpacity} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

export const localRestaurants = [

  {
    name: "Beachside Bar",
    image_url:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR39K_gS_TiikewDSXQbvu1gPellUgVsriUjQ&usqp=CAU",
    categories:["Cafe","Bar"],
    price: "500$",
    reviews: 1244,
    rating:4.5,    
  },

  {
    name: "Taj Hotel",
    image_url:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqeiFrHPLHErcxiIFaAg5QSiAnQgiLR-E3gw&usqp=CAU",
    categories:["Restaurant","Bar"],
    price: "5000$",
    reviews: 1244,
    rating:4.9,    
  },


  {
    name: "Gwaliya Restaurant",
    image_url:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSW6sv8b_X7dxmbi7E921mSS6ood0exhd8n0Q&usqp=CAU",
    categories:["Restaurant","Bar"],
    price: "500$",
    reviews: 1244,
    rating:4.5,    
  },


  {
    name: "The Salad Life",
    image_url:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTiSZHRkhaImwLfYZiR1rVOvLRMVVaMJYDQQ&usqp=CAU",
    categories:["Cafe","Bar"],
    price: "500$",
    reviews: 1244,
    rating:4.5,    
  },


  {
    name: "Dine In a Dime",
    image_url:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjVc9TvxORgi3kR4Nfu4VGgecubg8s-bUoAg&usqp=CAU",
    categories:["Bar"],
    price: "500$",
    reviews: 1244,
    rating:4.5,    
  },


  {
    name: "Grill & Chill",
    image_url:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_XO6_CdWwHxnUDfGnJDvHB8rvjzTf-9vg1w&usqp=CAU",
    categories:["Cafe","Bar"],
    price: "500$",
    reviews: 1244,
    rating:4.5,    
  },
]

export default function RestaurantItems(props) {
  return (
    <TouchableOpacity activeOpacity={0.5}
    style={{
      marginBottom:10
    }}>
      {/* Loop Start */}
      {props.restaurantData.map((restaurant,index) => (
    <View
    key={index} 
    style={{
      marginTop:10,
      padding:15,
      backgroundColor:'white',
    }}>

    <RestaurantImage image={restaurant.image_url}/>
    <RestaurantInfo name={restaurant.name}  rating={localRestaurants[0].rating}/>
    </View>
    ))} 
    {/* Loop End */}
    </TouchableOpacity>
  );
}

// Restaurant Image 
const RestaurantImage = (props) => (
  <>
    <Image source={{uri:props.image}}
    style={{
        width:"100%",
        height:180       
    }}
    />
    <TouchableOpacity style={{
      position:'absolute',
      right:20,
      top:20,
    }}>
      <MaterialCommunityIcons name ='heart-outline' 
      size={25}
      color='#fff'/>
    </TouchableOpacity>
    </>
);

// Information Below Image
const RestaurantInfo = (props) => (
  <View style={{
    flexDirection:'row',
    justifyContent:'space-between',
    marginTop:10,
  }}>
    <View>
  <Text style={{
    fontWeight:'900',
    fontSize:15
  }}>{props.name}</Text>

  <Text style={{
    fontWeight:'900',
    fontSize:13,
    color:'gray'
  }}>30-45 : min</Text>
  </View>
  <View style={{
    backgroundColor:'#eee',
    height:30,
    width:40,
    alignItems:'center',
    borderRadius:15,
  }}>
  <Text style={{
    marginTop:4.2,
    fontWeight:'900'
  }}>{props.rating}</Text>
  </View>
  </View>
);

