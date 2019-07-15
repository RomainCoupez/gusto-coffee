import firebase from "firebase";

const config = {
  apiKey: "AIzaSyBBiEMMijgP6I2r8fGV3cdtD4DkazxdcR0",
  authDomain: "gustocoffee-1b9e4.firebaseapp.com",
  databaseURL: "https://gustocoffee-1b9e4.firebaseio.com",
  projectId: "gustocoffee-1b9e4",
  storageBucket: "gustocoffee-1b9e4.appspot.com",
  messagingSenderId: "394565459242",
  appId: "1:394565459242:web:be42691052ee4892"
};

export const db = firebase
  .initializeApp(config)
  .firestore();
