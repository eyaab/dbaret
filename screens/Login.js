import React ,{ Component} from 'react' ;
import { StyleSheet, Text, ScrollView,TouchableOpacity ,Image,View,ActivityIndicator } from 'react-native';
import * as Font from 'expo-font';
import firebase from 'firebase' ;
import { Entypo,AntDesign} from '@expo/vector-icons' ;

import expo from 'expo';

const id ="1132417743608607";

export default class Login extends Component {

constructor()
{
super() 

this.state={

    fontLoaded : false 
}

}


login =async()=>{

const {type,token } = await expo.Facebook.logInWithReadPermissionsAsync(id, {permissions : [ 'public_profile,email,user_friends'] })

if (type===success)
{
  const response=fetch(
    `https://graph.facebook.com/me?access_token=${token}&fields=id,name,email,about,picture`
    );
    console.log('response',response);
    const responseJSON = JSON.stringify(await response.json());
    console.log('USER INFO',json);

  try {
    await firebase.auth().signInWithCredential(token) ; } catch({error})  {
         // Handle Errors here.
    alert(`Facebook Login Error: ${error}`);
       };
  }
 else {alert(type);}

}

get button ()
{
  return (
    <TouchableOpacity onPress={()=>this.login}>
    <View style={{  width: 180, 
    height: 40 , borderRadius:5,padding:20,backgroundColor:'#FFFFFF' }}>
    
    <Text style={{ color : '#3b5998'}}>
    <Entypo name='facebook' color="#3b5998" size={20} 
    />    Login to facebook  
    </Text>
  
   
    
    </View>

    </TouchableOpacity>
 
 
 
  )
}






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


</View>


</View>
    

  );
    }




}

const styles= StyleSheet.create({

    container:{
      //   flex: 1,
    //alignItems: 'stretch',
    //justifyContent: 'cover',
   backgroundColor : '#FED45E' 
    }

})