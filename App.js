import React, { Component }  from 'react';
import { StyleSheet, Text, View,Button, requireNativeComponent } from 'react-native';
import { AppRegistry, Image } from 'react-native';

import {createStackNavigator, createSwitchNavigator, createAppContainer, createDrawerNavigator,createBottomTabNavigator} from 'react-navigation';

import HomeScreen from './screens/HomeScreen' ;
import RecettesScreen from './screens/RecettesScreen' ;
import الوصفات from './screens/الوصفات';
import الاعدادات from './screens/الاعدادات';
import الصفحات from './screens/الصفحات';



 




export default class App extends Component {
  render() {

   
    return <AppContainer/> ;
  }
}


const RecettesTabNavigator=createBottomTabNavigator({
  //  الصفحات ,
   // الوصفات ,
  //  الاعدادات 
  الوصفات
})

const RecettesStackNavigator = createStackNavigator({
 
  RecettesTabNavigator : RecettesTabNavigator

});


const AppDrawerNavigator = createDrawerNavigator(
{
//Recettes :

    screen :  RecettesStackNavigator ,
    App : App
    
},
{
  hideStatusBar: true,
  drawerBackgroundColor: 'rgba(255,255,255,.9)',
  overlayColor: '#6b52ae',
  contentOptions: {
    activeTintColor: '#fff',
    activeBackgroundColor: '#6b52ae',
  },
}


);


const SwitchNavigator = createSwitchNavigator({

    Home : { screen : HomeScreen } ,
    Recettes : { screen : AppDrawerNavigator }

}) ;

const AppContainer= createAppContainer(SwitchNavigator) ;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
