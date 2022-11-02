import { Alert, Image, ScrollView, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { Colors, Images, Metrix } from '../config'
import Ionicons from 'react-native-vector-icons/Ionicons';
import { Button, TextField } from '../components';
import { fonts } from '../config/Constants';
import { Table, Row, Rows } from 'react-native-table-component';
let json = require('../config/leaderboard.json');

export default function UserScreen() {
  const [search,setSearch] = useState('');
  const [jsonData,setJsonData] = useState(null);
  const tableHead = ['Name', 'Rank', 'Bananas', 'Searched User?'];
  const [tableData,setTableData] = useState([]);



  useEffect(()=>{   
    fetchJsonData();
  },[]);

  const fetchJsonData = () => {
    let res = [];
    for(var i in json){
      res.push(json[i]);
    }
    res = res.sort(function (a, b) {
      return b.bananas - a.bananas;
    });
    console.log("resss=======>", res);
    setJsonData(res);
  }


  const searchResults = () => {
    var searchItemIndex = jsonData.findIndex(e => e.name === search);
    if(searchItemIndex == -1){
      return Alert.alert('Error', 'This user name does not exist!');
    }
    let filter = jsonData.slice(0,searchItemIndex > 9 ? 9 : 10).map((val,ind)=>[val?.name, ind + 1, val?.bananas, searchItemIndex == ind ? 'yes' : 'no']);
    if(searchItemIndex > 9){
      filter.push([jsonData[searchItemIndex].name, searchItemIndex + 1, jsonData[searchItemIndex].bananas, 'yes']);
    }
    
    console.log("filter", filter);
    setTableData(filter);
  }

  return (
    <View style={styles.container}>

        <ScrollView style={{marginVertical: Metrix.VerticalSize(20)}}>
            <View style={styles.imageContainer}>
                <Image
                    source={Images.logo}
                    resizeMode={'contain'}
                    style={styles.image}
                />
            </View>

            <View style={styles.searchContainer}>
              <View style={{width: '67%'}}>
                  <View style={styles.eyeIconStyle}>
                    <Ionicons
                      name={'search'}
                      color={Colors.secondary}
                      size={Metrix.customFontSize(20)}
                    />
                  </View>
                  <TextField
                    value={search}
                    style={{ paddingLeft: Metrix.HorizontalSize(40) }}
                    onChangeText={text => setSearch(text)}
                    placeholder={'Search by User'}
                  />
              </View>
                <View style={{ width: '28%', marginTop: Metrix.VerticalSize(8) }}>
                    <Button
                      buttonText={'Search'}
                      shadow
                      onPress={searchResults}
                    />
                </View>
              </View>

              <View style={{marginVertical: Metrix.VerticalSize(10)}}>
                <Table borderStyle={{borderWidth: 2, borderColor: Colors.primary}}>
                  <Row data={tableHead} style={styles.head} textStyle={styles.text}/>
                  <Rows data={tableData} textStyle={{...styles.text, color: Colors.black}} />
                </Table>
              </View>
            
        </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1, 

        paddingHorizontal: Metrix.HorizontalSize(20),
        backgroundColor: Colors.white
    },
    imageContainer: {
        alignSelf: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: Metrix.VerticalSize(20),
        width: Metrix.VerticalSize(80),
        height: Metrix.VerticalSize(100),
      },
      image: {
        height: '100%',
        width: '100%',
      },
      searchContainer: { marginBottom: Metrix.VerticalSize(10), flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center' },
      eyeIconStyle: {
        position: 'absolute',
        zIndex: 100,
        top: Metrix.VerticalSize(25),
        left: Metrix.HorizontalSize(15),
      },

      head: {  backgroundColor: Colors.secondary },
      text: { marginHorizontal: Metrix.HorizontalSize(14),marginVertical: Metrix.VerticalSize(6), color: Colors.white, fontSize: Metrix.customFontSize(11), fontFamily: fonts.Bold, textAlign: 'center' }

})