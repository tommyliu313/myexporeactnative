import * as SQLite from 'expo-sqlite';
import { useEffect } from 'react';
import {Alert} from 'react-native';
import {dbName} from '../database/db';

const db = SQLite.openDatabase(dbName);

export function insertrestaurantinfo(){

  db.transaction(tx => {
    tx.executeSql(
      'INSERT INTO RESTAURANT (Name, RegionDistrict, Description, Contact1, Contact2) VALUES(?,?,?,?,?,?) ',
      [values.name,values.regiondistrict,values.description,values.contact1,values.contact2],
      (txObj, resultSet) => {
          console.log('CREATE A NEW RESTAURANT RECORD', resultSet.insertId);  
      },
      (txObj,error) => {
        console.log('CREATE A RESTAURANT RECORD FAILURE')
      }
      )
  })
}

export function insertcomment(){
  console.log('Insert Comment Record')
  db.transaction(tx => {
    tx.executeSql(
      'INSERT INTO COMMENT (Name, DishCategory, RestaurantName, Comment, Price) VALUES(?,?,?,?,?) ',
      [value.name, value.category, value.restaurantname, value.comment, value.price],
      (txObj, resultSet) => {
          console.log('CREATE A NEW COMMENT RECORD',resultSet.insertId);
      },
      (txObj,error) => {
          Alert.alert()
      }
      )
  })
}
