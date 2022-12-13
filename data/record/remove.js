import * as SQLite from 'expo-sqlite';
import {dbName} from '../database/db';
const db = SQLite.openDatabase(dbName);

const deleteAllRestaurantData = () => {
  db.transaction(tx => {
    tx.executeSql('TRUNCATE TABLE Restaurant'),
    [],
    (txObj, resultSet) => {
      console.log('Successfully Delete All Data from Restaurant');
    },
    (txObj,error) => {
      console.log('Error:', error)
    }
  })
}

const deleteAllCommentData = () => {
  db.transaction(tx => {
    tx.executeSql('TRUNCATE TABLE Comment'),
    [],
    (txObj, result) =>{
     console.log('Successfully Delete All Data from Restaurant');
    },
    (txObj,error) => {
      console.log('Error:', error)
    }
  })
}

const deleteRestaurantRecord = (name) => {
    db.transaction(tx => {
      tx.executeSql('DELETE FROM Restaurant WHERE name=?'),
      [name],
      (txObj, resultSet) => {
        console.log('SUCCESSFULLY DELETE RESTAURUANT RECORD')
      },
      (txObj,error) => {
        console.log('Error:', error)
      }
    })
  }

  const deleteCommentRecord = (id) => {
    db.transaction(tx => {
        tx.executeSql('DELETE FROM RESTAURANT WHERE id=?'),
        [id],
        (txObj, resultSet) => {
          console.log('SUCCESSFULLY DELETE COMMENT RECORD')
        },
        (txObj,error) => {
          console.log('Error:', error)
        }
      })
  }

