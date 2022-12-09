import { Text, View, StyleSheet, TextInput, ScrollView } from 'react-native';
import * as yup from "yup";
import { Formik, ErrorMessage} from "formik";
//import {} from 'react-native-stars';
import {NativeBaseProvider,Button, VStack, FormControl, Input, TextArea,Stack, Select, CheckIcon, InputGroup, InputLeftAddon} from 'native-base';
import Constants from 'expo-constants';
import * as React from 'react';
import StarRating from 'react-native-star-rating-widget';
import {useFonts} from 'expo-font';
import {useState, useEffect} from 'react';
import * as ImagePicker from 'expo-image-picker';


const validateSchema = yup.object().shape({
  Comment: yup.string()
  .min(6,'Comment should be more than 6 characters.')
  .max(256,'Comment should be less than 256 characters.')
  .required('Comment should be set between 6 to 256 characters'),
  Price: yup.number()
    .required("Price should not be empty")
    .test(
    'is-decimal',
    'invalid decimal',
    value => (value + "").match(/^\d*\.{1}\d*$/)
    ),
  DishName: yup.string().required(),
  Restaurant: yup.string().required(),
  Rating: yup.string().required()
});

export default function EditScreen({navigation,props}){
  const [Districtdata,setCategoryData] = useState([
    {name:'test1'},
    {name:'test2'}
  ])
  const [DishCategory,setDishCategory] = useState("");
  const [RestaurantName,setRestaurantName] = useState("");
  const [rating, setRating] = useState(0);

    useEffect()
  return (
    <ScrollView>
    <NativeBaseProvider>
    <Formik
      initialValues={{Restaurant: '' ,DishName: '',Comment:'',Rating: '',Category:'', Price:''}}
      validationSchema={validateSchema}
      onSubmit={(values, formikAction) => [console.log(values),formikActions.setSubmitting(true)]}>
         {props => (
                <VStack width="90%" mx="3" maxW="300px">
                  <View>
                    
                  </View>
                <Button colorScheme="danger" onPress={handleReset}>Reset</Button>
                <Button colorScheme="success" onPress={handleSubmit}> Submit</Button>
               </VStack>
              
              )}
    
    </Formik>
    </NativeBaseProvider>
    </ScrollView>
     
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
    fontFamily: 'josefinsans'
  },
  input:{
    height: 40,
    borderRadius: 20,
    margin: 12,
    color: "#808080",
  },
  rating:{
    margin:20
  }
});
