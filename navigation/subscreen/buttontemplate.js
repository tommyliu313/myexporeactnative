import { Text, View, StyleSheet, Image, ScrollView } from 'react-native';
import {useState} from 'react';
import { NativeBaseProvider,Pressable} from "native-base";

export default function ButtonTemplate({item}){
    <NativeBaseProvider>
    <Pressable onPress={() => navigation.navigate('Info')}>
    <View style={style.container}>
    <View style={style.row}>
    <Image source={item.photo} style={style.circle}/>
    <Text style={style.text}>{item.name}</Text> 
     <Text style={style.text}>{item.address}</Text>
     </View>
    </View>
    </Pressable>
    </NativeBaseProvider>
}

const style = StyleSheet.create({
    circle:{
        borderRadius: 20,
        margin: 0,
        padding: 30,
        height: 'auto',
        width: 'auto'
      },
      text:{
        textAlign: 'center',
        padding: 10,
        margin: 10,
        alignSelf:'flex-end'
      },
      row:{
        flexDirection: "row",
        flexWrap: "wrap",
        },
      container:{
        flex: 1,
        paddingTop: 15,
        paddingHorizontal: 30,
        borderRadius: 20,
        backgroundColor: "#f0ff00",
        margin: 20
      }

})