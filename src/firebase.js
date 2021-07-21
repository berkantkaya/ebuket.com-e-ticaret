import firebase from 'firebase'


const firebaseConfig = {
    apiKey: "AIzaSyCW8m2ZIibDVJUgUYYpMr3FOAs2oX0XC7Q",
    authDomain: "ebuket-e938d.firebaseapp.com",
    projectId: "ebuket-e938d",
    storageBucket: "ebuket-e938d.appspot.com",
    messagingSenderId: "751860372896",
    appId: "1:751860372896:web:34a05fa0187ac0437f40c5"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  
  
  export { auth };
  export default db;
  
