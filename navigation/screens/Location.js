import * as React from 'react';
import { Text, View, StyleSheet, ScrollView } from 'react-native';
import Constants from 'expo-constants';
import * as Location from 'expo-location';
import MapView, {Marker} from 'react-native-maps';
import { useEffect, useState} from 'react';
import {Button, NativeBaseProvider, Alert} from 'native-base';

// or any pure javascript modules available in npm

export default function LocationScreen() {
  {/* Initial Settings */}
   const [location, setLocation] = useState({ latitude:'',
          longitude: '',
          latitudeDelta: '',
          longitudeDelta: ''});
  {/* Set Status whether there is boolean option */}
   {/*const [,pinlocation]= useState('');*/}
   const [yourlocation,setYourlocation] = useState(null);
   const [anywhere,setAnyWhere] = useState(
    {latitude: '', longitude:''}
   )
  
   const getlocationPermissionnow = async() =>{
       {/*get permission */}
      let {getcurrentstatuspermission} = await Location.requestForegroundPermissionsAsync();
      if (getcurrentstatuspermission !== 'granted') {
        return(
          <Alert status="error">
              We need your GPS location permission.
          </Alert>
        )
      }
        let yourlocation = await Location.getCurrentPositionAsync({});
        setYourlocation(yourlocation);
}
  return (<ScrollView>
    <View style={styles.container}>
    
      <Text style={styles.paragraph}>
      Locate your position: 
      </Text>
      <View style={styles.container}>
       {/* Show Google Map View */}
       <View>
      <MapView
        style = {styles.map}
        initialRegion = {{ 
          latitude:  22.302711,
          longitude: 114.177216,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421
         }}
         showsUserLocation={true}
         showsMyLocationButton={true}
        >
      
      </MapView>
      </View>
      <View><Text>Latitude: {location.latitude}</Text></View>
      <View><Text>Longtitude: {location.longitude}</Text></View>
        <NativeBaseProvider>
        <Button onPress={() => getlocationPermissionnow()}> Allow GPS Location Permission </Button>
        <Button> Ok </Button>
         </NativeBaseProvider>
    </View>
      
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
  },
    map: {
    width: 350,
    height:500,
  }
});
