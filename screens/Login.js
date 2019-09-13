import React ,{ Component} from 'react' ;
import { StyleSheet, Text, TouchableOpacity ,TextInput ,Image,View,ActivityIndicator } from 'react-native';
import * as Font from 'expo-font';
import firebase from 'firebase' ; 
import { Entypo} from '@expo/vector-icons' ;
import { Button, Input  } from 'react-native-elements' ;
import {f,auth,database} from '../config/config.js'
import * as Facebook from 'expo-facebook';

import expo from 'expo';
const fb_app_id ="fb1132417743608607" ;
const id ="1132417743608607";

export default class Login extends Component {

constructor(props)
{
super(props) 

//this.RegisterUser('abdelmoulaeya@yahoo.fr' ,'hellowww') ;

f.auth().onAuthStateChanged(function(user){

if (user){
console.log('Logged in',user) ;
} 
else {

  console.log ('Logged out',user) ;
}



});



this.state={

    fontLoaded : false ,
     text: '', 
     text1:'',
     text2 :'',
     text3 :''
}
}


RegisterUser=(email,password)=>{
  console.log(email,password) ;
  auth.createUserWithEmailAndPassword(email,password)
  .then((userObj)=> console.log(email,password,userObj))
  .catch((error)=>console.log('error logging in',error)) ;
  }
 
logIn=async() => {
  try {
    const {
      type,
      token,
      expires,
      permissions,
      declinedPermissions,
    } = await Facebook.logInWithReadPermissionsAsync(id, {
      permissions: ['public_profile'],
    });
    if (type === 'success') {
      // Get the user's name using Facebook's Graph API
      const response = await fetch(`https://graph.facebook.com/me?access_token=${token}`);
      Alert.alert('Logged in!', `Hi ${(await response.json()).name}!`);
    } else {
      // type === 'cancel'
    }
  } catch ({ message }) {
    alert(`Facebook Login Error: ${message}`);
  }
}


get button ()
{
  return (
   
   
   
<Button
large 
  
//  type="Solid"

  large 
onPress={this.logIn.bind(this)} 
icon={
  <Entypo
    name="facebook"
    size={15}
    color="#FFFFFF"
    
  />
 
}
color="#3b5998"
title="  Login to facebook  "  
fontSize="30"



/>
   

   
    
  )
}
//<TouchableOpacity onPress={()=>this.login}>
//<View style={{  width: 180, height: 40 , borderRadius:5,padding:20, }}>   </View>
  
//</TouchableOpacity>
//<Text style={{ color : '#3b5998'}}><Entypo name='facebook' color="#3b5998" size={20} /> Login to facebook    </Text>

// buttonStyle: color="#3b5998"



async componentDidMount(){
  
  await Font.loadAsync({
    'open-sans-bold': require('../assets/Fonts/OpenSans-Bold.ttf'),
    'open-sans-boldItalic': require('../assets/Fonts/OpenSans-BoldItalic.ttf'),
    'open-sans-Extrabold': require('../assets/Fonts/OpenSans-ExtraBold.ttf'),
    'open-sans-ExtraboldItalic': require('../assets/Fonts/OpenSans-ExtraBoldItalic.ttf'),
    'open-sans-Italic': require('../assets/Fonts/OpenSans-Italic.ttf'),
    'open-sans-Light': require('../assets/Fonts/OpenSans-Light.ttf'),
    'open-sans-LightIttalic': require('../assets/Fonts/OpenSans-LightItalic.ttf'),
    'open-sans-Semibold': require('../assets/Fonts/OpenSans-Semibold.ttf'),
    'open-sans-SemiboldItalic': require('../assets/Fonts/OpenSans-SemiboldItalic.ttf'),
     'Courgette' : require ('../assets/Fonts/Courgette-Regular.ttf')
  });
   
    this.setState ({
        fontLoaded :true 
    });
}



    render () {
  
  return (

      
<View style={styles.container} >
<View style={{flex: 1, flexDirection: 'column' , justifyContent: 'center',padding : 20 ,alignItems:'center' }}>
<Image 
   style={{
    width: 100, 
    height: 100 , 

}}
source ={ require('../assets/1.png' )}

/>
{this.state.fontLoaded?(
<Text style={
    {
        fontSize : 30 ,
       fontFamily :'Courgette',
   
        color :'#72461D' ,
      
    }
}
> Dbaret lyoum </Text>)
:(<ActivityIndicator size='large'/>)}

{this.button} 


<Text style={{ color : "#FFFFFF"}}> ____________ OR ____________


</Text>
<TextInput
 style={styles.input}
  placeholder='    Mobile Number or Email    '
  shake={true}
  onChangeText={(text) => this.setState({text})}
          value={this.state.text}
/>

<TextInput
 style={styles.input}
  placeholder='    Full Name                              '
  shake={true}
  onChangeText={(text1) => this.setState({text1})}
          value={this.state.text1}
/>

<TextInput
 style={styles.input}
  placeholder='    User Name                             '
  shake={true}
  onChangeText={(text2) => this.setState({text2})}
  value={this.state.text2}

/>
<TextInput
 style={styles.input}
  placeholder='    Password                               '
  shake={true}
  onChangeText={(text3) => this.setState({text3})}
          value={this.state.text3}
/>
</View>

<Button 
large
color="#3b5998"
title="Next"  
fontSize="30"
/>

</View>
    

  );
    }




}

const styles= StyleSheet.create({

    container:{
      //   flex: 1,
    //alignItems: 'stretch',
    //justifyContent: 'cover',
   padding:20 ,
 backgroundColor : '#FED45E' 
    } ,
   
    input :{
   marginBottom :20,
    height :40 ,
    backgroundColor : "#FFFFFF" ,     
    borderRadius: 10,
    top :10 ,
    } 




})