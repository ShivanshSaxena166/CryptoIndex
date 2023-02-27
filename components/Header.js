import React, { useState } from 'react';

import {View,Text} from 'react-native';
import { TouchableOpacity,StyleSheet,Image,Button } from 'react-native';

const COLORS={primary:'#1f145c',white:'#fff',black:'#000000',Green:'#00FF00',red:'#FF0000'};
import {useContext} from 'react'
import { Cryptdata } from './context/context';


export function Header(headerS){
    const [marketData,setmarketdata]= useContext(Cryptdata)
    const [coloumnsort,setcoloumnsort]=useState([true,true,true,true,true])
   async function sortdata(key1,place)
{

if(marketData!=undefined)
{
    var col=coloumnsort
    console.log(col)
    console.log(key1)
   
 var data=[...marketData]
 if(data!=undefined)
    {data = data.sort((a, b) => {
if(col[place])
{ 
        console.log(a[key1])
        console.log(b[key1])
        if ((a[key1] < b[key1])) {
          return -1;
     
        
        }}
        if(!col[place])
        {
            if ((a[key1] > b[key1])) {
                return -1;}
        }
        
      });
      col[place]=!col[place]
      console.log(col)
      setcoloumnsort(col)

      setmarketdata(data)
      console.log(marketData)
    }
     
      
}
    
      
    
}


return (
 
  <View style={styles.containerItem}>

<View style={styles.coinName1}>
   <TouchableOpacity  onPress={()=>sortdata("name",0)}>
        <Text style={styles.text}>Name</Text>
        
      </TouchableOpacity>
      </View>

<View style={styles.coinName2}>
   <TouchableOpacity  onPress={()=>sortdata("current_price",1)}>
        <Text style={styles.text}>Price</Text>
        
      </TouchableOpacity>
      </View>
      <View style={styles.coinName3}>
   <TouchableOpacity  onPress={()=>sortdata("price_change_24h",2)}>
        <Text style={styles.text}>Change</Text>
        
      </TouchableOpacity>
      </View>
      <View style={styles.coinName4}>
   <TouchableOpacity  onPress={()=>sortdata("price_change_percentage_24h",3)}>
        <Text style={styles.text}>Change%</Text>
        
      </TouchableOpacity>
      </View>
   



    {/* <View  style={styles.coinName1}><Button  title="Name" onPress={()=>sortdata("name",0)} color='#D3D3D3' /></View> */}
    {/* <View style={styles.coinName2}><Button title="Price" onPress={()=>sortdata("current_price",1)}  color='#D3D3D3'/></View>
    <View  style={styles.coinName3} ><Button title="Change" onPress={()=>sortdata("price_change_24h",2)}  color='#D3D3D3'/></View>
    <View  style={styles.coinName4}><Button title="change%" onPress={()=>sortdata("price_change_percentage_24h",3)}  color='#D3D3D3'/></View>
    <View  style={styles.coinName5}><Button title="market_cap" onPress={()=>sortdata("market_cap",4) }  color='#D3D3D3' /></View> */}
 
  </View>




) 
} 
const styles = StyleSheet.create({
adjustView:{
width:50
},
  textStyle:{
  justifyContent: "flex-start"
  },
  containerItem: {
    backgroundColor: "#0000FF",

    flexDirection: "row",
    justifyContent: "space-around",
    
  },
 
  containerNames: {
    marginLeft: 5,
  },
  coinName: {
    flexDirection: "row",
  },
  containerNames: {
    marginLeft: 5,

  },
  coinName1: {
    flexDirection: "row",
    width:"25%",
     borderWidth: 3

  },
  coinName2: {
    flexDirection: "row",
    width:"25%"
    ,
     borderWidth: 3

  },
  coinName3: {
    flexDirection: "row",
    width:"25%",
    borderWidth: 3

  },
  coinName4: {
    flexDirection: "row",
    width:"25%",
    borderWidth: 3

  },
  coinName5: {
    flexDirection: "row",
    width:"0%"

  },

  text: {
    color: "#fff",
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
    width: 30,
    height: 30,
  },
  textSymbol: {
    color: "#C8CBFA",
    textTransform: "uppercase",
  },
});