

import React ,{Component} from 'react' ;
import { StyleSheet, Text, View,Button, requireNativeComponent } from 'react-native';


export default class HomeScreen extends Component {
 
  
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
