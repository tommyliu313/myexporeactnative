import { Text, View, StyleSheet, TextInput, ScrollView } from 'react-native';
import * as yup from "yup";
import { Formik} from "formik";
import FormatText from '../../Component/form';
import {} from 'react-native-stars';
import {NativeBaseProvider,Button, VStack, FormControl, Input, TextArea, Stack, Select, CheckIcon, InputGroup, InputLeftAddon} from 'native-base';
import Constants from 'expo-constants';
import * as React from 'react';
import {useFonts} from 'expo-font';
import {useState} from 'react';

const validateSchema = yup.object().shape({
  Comment: yup.string()
  .min(6,'Comment should be more than 6 characters.')
  .max(256,'Comment should be less than 256 characters.')
  .required('Comment should be set between 6 to 256 characters')
});

export default function CommentScreen({navigation,props}){
  const [data,setData] = useState([
    {name:'test1'},
    {name:'test2'}
  ])
  const [service,setService] = React.useState("");

 
  return (
    <ScrollView>
    <NativeBaseProvider>
    <Formik
      initialValues={{Restaurant: '' ,DishName: '',Comment:'',Rating: ''}}
      onSubmit={values => console.log(values)}>
         {({values,handleReset,handleSubmit}) => (
              <VStack width="90%" mx="3" maxW="300px">
                <FormControl isRequired>
                <FormControl.Label _text={{bold: true}}> Name </FormControl.Label>
                <Input placeholder="John"  value={values.DishName}/>
                <FormControl.HelperText _text={{ fontSize: 'xs'}}> Name should contain atleast 3 character. </FormControl.HelperText>
                </FormControl>

                <FormControl>   
                <FormControl.Label _text={{bold: true}}> Comment </FormControl.Label>

                <TextArea placeholder="John" value={values.Comment} />
                  </FormControl>   

                  <FormControl>
                  <FormControl.Label _text={{bold: true}}> Category </FormControl.Label>
                    <Select selectedValue={service} minWidth="200" accessibilityLabel="Choose Service" placeholder="Choose Service" _selectedItem={{
        bg: "teal.600",
        endIcon: <CheckIcon size="5" />
      }} mt={1} onValueChange={itemValue => setService(itemValue)}>
        {data.map(x => {
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
        base: "70%",
        md: "100%"
      }} placeholder="nativebase" />
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