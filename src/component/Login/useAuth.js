import React, { createContext, useState, Context } from "react";
import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import firebaseConfig from "../firebase.config";
firebase.initializeApp(firebaseConfig)
const { Provider, Consumer } = Context = createContext();


const UserProvider = (props) => {
  
  const [user, setUser] = useState(null);
  //const [cart, setCart] = useState([]);

  const email='mizaan09@gmail.com';
  const password='123456';

  const CreateUser=()=>{ firebase.auth().createUserWithEmailAndPassword(email, password)
    .then(res=>{
      const createdUser=res.user;
      console.log(createdUser);
      return res.user;
    }
    )
    .catch(er =>{
      return er.message;
    }
    
  )};
  console.log('create user ',CreateUser);


  return (
    <Provider value={
      {
        user,
        //cart,
        setUser
       //,setCart
      }
    }>
      {props.children}
    </Provider>
  )

}
export {UserProvider,Consumer,Context };