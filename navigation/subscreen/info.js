import { Text, View, StyleSheet, Image, ScrollView,Alert, } from 'react-native';
import {useState,useEffect} from 'react';
import { NativeBaseProvider, Button,HStack, VStack, 
  Heading, Stack ,Center, Box,Container,AspectRatio, Modal} from "native-base";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import {faPencil,faTrash,faPhone} from "@fortawesome/free-solid-svg-icons";
import HomeScreen from '../screens/Home';
import * as Linking from 'expo-linking';

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
  const [showEditModal, setShowEditModal] = useState(false);
  
  const EditModal = () =>{
  return(
    <NativeBaseProvider>
    <Modal isOpen={showEditModal} onClose={() => setShowEditModal(false)}>
      <Modal.Content>
        <Modal.CloseButton></Modal.CloseButton>
        <Modal.Header>123</Modal.Header>
        <Modal.Body>123</Modal.Body>
      </Modal.Content>

    </Modal>
    </NativeBaseProvider>
  )}
  useEffect(() =>{
    EditModal();
  })
  return (
    <NativeBaseProvider>
    <ScrollView>
      <VStack>

      <Box alignItems="center">
      <Box maxW="100%" rounded="lg" overflow="hidden" borderColor="warning.200" borderWidth="1" _dark={{
      borderColor: "yellow.600",
      backgroundColor: "emerald.500"
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
        </Box>
        <Stack p="4" space={3}>
          <Stack space={2}>
            <VStack style={style.row}>
              <HStack space={30}>
            <Heading size="md" ml="-1">
              Restaurant Name
            </Heading>
             <Button onPress={() => setShowEditModal(true)}>
              <FontAwesomeIcon icon={faPencil}/>
            </Button>
              <Button onPress={() => PopupWindow()}>
              <FontAwesomeIcon icon={faTrash} />
               </Button>
            </HStack>
            </VStack>
            <Container>
              <Heading>Address</Heading>
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
             Region - District
              </Heading>
          <Text fontWeight="400">
            
          </Text>
          </Container>
          <Container>
              <Heading>
                Dishes
              </Heading>
              <ScrollView horizontal>
                <Image></Image>
          <Text fontWeight="400">
            
          </Text>
          </ScrollView>
          </Container>
          <Container>
              <Heading>
              Contact
              </Heading>
          <Text fontWeight="400">
            Telephone 1
          </Text>
          <Button onPress={() => Linking.openURL('tel://+85296013307')}>
            <FontAwesomeIcon icon={faPhone}/>
            </Button>
          <Text fontWeight="400">
            Telephone 2
          </Text>
          </Container>
          <Container>
              <Heading>
                Media
              </Heading>
            <ScrollView>

            </ScrollView>

              </Container>
          <HStack alignItems="center" space={4} justifyContent="space-between">
            <Button colorScheme="primary" onPress={() => navigation.navigate('Home')}> Back </Button>
          </HStack>
        </Stack>
      </Box>
    </Box>
    
      </VStack>
      
    </ScrollView>
  </NativeBaseProvider>
  )
}

export default function RestaurantNavigation(){
  return(
  <NavigationContainer independent={true}>
      <Stacker.Navigator initialRouteName="InfoScreen" screenOptions={{headerShown: false}}>

        <Stacker.Screen name="InfoScreen" component={InfoScreen} />
        <Stacker.Screen name="Home" component={HomeScreen} />
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