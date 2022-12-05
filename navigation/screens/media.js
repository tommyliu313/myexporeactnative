  import { Text, View, StyleSheet, ScrollView, Image, Button } from 'react-native';
  import { NavigationContainer } from '@react-navigation/native';
  import { createNativeStackNavigator } from '@react-navigation/native-stack';
  import VideoScreen from '../function/video';
  const Stack = createNativeStackNavigator();


function MediaScreen({navigation}){
    return (
       <View style={style.main}>
      <Text> Do you</Text>
      <Button title="Video Recording?" onPress={() => navigation.navigate('Video')}/>
      </View>
    );
  }

  function Choice(){
    return(
      <NavigationContainer independent={true}>
      <Stack.Navigator initialRouteName="Media"  screenOptions={{headerShown: false}} >
        <Stack.Screen name="Media" component={MediaScreen} />
        <Stack.Screen name="Video" component={VideoScreen} />
      </Stack.Navigator>
    </NavigationContainer>
    )
  }

  const style = StyleSheet.create({
    main:{
    flex: 0.5,
    margin: 20
  }
})

export default Choice;