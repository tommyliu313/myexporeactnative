import { Text, View, StyleSheet, Image, ScrollView } from 'react-native';
import {useState} from 'react';
import { NativeBaseProvider, Button, VStack, Heading, Stack ,Center, Box, Pressable} from "native-base";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import {faAdd,faChevronRight} from "@fortawesome/free-solid-svg-icons";
import * as React from 'react';
import InfoScreen from '../subscreen/info';
import AddCategoryScreen from '../subscreen/categoryadd';

const Stacker = createNativeStackNavigator();

function HomeScreen({navigation}){
  const [source, setSource] = useState([
    {name: 'Restaurant', address: 'L2, MOSTown, Sai Sha Road, Ma On Shan, N.T.', photo: require('../../data/pics/test.jpg')},
    {name: 'Restaurant 2', address: 'L2, MOSTown, Sai Sha Road, Ma On Shan, N.T.',photo: require('../../data/pics/test.jpg')}]
  );
  return (
    <ScrollView>
      <View style={style.main}>
      <View>
        <NativeBaseProvider>
  <VStack>
        <Text style={style.titletext}>Photo</Text>
        <NativeBaseProvider>
        <Button leftIcon={<FontAwesomeIcon icon={faAdd} style={{fontSize: 32}} />} colorScheme="success">   Add</Button>
        <Button>See All</Button>
        </NativeBaseProvider> 
</VStack>
</NativeBaseProvider>
  </View>
      
      {/*<ScrollView horizontal>
      
    <Image style={style.circle} source={require('../../download.jfif')}/>
    <Image style={style.circle} source={require('../../download.jfif')}/>

    <Image style={style.circle} source={require('../../download.jfif')}/>
 
    <Image style={style.circle} source={require('../../download.jfif')}/>
    
    <Image style={style.circle} source={require('../../download.jfif')}/>
    
    <Image style={style.circle} source={require('../../download.jfif')}/>
    </ScrollView>*/}
   
    <View style={style.row}>
      <Text style={style.titletext}>Photo</Text>

      </View>
       <ScrollView horizontal>
    <Image style={style.circle} source={require('../../download.png')}/>
    <Image style={style.circle} source={require('../../download.png')}/>

    <Image style={style.circle} source={require('../../download.png')}/>
 
    <Image style={style.circle} source={require('../../download.png')}/>
    
    <Image style={style.circle} source={require('../../download.png')}/>
    
    <Image style={style.circle} source={require('../../download.png')}/>
    </ScrollView>
      
      <View>
      <Text style={style.titletext}>Restaurant</Text>
      <NativeBaseProvider>
        <Button leftIcon={<FontAwesomeIcon icon={faAdd} style={{fontSize: 32}} />} colorScheme="success">   Add</Button>
        <Button>See All</Button>
        </NativeBaseProvider>
      

        {source.map( (element) => {
          return (
            <NativeBaseProvider>
            <Pressable onPress={() => navigation.navigate('Info')}>
            <View style={style.container}>
            <View style={style.row}>
            <Image source={element.photo} style={style.circle}/>
            <Text style={style.text}>{element.name}</Text> 
             <Text style={style.text}>{element.address}</Text>
             </View>
            </View>
            </Pressable>
            </NativeBaseProvider>
          )
        })
        }
        </View>
        

        <View>
      <Text style={style.titletext}> Category</Text>
      </View>
      
      <NativeBaseProvider>
      <Button onPress={() => navigation.navigate('CategoryAdd')}>
      <FontAwesomeIcon icon={faAdd} style={{fontSize: 32}} />Add
      </Button>
      <Box>
      <Button colorScheme="secondary"> 
      
      <FontAwesomeIcon icon={faChevronRight} style={{fontSize: 32}} />
      
      </Button>
      </Box>
      </NativeBaseProvider>
       </View>
    </ScrollView>
    
  )
}
function HomeScreenInsideNavigation(){
  return(
  <NavigationContainer independent={true}>
      <Stacker.Navigator initialRouteName="Home">
        <Stacker.Screen name="Home" component={HomeScreen} />
        <Stacker.Screen name="Info" component={InfoScreen} />
        <Stacker.Screen name="CategoryAdd" component={AddCategoryScreen} />
      </Stacker.Navigator>
    </NavigationContainer>)
}

const style = StyleSheet.create({
  titletext:{
    fontWeight: 'bold',
    textAlign: 'left',
    fontSize: 20,
  },
    main:{
    flex: 0.5,
    margin: 20,
    padding:20
  },
  row:{
    flexDirection: "row",
    flexWrap: "wrap",
  },
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
  container:{
    flex: 1,
    paddingTop: 15,
    paddingHorizontal: 30,
    borderRadius: 20,
    backgroundColor: "#f0ff00",
    margin: 20
  }
});
{/*screenOptions={{headerShown: false}}  */}
export default HomeScreenInsideNavigation;