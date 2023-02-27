/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useEffect,useState } from 'react';
import { Component } from 'react';
import { TouchableOpacity, Alert, Button } from 'react-native';
import { Table, TableWrapper,Col, Cols, Cell } from 'react-native-table-component';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  FlatList,
  View
  
} from 'react-native';
const COLORS={primary:'#1f145c',white:'#fff',black:'#000000',Green:'#00FF00',red:'#FF0000'};
import { Cryptdata } from './components/context/context';

// const columns = [
//   { label: "Coin Name", accessor: "name", sortable: true },
//   { label: "Price", accessor: "current_price", sortable: true },
//   { label: "24h Change", accessor: "price_change_24h", sortable: true, sortbyOrder: "desc" },
//   { label: "24 Volume", accessor: "price_change_percentage_24h", sortable: true },
//   { label: "Market Cap", accessor: "market_cap", sortable: true },
// ];

import { ListItem } from './components/ListItem';
import {Header} from './components/Header'
function returnButton(titleB: any)
{
return (<Button title={titleB}   color="#15847d"/>)
} 

function App(): JSX.Element {
const [marketData,setmarketdata]= useState([])
const [refreshing,setRefreshing]=useState(false)
const [seconds,setseconds]=useState(0)



const headers=[{"head1":returnButton("name"),"head2":returnButton("price"),"head3":returnButton("24h_change"),"head4":returnButton("24h_change%"),"head5":returnButton("marketCap")}]
const getCoinMarketData = async () => {
    try{
  const response = await fetch(
    "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=bitcoin%2Cethereum%2Cmonero%2Cbinancecoin%2Clitecoin%2Cpolygen&order=market_cap_desc&per_page=100&page=1&sparkline=false"
  );
  console.log("called")
 var data1= await response.json()

setmarketdata(data1)
  return data1;}
  catch(error)
  {
    console.log(error)
  }

};

      
useEffect(() => {

  const interval = setInterval(() => {
    var t=seconds
    setseconds(t)
    console.log(seconds)
  getCoinMarketData()

},5000)
  return () => clearInterval(interval);
}, [])



  return (


    <SafeAreaView>
<Cryptdata.Provider value={[marketData,setmarketdata]}>
      <FlatList style={styles.list} data={headers}
      showsVerticalScrollIndicator={false}
      renderItem={({ item }) => <Header headerS={item} />}
      refreshing={refreshing}
       />
<FlatList
                style={styles.list}
                data={marketData}
                showsVerticalScrollIndicator={false}
                renderItem={({ item }) => <ListItem coin={item} />}
                refreshing={refreshing}
                onRefresh={async () => {
                    setRefreshing(true);
                    await getCoinMarketData();
                    setRefreshing(false);
                }}
            />

         
     
     </ Cryptdata.Provider>
  </SafeAreaView>

  );
}
const styles = StyleSheet.create({
  container: {
      backgroundColor: "white",
      flex: 1,
      alignItems: "center",
  },
  header: {
      flexDirection: "row",
      width: "90%",
      justifyContent: "space-between",
      marginBottom: 10,
  },
  title: {
      fontSize: 20,
      color: "#fff",
      marginTop: 10,
  },
  list: {
      width: "100%",
  },
  searchInput: {
      color: "#fff",
      borderBottomColor: "#C8CBFA",
      borderBottomWidth: 1,
      width: "40%",
      textAlign: "left",
  },
});
export default App;
