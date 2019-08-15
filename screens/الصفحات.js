


import React ,{Component} from 'react' ;
import { StyleSheet, Text, View,Button,ScrollView } from 'react-native';
import Recipe from './Recipe' ;
import {  Image, ImageBackground } from 'react-native';
import {Food} from './Food' ;


export default class الصفحات extends Component {
 
  
    render() {
    
      return (

      
     <ScrollView >
        <Recipe id ={ Food[1].id} name={ Food[0].name} img={ Food[0].img} imag={ Food[0].imag}  date={Food[0].date} text={Food[0].text}  hash={Food[0].hash}                   />
        <Recipe id ={ Food[0].id} name={ Food[1].name} img={ Food[1].img} imag={ Food[1].imag}  date={Food[1].date} text={Food[1].text}          hash={Food[1].hash}            />   
        <Recipe id ={ Food[1].id} name={ Food[0].name} img={ Food[0].img} imag={ Food[0].imag}  date={Food[0].date} text={Food[0].text}          hash={Food[0].hash}            /> 
        <Recipe id ={ Food[0].id} name={ Food[1].name} img={ Food[1].img}  imag={ Food[1].imag}  date={Food[1].date} text={Food[1].text}     hash={Food[1].hash}                />   
        <Recipe id ={ Food[1].id} name={ Food[0].name} img={ Food[0].img}  imag={ Food[0].imag}  date ={Food[0].date} text={Food[0].text}       hash={Food[0].hash}            />
</ScrollView>
      );
    }
  }
  