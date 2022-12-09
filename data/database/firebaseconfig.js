import * as React from 'react';
import {initializeApp} from 'firebase/app';
import {getFirestore, setDoc, doc ,deleteField, updateDoc} from 'firebase/firestore';

export function firebaseconfiguration() {
  const firebaseConfig = {
    apiKey: "AIzaSyDsUzH0I9ADm2SHrZ1TzyETmrEPB1M-jrk",
    authDomain: "sigma-cortex-315405.firebaseapp.com",
    databaseURL: "https://sigma-cortex-315405-default-rtdb.firebaseio.com",
    projectId: "sigma-cortex-315405",
    storageBucket: "sigma-cortex-315405.appspot.com",
    messagingSenderId: "917558103826",
    appId: "1:917558103826:web:f00d31b49fecb8e2822dcb"
  }
  initializeApp(firebaseConfig);}
  
export async function sendDataToFirebase(collection, document, content){
  const firestore = getFirestore();

  await setDoc(doc(firestore,collection,document),content);
}
export async function deletedatafromfirebase(collection, document,){
  const firestore = getFirestore();

  await ((firestore,collection,document))
}

/*export async function sendDataToFirebase(){
  const firestore = getFirestore();

  await setDoc(doc(firestore,"users","user_id"),{
  phone: "96013307",
  name:"asdsadcsc",
  age: 127
});
}*/

/*import { doc, updateDoc, deleteField } from "firebase/firestore";

const cityRef = doc(db, 'cities', 'BJ');

// Remove the 'capital' field from the document
await updateDoc(cityRef, {
    capital: deleteField()
});*/
