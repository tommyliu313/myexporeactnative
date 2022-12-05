import * as React from 'react';
import { Text, View, StyleSheet, Image, Dimensions} from 'react-native';
import MapView from 'react-native-maps';
import Marker from 'react-native-maps';
import {useState, useEffect} from 'react';
import {Button, NativeBaseProvider} from 'native-base';


export default function MapScreen() {
  {/* Initial Settings */}
   const [location, setLocation] = useState({ latitude:  22.302711,
          longitude: 114.177216,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421});
  {/* Set Status whether there is boolean option */}
  
  {/*const [,pinlocation]= useState('');*/}
   useEffect(() => {
     (async () => {
       {/*get permission */}
      let {status} = await Location.requestForegroundPermissionsAsync();
      {/* */}
      setLocation(location);
  })
     })
   return (
       <View style={styles.container}>
       {/* Show Google Map View */}
      <MapView
        style = {styles.map}
        initialRegion = {{ 
          latitude:  22.302711,
          longitude: 114.177216,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421
         }}
        
      >
      
      
      <Marker onPress={ () => {coordinate={location}}}/>
      </MapView>
      <View><Text>Latitude: {location.latitude}</Text></View>
      <View><Text>Longtitude: {location.longitude}</Text></View>
        <NativeBaseProvider>
        <Button onPress={() => s}> Navigate </Button>
        <Button> Ok </Button>
         </NativeBaseProvider>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 24,
  },
  map: {
    width: 350,
    height:500,
  }

});