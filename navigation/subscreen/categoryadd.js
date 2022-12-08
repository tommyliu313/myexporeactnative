import { Text, View, StyleSheet, Image, ScrollView } from 'react-native';
import {useState} from 'react';
import {NativeBaseProvider,Button, VStack, FormControl, Input, TextArea,Stack, Select, CheckIcon, InputGroup, InputLeftAddon} from 'native-base';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import {faAdd,faChevronRight} from "@fortawesome/free-solid-svg-icons";
import {Formik} from 'formik';
import * as React from 'react';
import * as yup from "yup";

const Stacker = createNativeStackNavigator();

const validateSchema = yup.object().shape({
});

function AddCategoryScreen({navigation}){

  const [service,setService] = React.useState("");
    const [categorydata,setCategoryData] = useState([
    {name:'test1'},
    {name:'test2'}
  ])
  return (
    <NativeBaseProvider>
    <ScrollView>
    <Formik
      initialValues={{Category:""}}
      validationSchema={validateSchema}
      onSubmit={values => console.log(values)}>
         {({errors,values,handleReset,handleSubmit}) => (
              <VStack width="90%" mx="3" maxW="300px">
                <FormControl isRequired>
                <FormControl.Label _text={{bold: true}}> New Category </FormControl.Label>
                <Input placeholder="New Category" onChange={(e)=>{
                  console.log(
                    "onChange::",
                    e.currentTarget.name,
                    e.currentTarget.value
                  );
                  values.Category = e.currentTarget.value;
                }}
                
                />
                <FormControl.HelperText _text={{ fontSize: 'xs'}}> Name should contain at least 3 character. </FormControl.HelperText>
                </FormControl>
                <Button colorScheme="danger" onPress={handleReset}>Reset</Button>
                <Button colorScheme="success" onPress={handleSubmit}> Submit</Button>
                <Button onPress={() => navigation.goBack()}> Back </Button>
              </VStack>
              )}
    
    </Formik>
    </ScrollView>
  </NativeBaseProvider>
  )
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
export default AddCategoryScreen;