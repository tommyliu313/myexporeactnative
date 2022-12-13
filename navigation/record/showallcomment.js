import * as SQLite from 'expo-sqlite';
import {dbName} from '../database/db';
import { StyleSheet, Button, TextInput, View, FlatList } from 'react-native';
import getrestaurantinfo from '../../data/record/show';
import { useEffect } from 'react';
export default function ShowallrecordScreen(){
    useEffect(() =>{
        getrestaurantinfo()
    },[]
    );
    return(
        <FlatList>
            
        </FlatList>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 24
    },
    textInput: {
        borderWidth: 1,
        borderColor: '#ddd',
        padding: 10,
        fontSize: 18,
        borderRadius: 6,
    }
})