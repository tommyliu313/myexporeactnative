import * as SQLite from 'expo-sqlite';
import {dbName} from '../database/db';
const db = SQLite.openDatabase(dbName);


export function updaterestaurantinfo(){
  console.log('getting restaurant information');
    db.transaction(tx => {
    tx.executeSql(
      'UPDATE Restaurant SET WHERE id = ',
      [],
      (txObj, resultSet) =>{
        console.log('Successfully Update a restaurant record')
      },
      (txObj, error) =>{
        console.log('Error: ', error);
      }
    )
  })
}

export function updatecommentinfo(){
    console.log('getting comment information');
    db.transaction(tx => {
    tx.executeSql('UPDATE COMMENT SET WHERE',
    [],
    (txObj, resultSet) => {
     console.log('Successfully Update a comment record')
    },
    (txObj,error) =>{
      console.log('Error:', error);
    }
    )
    })
}
