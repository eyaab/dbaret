import React, { Component }  from 'react';
import { StyleSheet, Text, View,Button, requireNativeComponent } from 'react-native';
import { AppRegistry, Image } from 'react-native';

import {createStackNavigator, createSwitchNavigator, createAppContainer, createDrawerNavigator,createBottomTabNavigator} from 'react-navigation';




 

class RecettesScreen extends Component {
 
  
    render() {
    
      return (
      <View style= {{ flex:1 ,alignItems:'center',justifyContent:'center'}}>

         <Text> وصفات شهية   </Text>

      </View>
        
      );
    }
  }




class HomeScreen extends Component {
 
  
    render() {
    
      return (
      <View style= {{ flex:1 ,alignItems:'center',justifyContent:'center'}}>

         <Text> مرحبا بكم  في تطبيق دبارة اليوم  </Text>
         <Button title = 'وصفات شهية على العشاء' onPress={()=>this.props.navigation.navigate('Recettes')}/>
         <Button title = 'وصفات تحلية' onPress={()=>alert('لم ننتهي من اعداد هذه الصفحة')}/>
         <Button title = ' اقتراحاتنا' onPress={()=>alert('لم ننتهي من اعداد هذه الصفحة')}/>
         <Button title  =' تقييم الوصفات ' onPress={()=>alert('لم ننتهي من اعداد هذه الصفحة')}/>
         
         
      </View>
        
      );
    }
  }




export default class App extends Component {
  render() {

   
    return <AppContainer/> ;
  }
}

class الصفحات extends Component {
 
  
    render() {
    
      return (
      <View style= {{ flex:1 ,alignItems:'center',justifyContent:'center'}}>

         <Text> الصفحات   </Text>

      </View>
        
      );
    }
  }
  class الوصفات extends Component {
 
  
    render() {
    
      return (
      <View style= {{ flex:1 ,alignItems:'center',justifyContent:'center'}}>

         <Text>  الوصفات   </Text>

      </View>
        
      );
    }
  }


  class الاعدادات extends Component {
 
  
    render() {
    
      return (
      <View style= {{ flex:1 ,alignItems:'center',justifyContent:'center'}}>

         <Text> الاعدادات   </Text>

      </View>
        
      );
    }
  }






const RecettesTabNavigator=createBottomTabNavigator({
    الصفحات ,
    الوصفات ,
    الاعدادات 

})

const RecettesStackNavigator = createStackNavigator({
 
  RecettesTabNavigator : RecettesTabNavigator

});


const AppDrawerNavigator = createDrawerNavigator({

Recettes :{

    screen :  RecettesStackNavigator 
}

});




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
