import React from 'react';

import {View,Text} from 'react-native';
import { TouchableOpacity,StyleSheet,Image } from 'react-native';

const COLORS={primary:'#1f145c',white:'#fff',black:'#000000',Green:'#00FF00',red:'#FF0000'};

export function ListItem({coin}){

console.log(coin.image)
return (
 
  <View style={styles.containerItem}>
    <View style={styles.coinName1}>
       <Image source={{uri: coin.image}} style={styles.image} /> 
      <View style={styles.containerNames}>
        <Text style={styles.text}>{coin.name}</Text>
      </View>
    </View>
    <View style={styles.coinName2}>
      <Text style={styles.text}>${coin.current_price} </Text>
      {/* <Text 
        style={[
          styles.pricePercentage,
          coin.price_change_percentage_24h > 0
            ? styles.priceUp
            : styles.priceDown,
        ]}
      >
        {coin.price_change_percentage_}%
      </Text> */}

    </View>
    <View style={styles.coinName3}>
      <Text style={styles.text}> {(JSON.stringify(coin.price_change_24h)).slice(0,6)}</Text>
    </View>
    <View style={styles.coinName4}>
      <Text style={styles.text}> {(JSON.stringify(coin.price_change_percentage_24h)).slice(0,4)}</Text>
    </View>

  </View>




) 
} 
const styles = StyleSheet.create({

  textStyle:{
    justifyContent:'center'
  },
  containerItem: {
    backgroundColor: "#fff",

    flexDirection: "row",
    justifyContent: "space-around",
  },
 
  containerNames: {
    marginLeft: 5,

  },
  coinName1: {
    flexDirection: "row",
    width:"25%"

  },
  coinName2: {
    flexDirection: "row",
    width:"25%"

  },
  coinName3: {
    flexDirection: "row",
    width:"25%"

  },
  coinName4: {
    flexDirection: "row",
    width:"25%"

  },
  coinName5: {
    flexDirection: "row",
    width:"30%"

  },
  
  text: {
    color: 'black',
    textAlign:'right'
  },
  textPrice: {
    color: "#fff",
    fontWeight: "bold",
  },
  pricePercentage: {
    textAlign: "right",
  },
  priceUp: {
    color: "#00B589",
  },
  priceDown: {
    color: "#FC4422",
  },
  image: {
    width: 20,
    height: 20,
  },
  textSymbol: {
    color: "#C8CBFA",
    textTransform: "uppercase",
  },
});