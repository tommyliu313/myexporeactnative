import * as React from 'react';
import { Text, View, StyleSheet, Button, ScrollView } from 'react-native';
import Constants from 'expo-constants';
import * as Location from 'expo-location';
// You can import from local files
import { useEffect, useState} from 'react';
import MapScreen from '../function/map';

// or any pure javascript modules available in npm

export default function LocationScreen() {
  
  return (<ScrollView>
    <View style={styles.container}>
    
      <Text style={styles.paragraph}>
      Locate your position: 
      </Text>
  
        <MapScreen />
      
    </View></ScrollView>
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
  }
});
