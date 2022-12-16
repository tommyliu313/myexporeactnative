import { Text, View, StyleSheet, ScrollView } from 'react-native';
import * as yup from "yup";
import { Formik, ErrorMessage,  FormikHelpers as FormikActions} from "formik";
//import {} from 'react-native-stars';
import {NativeBaseProvider,Button, VStack, FormControl, Input, TextArea,Stack, Select, CheckIcon, InputGroup, InputLeftAddon} from 'native-base';
import Constants from 'expo-constants';
import * as React from 'react';
import StarRating from 'react-native-star-rating-widget';
import {useFonts} from 'expo-font';
import {useState, useEffect} from 'react';


const validateSchema = yup.object().shape({
  RegionDistrict: yup.string().required('Required'),
  RestaurantName: yup.string()
  .min(6,'Comment should be more than 6 characters.')
  .max(256,'Comment should be less than 256 characters.')
  .required('Comment should be set between 6 to 256 characters'),
});

export default function RestaurantAddScreen({navigation,props}){
  const [LocationSelect,setLocationSelect]  = useState([
    {name:"Hong Kong & Islands - Eastern"},
    {name:"Hong Kong & Islands - WanChai"},
    {name:"Hong Kong & Islands - CentralWestern"},
    {name:"Hong Kong & Islands - Southern"},
    {name:"Hong Kong & Islands - Islands"},
    {name:"Kowloon - Kwun Tong"},
    {name:"Kowloon - Kowloon City"},
    {name:"Kowloon - Wong Tai Sin"},
    {name:"Kowloon - Yau Tsim"},
    {name:"Kowloon - Mong Kok"},
    {name:"Kowloon - Sham Shui Po"},
    {name:"NewTerritories - Kwai Tsing"},
    {name:"NewTerritories - North"},
    {name:"NewTerritories - Sai Kung"},
    {name:"NewTerritories - Sha Tin"},
    {name:"NewTerritories - Tai Po"},
    {name:"NewTerritories - Tsuen Wan"},
    {name:"NewTerritories - Tuen Mun"},
    {name:"NewTerritories - Yuen Long"},
    
  ])


  const [RegionDistrict, setRegionDistrict] = useState("");
  const [RegionSelect,setRegionSelect] = useState('');

  return (
    <ScrollView>
    <NativeBaseProvider>
    <Formik
      initialValues={{RegionDistrict:'',RestaurantName:''}}
      validationSchema={validateSchema}
      onSubmit={(values, FormikHelpers) => 
      [console.log(values), FormikHelpers.setSubmitting(true)]}>
         {(props) => (
                <VStack width="90%" mx="3" maxW="300px">
                  <View>
                  <FormControl>
                  <FormControl.Label _text={{bold: true}}> RegionDistrict </FormControl.Label>
                    <Select selectedValue={RegionDistrict} minWidth="200" accessibilityLabel="Choose Region-District" placeholder="Choose Region-District"
                    _selectedItem={{bg: "teal.600", endIcon: <CheckIcon size="5" />}} mt={1} 
                    onValueChange={(item) => [props.handleChange('RegionDistrict'), setLocationSelect(item)]}
                    value={props.values.RegionDistrict}>
                      {LocationSelect.map(x => {
                         return (
                           <Select.Item
                             label={x.name}
                             value={x.name}
                           />
                         );
                       })}
                    </Select>
                    {props.errors.RegionDistrict && props.touched.RegionDistrict ? (<div>{props.errors.RegionDistrict}</div>) : null}
                  </FormControl>

                  <FormControl isRequired>
                  <FormControl.Label _text={{bold: true}}> Restaurant Name</FormControl.Label>
                       <Input placeholder='Restaurant'
                       value={props.values.RestaurantName}/>
                       {props.errors.RestaurantName && props.touched.RestaurantName ? (<Text>{props.errors.RestaurantName}</Text>) : null}
                  </FormControl>
                  </View>
                <Button colorScheme="danger" onPress={props.handleReset}>Reset</Button>
                <Button colorScheme="success" onPress={props.handleSubmit}> Add</Button>
                <Button colorScheme="primary" onPress={() => navigation.navigate('Home')}> Back </Button>
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
