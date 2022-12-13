import {  View, StyleSheet, TextInput, ScrollView, FlatList, Image } from 'react-native';
import * as yup from 'yup';
import { Formik, ErrorMessage} from "formik";
//import {} from 'react-native-stars';
import {NativeBaseProvider,Button, VStack, FormControl, Input, TextArea,
  Stack, Select, CheckIcon, InputGroup, InputLeftAddon, useDisclose,
  Container, Heading, Actionsheet, Text} from 'native-base';
import Constants from 'expo-constants';
import * as React from 'react';
import StarRating from 'react-native-star-rating-widget';
import {useState,useEffect} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import {faUpload} from '@fortawesome/free-solid-svg-icons';
import * as ImagePicker from 'expo-image-picker';
import insertcomment from '../../data/record/insert';

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
  DishName: yup.string().required('This field cannot be empty')
  .min(6,'Dish Name should be more than 6 characters.')
  .max(256,'Dish Name should be less than 256 characters.')
  .required('Dish Name should be set between 6 to 256 characters'),

  RestaurantName: yup.string().required('This field cannot be empty'),

  Rating: yup.string().required('This field cannot be empty'),

  DishCategory: yup.string().required('This field cannot be empty')
});


export default function CommentScreen({navigation,props}){
  const [categorydata,setCategoryData] = useState([
    {name:'test1'},
    {name:'test2'}
  ])
  const [RegionDistrict, setRegionDistrict] = useState(null);
  const {isOpen, onOpen, onClose} = useDisclose();
  const [DishCategory,setDishCategory] = useState(null);
  const [RestaurantName,setRestaurantName] = useState(null);
  const [rating, setRating] = useState(0);
  const [images,setImages] = useState({'assetid':''});
  const [RestaurantNameList,setRestaurantNameList] = useState([
    {name:"test1"},
    {name:"test2"}
  ]);
  const [pickPermission, requestPickPermission] = ImagePicker.useCameraPermissions();
  
  const takephoto = async()=>{};

  const takevideo = async()=>{
  };

  const pickphoto = async() => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsMultipleSelection: true,
      aspect: [16, 9],
      quality: 1,
      
    });

    console.log(result);

    if (!result.canceled) {
      setImages(result.assets ? result.assets : result.selected);
    }

  }
  const ImageRendering = async({uri:image}) => {
    <Image style={styles.circle} source={{ uri: image }} />
  }


  return (
    <ScrollView>
    <NativeBaseProvider>
    <Container>
        <Heading  style={{ padding:20, margin:10 }}>
          <Text mt="3">You are currently in: Giving Restaurant Comment</Text>
        </Heading>

      </Container>
    <Formik
      initialValues={{RestaurantName:'',DishName: '',Comment:'',Rating: '',DishCategory:'', Price:''}}
      validationSchema={validateSchema}
      onSubmit={(values,formikActions) => [console.log(values), formikActions.setSubmitting(true)]}>
         {(props) => (
                <VStack width="90%" mx="3" maxW="300px">
                

                  <FormControl isRequired>
                  <FormControl.Label _text={{bold: true}}> Restaurant Name </FormControl.Label>
                    <Select selectedValue={RestaurantNameList.selected} minWidth="200" accessibilityLabel="Choose Restaurant" placeholder="Choose Restaurant"
                    _selectedItem={{bg: "teal.600", endIcon: <CheckIcon size="5" />}} mt={1} 
                    onValueChange={itemValue => setRestaurantName(itemValue)}>
                      {RestaurantNameList.map(x => {
                         return (
                           <Select.Item
                             label={x.name}
                             value={x.name}
                           />
                         );
                       })}
                    </Select>
                    {props.errors.RestaurantName && props.touched.RestaurantName ? (<Text highlight _ dark={{ color: "emerald" }}>{props.errors.RestaurantName}</Text>) : null}
                  </FormControl>


                <FormControl isRequired>
                <FormControl.Label _text={{bold: true}}>Dish Name </FormControl.Label>
                <Input placeholder="Name of the Dish" value={props.values.DishName}       />
                {props.errors.DishName && props.touched.DishName ? (<Text highlight _ dark={{ color: "emerald" }}>{props.errors.DishName}</Text>) : null}
                </FormControl>

               <FormControl isRequired>   
                <FormControl.Label _text={{bold: true}}> Comment </FormControl.Label>

                <TextArea placeholder="Type your comment inside." 
                value={props.values.Comment}                
                />
                {props.errors.Comment && props.touched.Comment ? (<Text highlight _ dark={{ color: "emerald" }}>{props.errors.Comment}</Text>) : null}
                  </FormControl>  

                  <FormControl isRequired>
                  <FormControl.Label _text={{bold: true}}> Dish Category </FormControl.Label>
                    <Select selectedValue={DishCategory} minWidth="200" accessibilityLabel="Choose Service" placeholder="Choose Service" _selectedItem={{
        bg: "teal.600",
        endIcon: <CheckIcon size="5" />
      }} mt={1} onValueChange={itemValue => setDishCategory(itemValue)}>
        {categorydata.map(x => {
            return (
              <Select.Item
                label={x.name}
                value={x.name}
              />
            );
          })}
        </Select>
        {props.errors.DishCategory && props.touched.DishCategory ? (<Text highlight _ dark={{ color: "emerald" }}>{props.errors.DishCategory}</Text>) : null}
                  </FormControl>

                  <FormControl isRequired>
                  <FormControl.Label _text={{bold: true}}> Price </FormControl.Label>
                  <InputGroup w={{
      base: "70%",
      md: "285"
    }}>
        <InputLeftAddon children={"HK$"} />
          <Input w={{base: "100%",md: "100%"}} placeholder="eg: 25.50"
           values={props.values.Price}
       />
      </InputGroup>
      {props.errors.Price && props.touched.Price ? (<Text highlight _ dark={{ color: "emerald" }}>{props.errors.Price}</Text>) : null}
                 </FormControl>
                 <FormControl isRequired>
                  <FormControl.Label _text={{bold: true}}> Rating(Maximum 5 Stars) </FormControl.Label>
                  
                  <StarRating
                    rating={rating}
                    onChange={(e)=>{setRating,
                    console.log(
                    "onChange::",
                    e.currentTarget
                  );
                  values.Rating = e.currentTarget;
                }}
      />

</FormControl>

              <FormControl isRequired>
                  <FormControl.Label _text={{bold: true}}> Media </FormControl.Label>
                  {images && <Image source={{ assets: images }} style={{ width: 200, height: 200 }} />}
                    <Button leftIcon={<FontAwesomeIcon icon={faUpload} style={{fontSize: 32}} />} onPress={onOpen} colorScheme="primary">
                        Upload Your Media Files
                      </Button>
                      <Actionsheet isOpen={isOpen} onClose={onClose}>
                      <Actionsheet.Content>
                      <Actionsheet.Item onPress={takephoto}>Picture</Actionsheet.Item>
                      <Actionsheet.Item onPress={pickphoto}>Picture that exists in your media folder</Actionsheet.Item>
                      <Actionsheet.Item onPress={takevideo}>Video</Actionsheet.Item>
                      </Actionsheet.Content>
                      </Actionsheet>

            </FormControl>

                <Button colorScheme="danger" onPress={props.handleReset}>Reset</Button>
                <Button colorScheme="success" onPress={props.handleSubmit}> Submit</Button>
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
  },
  circle:{
    borderRadius: 20,
    margin: 0,
    padding: 30,
    height: 'auto',
    width: 'auto'
  }
});