import * as SQLite from 'expo-sqlite';
import {dbName} from './db';
const db = SQLite.openDatabase(dbName);

export default function createTable(){
    db.transaction(tx => {
      tx.executeSql(
        'CREATE TABLE IF NOT EXISTS Restaurant(id INTEGER PRIMARY KEY AUTOINCREMENT,Name TEXT, RegionDistrict TEXT,Description TEXT, Contact1 TEXT, Contact2 TEXT, Address TEXT)',
        [],
        (txObj, resultSet) => {
          console.log('SUCCESSFULLY CREATE TABLE Restaurant')
        },
        (txObj, error) => {
          console.log('Error:', error)
        }
      )
    }), 
    db.transaction(tx => {
      tx.executeSql(
        'CREATE TABLE IF NOT EXISTS Comment (id INTEGER PRIMARY KEY AUTOINCREMENT,commentdetail TEXT, dishcategory TEXT,Name TEXT,restaurantName TEXT, price NUMERIC, imageuri TEXT)',
        [],
        (txObj, resultSet) => {
          console.log('SUCCESSFULLY CREATE TABLE Comment')
        },
        (txObj, error) => {
          console.log('Error:', error)
        }
      )
    })
  }
