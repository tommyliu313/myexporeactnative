import { Text, View, StyleSheet, Image, ScrollView } from 'react-native';
import {useState} from 'react';
import { NativeBaseProvider, Button,HStack, VStack,FormControl,Select, Heading, Stack ,Center, Box, Pressable, AspectRatio} from "native-base";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import {faAdd,faChevronRight} from "@fortawesome/free-solid-svg-icons";
import {Formik} from 'formik';
import * as yup from "yup";

const Stacker = createNativeStackNavigator();

const validateSchema = yup.object().shape({
});

function AddCategoryScreen({navigation}){
  const [data,setData] = useState();
  return (
    <NativeBaseProvider>
    <ScrollView>
    <Formik
      initialValues={{Restaurant: '' ,DishName: '',Comment:'',Rating: '',Category:'', Price:''}}
      validationSchema={validateSchema}
      onSubmit={values => console.log(values)}>
         {({errors,values,handleReset,handleSubmit}) => (
              <VStack width="90%" mx="3" maxW="300px">
                <FormControl>
                  <FormControl.Label _text={{bold: true}}> Restaurant Name </FormControl.Label>
                    <Select selectedValue={service} minWidth="200" accessibilityLabel="Choose Service" placeholder="Choose Restaurant"
                    _selectedItem={{bg: "teal.600", endIcon: <CheckIcon size="5" />}} mt={1} onValueChange={itemValue => setService(itemValue)}>
                      {categorydata.map(x => {
                         return (
                           <Select.Item
                             label={x.name}
                             value={x.name}
                           />
                         );
                       })}
                    </Select>
                  </FormControl>
                <FormControl isRequired>
                <FormControl.Label _text={{bold: true}}>Dish Name </FormControl.Label>
                <Input placeholder="Name of the Dish" onChange={(e)=>{
                  console.log(
                    "onChange::",
                    e.currentTarget.name,
                    e.currentTarget.value
                  );
                  values.DishName = e.currentTarget.value;
                }}
                
                />
                <FormControl.HelperText _text={{ fontSize: 'xs'}}> Name should contain at least 3 character. </FormControl.HelperText>
                </FormControl>

               <FormControl>   
                <FormControl.Label _text={{bold: true}}> Comment </FormControl.Label>

                <TextArea placeholder="Type your comment inside." onChange={(e)=>{
                  console.log(
                    "onChange::",
                    e.currentTarget.name,
                    e.currentTarget.value
                  );
                  values.Comment = e.currentTarget.value;
                }}
                
                />
                  </FormControl>  

                  <FormControl>
                  <FormControl.Label _text={{bold: true}}> Dish Category </FormControl.Label>
                    <Select selectedValue={service} minWidth="200" accessibilityLabel="Choose Service" placeholder="Choose Service" _selectedItem={{
        bg: "teal.600",
        endIcon: <CheckIcon size="5" />
      }} mt={1} onValueChange={itemValue => setService(itemValue)}>
        {categorydata.map(x => {
            return (
              <Select.Item
                label={x.name}
                value={x.name}
              />
            );
          })}
        </Select>
                  </FormControl>

                  <FormControl>
                  <FormControl.Label _text={{bold: true}}> Price </FormControl.Label>
                  <InputGroup w={{
      base: "70%",
      md: "285"
    }}>
        <InputLeftAddon children={"HK$"} />
          <Input w={{
        base: "100%",
        md: "100%"
      }} placeholder="eg: 25.50"
      onChange={(e)=>{
                  console.log(
                    "onChange::",
                    e.currentTarget.name,
                    e.currentTarget.value
                  );
                  values.Price = e.currentTarget.value;
                }}
       />
      </InputGroup>
                 </FormControl>
                  <FormControl>
                  <View>

</View>
</FormControl>
                <Button colorScheme="danger" onPress={handleReset}>Reset</Button>
                <Button colorScheme="success" onPress={handleSubmit}> Submit</Button>
           
              </VStack>
              )}
    
    </Formik>
      <Button onPress={() => navigation.goBack()}> Back </Button>
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