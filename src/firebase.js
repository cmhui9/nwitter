import firebase from 'firebase/app';

const firebaseConfig = {
  apiKey: 'AIzaSyBP_2kk_CFAS9sTpcDTiTY7WXbyHto3G7c',
  authDomain: 'nwitter-9d9cc.firebaseapp.com',
  databaseURL: 'https://nwitter-9d9cc.firebaseio.com',
  projectId: 'nwitter-9d9cc',
  storageBucket: 'nwitter-9d9cc.appspot.com',
  messagingSenderId: '776385993004',
  appId: '1:776385993004:web:0e21c534484bb12b93b489',
};

export default firebase.initializeApp(firebaseConfig);
