import SQLite from 'react-native-sqlite-storage';

const database = SQLite.openDatabase({
    name: '',
    location: ''
  },
  () => {},
  error => {console.log(error)}
);

const insertrestaurantinfo = () => {
  console.log('Insert Restaurant Record')
  db.transaction((tx) => {
    tx.executeSql(
      'INSERT RESTAURANT () '
      )
  })
}