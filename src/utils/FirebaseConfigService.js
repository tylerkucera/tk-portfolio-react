import * as firebase from 'firebase/app';

export default class FirebaseConfigService {
  static firebaseConfig = {
    apiKey: 'AIzaSyCo06y1WM2nDfM4EeJ8ltzXBDEOpY76k2Q',
    authDomain: 'tkportfolio-99739.firebaseapp.com',
    databaseURL: 'https://tkportfolio-99739.firebaseio.com',
    projectId: 'tkportfolio-99739',
    storageBucket: 'tkportfolio-99739.appspot.com',
    messagingSenderId: '723010882063',
    appId: '1:723010882063:web:5fd9b246def1f5ed5fb17a',
    measurementId: 'G-60EYQH36XE',
  };

  static initializeApp() {
    firebase.initializeApp(FirebaseConfigService.firebaseConfig);
  }
}
