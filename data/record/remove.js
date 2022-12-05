import SQLite from 'react-native-sqlite-storage';

const database = SQLite.openDatabase({
    name: '',
    location: ''
  },
  () => {},
  error => {console.log(error)}
);
