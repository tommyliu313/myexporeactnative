import { Text, View, StyleSheet, Image, ScrollView,Alert } from 'react-native';
import {useState} from 'react';
import { NativeBaseProvider, Button,HStack, VStack, Heading, Stack ,Center, Box,Container,AspectRatio} from "native-base";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import {faPencil,faTrash} from "@fortawesome/free-solid-svg-icons";

import EditScreen from './editinfo';
const Stacker = createNativeStackNavigator();

const PopupWindow = () => {
  Alert.alert(
    "Attention!",
    "Are you sure to delete this information? The action is inversible!",
    [
      {text: "Cancel", onPress:() => console.log("No need to delete account")},
      {text: "Yes", onPress:() => console.log("Delete his account")}
    ]
  )
}
function InfoScreen({navigation}){
  const [data,setData] = useState();
  return (
    <NativeBaseProvider>
    <ScrollView>
      <VStack>

      <Box alignItems="center">
      <Box maxW="100%" rounded="lg" overflow="hidden" borderColor="coolGray.200" borderWidth="1" _dark={{
      borderColor: "coolGray.600",
      backgroundColor: "gray.700"
    }} _web={{
      shadow: 2,
      borderWidth: 0
    }} _light={{
      backgroundColor: "gray.50"
    }}>
        <Box>
          <AspectRatio w="100%" ratio={16 / 9}>
            <Image source={{
            uri: "https://www.holidify.com/images/cmsuploads/compressed/Bangalore_citycover_20190613234056.jpg"
          }} alt="image" />
          </AspectRatio>
          <Center bg="violet.500" _dark={{
          bg: "violet.400"
        }} _text={{
          color: "warmGray.50",
          fontWeight: "700",
          fontSize: "xs"
        }} position="absolute" bottom="0" px="3" py="1.5">
            PHOTOS
          </Center>
        </Box>
        <Stack p="4" space={3}>
          <Stack space={2}>
            <VStack style={style.row}>
              <HStack space={30}>
            <Heading size="md" ml="-1">
              Restaurant Name
            </Heading>
             <Button onPress={() => navigation.navigate('EditInfo')}>
              <FontAwesomeIcon icon={faPencil}/>
            </Button>
              <Button onPress={() => PopupWindow()}>
              <FontAwesomeIcon icon={faTrash} />
               </Button>
            </HStack>
            </VStack>
            <Container>
              <Heading>
                Address
              </Heading>
            <Text fontSize="xs" _light={{
            color: "violet.500"
          }} _dark={{
            color: "violet.400"
          }} fontWeight="500" ml="-0.5" mt="-1">
            
            </Text>
            </Container>
          </Stack>
          <Container>
              <Heading>
                Description
              </Heading>
          <Text fontWeight="400">
            
          </Text>
          </Container>
          <Container>
              <Heading>
                Media
              </Heading>


              </Container>
          <HStack alignItems="center" space={4} justifyContent="space-between">
            <HStack alignItems="center">
              <Text color="coolGray.600" _dark={{
              color: "warmGray.200"
            }} fontWeight="400">
                6 mins ago
              </Text>
            </HStack>
          </HStack>
        </Stack>
      </Box>
    </Box>
      </VStack>
      <Button onPress={() => navigation.goBack()}> Back </Button>
    </ScrollView>
  </NativeBaseProvider>
  )
}
export default function RestaurantNavigation(){
  return(
  <NavigationContainer independent={true}>
      <Stacker.Navigator initialRouteName="InfoScreen" screenOptions={{headerShown: false}}>
        <Stacker.Screen name="InfoScreen" component={InfoScreen} />
        <Stacker.Screen name="EditInfo" component={EditScreen} />
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
    margin: 20
  },
  column:{
    flexDirection: "column",

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