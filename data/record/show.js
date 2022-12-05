import SQLite from 'react-native-sqlite-storage';

const database = SQLite.openDatabase({
    name: '',
    location: ''
  },
  () => {},
  error => {console.log(error)}
);


const getrestaurantinfo = () => {
  try{
    db.transaction((tx) => {
    tx.executeSql()
  })
  }catch(error){
    console.log(error);
  }
}

const getcommentinfo = () => {
  try{
    db.transaction((tx) => {
    tx.executeSql('
    SELECT * FROM COMMENT 
    ')
  })
  }catch(error){
    console.log(error);
  }
}
