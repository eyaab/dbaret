
import React ,{Component} from 'react' ;
import { StyleSheet, Text, View,Button,ScrollView } from 'react-native';
import {  Image, ImageBackground } from 'react-native';

import Login from './Login' ;
import Recettesc from './Recettesc';
import { Recipeprops } from './Recipeprops';
export default class الاعدادات extends Component {
 

  
  
    render() {
    
      return (
  
          <Recettesc image={Recipeprops[0].image } titre={Recipeprops[0].titre} etape1={ Recipeprops[0].etape1}  
          etape2={ Recipeprops[0].etape2}  
          etape3={ Recipeprops[0].etape3}  
          nbper={ Recipeprops[0].nbper}
          timer={ Recipeprops[0].timer}
          tfour={ Recipeprops[0].tfour}
          money={ Recipeprops[0].money}
          
          
          />
  
        
      );
    }
  }
  //<Login/>
