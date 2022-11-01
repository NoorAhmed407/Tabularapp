import { Image, ScrollView, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { Colors, Images, Metrix } from '../config'
import Ionicons from 'react-native-vector-icons/Ionicons';
import { Button, TextField } from '../components';
import { fonts } from '../config/Constants';
import { Table, Row, Rows } from 'react-native-table-component';

export default function UserScreen() {
  const [search,setSearch] = useState('');
  const tableHead = ['Name', 'Rank', 'Bananas', 'Searched User?'];
  const [tableData,setTableData] = useState([]);
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
                    placeholder={'Search by booking ID'}
                  />
              </View>
                <View style={{ width: '28%', marginTop: Metrix.VerticalSize(8) }}>
                    <Button
                      buttonText={'Search'}
                      shadow
                    />
                </View>
              </View>

              <View style={{marginVertical: Metrix.VerticalSize(10)}}>
                <Table borderStyle={{borderWidth: 2, borderColor: Colors.primary}}>
                  <Row data={tableHead} style={styles.head} textStyle={styles.text}/>
                  <Rows data={tableData} textStyle={styles.text} />
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