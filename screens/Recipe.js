import React,{Component } from 'react';
import { StyleSheet, Text, ScrollView,Image,View } from 'react-native';
import { EvilIcons, Feather,AntDesign,MaterialCommunityIcons} from '@expo/vector-icons' ;
import {Food} from './Food' ;


export default class Recipe extends Component {

    

render () {

    return (
      <View style={styles.container}>
       <View style={{flex: 1, flexDirection: 'row' , justifyContent: 'space-around',padding : 5 ,}}>

       <Image   
   style={{
  width: 50, 
  height: 50 ,
  borderWidth: 1,
  borderRadius: 75,
  
}}   
 source ={`${this.props.imag  }`}      />

<Text style={styles.userStyle}>{this.props.name }</Text>


<Feather name ="more-horizontal"
    size={32} color="#2A1010" 
    style={{padding :10}}
   />
       </View>
    <Text style={styles.date} > {this.props.date } </Text>
    <Text style={ styles.some} > {this.props.text }  </Text>
    <Text style={ styles.hash} >  {this.props.hash } </Text>    
  
    <Image   
    style={{
  width: 370, 
  height: 300 ,
 padding : 50 ,
  
 
  
}}   
source = {`${this.props.img  }`}   />
 
 
 
    
    <Text style={ styles.com} >  12k comments                                             1k shares  </Text>
    
    <View
  style={{
    
    borderBottomWidth: 1,
    borderBottomColor: '#E6E6E6',
    width: 400,
  }}
/>  

<View style={{flex: 1, flexDirection: 'row' , justifyContent: 'space-around',padding:10 }}>
   <AntDesign name ="pluscircleo"
    size={32} color="#2A1010" 
   style={{padding:2 ,}}
    />
     <Text  style={{padding :7 , }}>Save </Text>
<MaterialCommunityIcons   

name ="comment-processing-outline"
    size={40} color="#2A1010" 
   
/>
<Text style={{padding :7 , }}  >Comment </Text>
<EvilIcons  name ="share-google"
    size={45} color="#2A1010" 
  
/>
<Text style={{padding :7 , }}  >Share </Text>
</View>
    </View>
    
    );

}

}


const styles= StyleSheet.create({

  container:{
       flex: 1,
  //alignItems: 'stretch',
  //justifyContent: 'center',
  backgroundColor: '#FFF7E8'
  },
  
  date: {
  fontSize : 10 ,
  bottom :25 ,
  right :72,
  color :'#363030' ,
  textAlign :'center'
  },
  some :{
  fontSize : 12 ,
  color : 'black',
  fontWeight :'bold',
   left : 20,
   
  },
  userStyle:{
      padding : 10 ,
      right :40,
      fontSize:18,
      color:'black',
      fontWeight:'bold',
      textAlign: 'center'
  },
  hash : {
     left : 20 ,
    fontSize : 12 ,
    color : '#05B4FF',
    fontWeight :'bold',
    padding :5 ,
  },
  com :{
    fontSize : 15 ,
   padding :5 ,
    color :'#363030' ,
    fontWeight :'bold'
  } 
  

});
