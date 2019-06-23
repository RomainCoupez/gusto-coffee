import firebase from "firebase";

export const db = firebase
  .initializeApp({ projectId: "gustocoffee-1b9e4" })
  .firestore();
