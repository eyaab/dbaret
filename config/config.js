import firebase from 'firebase' ;



const config = {
    apiKey: "AIzaSyCPdrwuxqKt3YrUrXHorJ80IHry57EAI0k",
    authDomain: "dbaretlyoum-ed9dc.firebaseapp.com",
    databaseURL: "https://dbaretlyoum-ed9dc.firebaseio.com",
    projectId: "dbaretlyoum-ed9dc",
    storageBucket: "",
    messagingSenderId: "578092410329",
    appId: "1:578092410329:web:e5662e9f7c73cd1f"
  };



firebase.initializeApp(config)

export const f=firebase ;
export const database = firebase.database() ;
export const auth= firebase.auth() ;
export const storage= firebase.storage() ;
