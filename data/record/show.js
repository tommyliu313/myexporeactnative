import * as SQLite from 'expo-sqlite';
import {dbName} from '../database/db';


export function getrestaurantinfo(){
  console.log('getting restaurant information');
    db.transaction(tx => {
    tx.executeSql(
      'SELECT * FROM Restaurant',
      [],
      (txObj, resultSet) =>{

      },
      (txObj, error) =>{
        console.log('Error: ', error);
      }
    )
  })
}

export function getcommentinfo(){
    console.log('getting comment information');
    db.transaction(tx => {
    tx.executeSql('SELECT * FROM COMMENT',
    [],
    (txObj, resultSet) => {
      for (let i = resultSet.rows.length - 1; i >= 0; i--) {
        let row = resultSet.rows.item(i);
        console.log(row.commentdetail);
      }
    },
    (txObj,error) =>{
      console.log('Error:', error);
    }
    )
    })
}
