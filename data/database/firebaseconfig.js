import * as React from 'react';
import { StatusBar } from 'expo-status-bar';
import { Text, View, StyleSheet, Button } from 'react-native';
import Constants from 'expo-constants';
import {initializeApp} from 'firebase/app';
import {getFirestore, setDoc, doc} from 'firebase/firestore';

export function firebase() {
  const firebaseConfig = {
    apiKey: "AIzaSyDsUzH0I9ADm2SHrZ1TzyETmrEPB1M-jrk",
    authDomain: "sigma-cortex-315405.firebaseapp.com",
    databaseURL: "https://sigma-cortex-315405-default-rtdb.firebaseio.com",
    projectId: "sigma-cortex-315405",
    storageBucket: "sigma-cortex-315405.appspot.com",
    messagingSenderId: "917558103826",
    appId: "1:917558103826:web:f00d31b49fecb8e2822dcb"
  }
  initializeApp(firebaseConfig);
  const sendDataToFirebase = async() => {
    const firestore = getFirestore();

    await setDoc(doc(firestore,"users","user_id"),{
    phone: "96013307",
    name:"asdsadcsc",
    age: 127
  });
}
  
  return (
    <View style={styles.container}>
      <Button title="Send Data" onPress={sendDataToFirebase}> Send Data</Button>
    <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
