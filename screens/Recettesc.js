
import React ,{Component} from 'react' ;
import { Rating, AirbnbRating } from 'react-native-elements';
import { StyleSheet,Platform, Text,Image,View } from 'react-native';
import { Ionicons, FontAwesome,AntDesign,MaterialCommunityIcons} from '@expo/vector-icons' ;
import {BoxShadow} from 'react-native-shadow' ;
import StarRating from '../StarRating/Starrating';
import Video from 'react-native-video';
import MediaControls, { PLAYER_STATES } from 'react-native-media-controls';

export default class Recettesc extends Component {

  
 
render()
{

  const shadowOpt1 = {
    width:170,
    height:280,
    color:"#000",
    border:2,
    radius:3,
    opacity:0.3,
    x:2,
    y:3,
    style:{marginVertical:5}
  }
  const shadowOpt = {
    width:170,
    height:100,
    color:"#000",
    border:2,
    radius:3,
    opacity:0.3,
    x:2,
    y:3,
    style:{marginVertical:5}
  }
  const shadowOpt2 = {
    width:140,
    height:100,
    color:"#000",
    border:2,
    radius:3,
    opacity:0.3,
    x:2,
    y:3,
    style:{marginVertical:5}
  }
  const ratingObj = {
    ratings: 3,
    views: 34000
  }

return (
  <View style={styles.container}>
<View   style={{flex: 1, flexWrap:'wrap', flexDirection: 'column' , justifyContent: 'space-between',alignContent: 'space-between',padding:10, elevation :5 }}>
<BoxShadow setting={shadowOpt}>
<Image
style ={{
    width: 170, 
  height: 100 ,
}}
source = {`${this.props.image}`} />
</BoxShadow>
<View
  style={{
    padding :5 ,
    borderBottomWidth: 5,
    borderBottomColor: '#E6E6E6',
    width: 170,
  }}
/>  
<BoxShadow setting={shadowOpt1}>
<View style={{backgroundColor: '#FED45E' , width :170, padding : 5, borderRadius :5 , }} >

<Text  style ={{ fontSize :18 ,color :"#FFFFFF"}}> Ingrédients : </Text>
 <Text style ={{ fontSize :13 ,color :"#FFFFFF"}}>- 1 kg de spaghetti</Text> 
 <Text  style ={{ fontSize :13 ,color :"#FFFFFF"}}>- 100 g de concentré de tomate </Text>     
<Text  style ={{ fontSize :13 ,color :"#FFFFFF"}}>- 2 c. à soupe d'huile d'olive  </Text>
 <Text  style ={{ fontSize :13 ,color :"#FFFFFF"}}>- 4 petites oignons </Text>
 <Text  style ={{ fontSize :13 ,color :"#FFFFFF"}}>- 1 gousse d'ail </Text>
 <Text  style ={{ fontSize :13 ,color :"#FFFFFF"}}>- 70 g de parmesan </Text>
 <Text  style ={{ fontSize :13 ,color :"#FFFFFF"}}>- 1 pincée de persil</Text>
 <Text  style ={{ fontSize :13 ,color :"#FFFFFF"}}>- 1 pincée de piment doux</Text>
 <Text  style ={{ fontSize :13 ,color :"#FFFFFF"}}>- 1 pincée de thym</Text>
 <Text  style ={{ fontSize :13 ,color :"#FFFFFF"}}>- 2 feuilles de laurier</Text>
 <Text  style ={{ fontSize :13 ,color :"#FFFFFF"}}>- 2 feuilles de basilic</Text>
 <Text  style ={{ fontSize :13 ,color :"#FFFFFF"}}>- 1 pincée d'origan </Text>
 <Text  style ={{ fontSize :13 ,color :"#FFFFFF"}}>-  sel, poivre



    </Text>
    </View>
    </BoxShadow>
    <BoxShadow setting={shadowOpt2} >
    <View   style={{ backgroundColor : '#835837' , width :140 ,  flex :1,  borderRadius :5 ,padding :10,  }}  >
<View  style={{flex: 1, flexDirection: 'row' , justifyContent: 'space-between', }}>

<FontAwesome name='user' size={20} color='#FFFFFF'/>

<Text  style={{color: '#FFFFFF', fontSize :10 }} > {this.props.nbper}    </Text>

<Ionicons   name='md-time' size={20} color='#FFFFFF'  />    

<Text  style={{ color:'#FFFFFF' ,fontSize :10}}>{this.props.timer }</Text>
  
</View>
<View  style={{flex: 1, flexDirection: 'row' , justifyContent: 'space-between', }}>
<Image    
style={{
  width :17 ,
  height :20
}}
source={require('../assets/micro.png.png')}
/>
<Text style={{ color:'#FFFFFF',fontSize :10 }}>{ this.props.tfour}  </Text>
<FontAwesome  name='euro' size={20} color='#FFFFFF'  />
<Text style={{ color:'#FFFFFF',fontSize :10 }}>{ this.props.money} </Text>


   </View>
   <View  style={{flex: 1, flexDirection: 'row' , justifyContent: 'space-between', }}>
     <Ionicons  name='md-more' size={20} color='#FFFFFF'  />
     <Text style={{ color:'#FFFFFF',fontSize :10 }}> facile   </Text>
     <MaterialCommunityIcons name='fire' size={20} color='#FFFFFF'/>
     <Text style={{ color:'#FFFFFF' ,fontSize :10}}>200kcal</Text>
     
     
     </View>  

</View>
</BoxShadow>
<View style={{backgroundColor: '#FFF7E8' , width :150, marginTop:10 ,marginLeft :30 }} >

<Text style ={{ fontSize : 17,fontWeight:'bold', /*margin: 24,*/  textAlign:'center' }} >Spaghetti à la sauce tomate </Text>


<AirbnbRating 
ratingColor='#FFFFFF'
  count={5}
 
  defaultRating={5}
  size={10}
  showRating={ true }
/>



<View  style={{ marginLeft :70 ,backgroundColor:'#3E69BE',borderRadius:2 }}>
<Text style={{ color :'#FFFFFF',}}> ★ voter </Text>
</View>
<View  style={{ marginLeft :70 ,backgroundColor:'#FED45E',borderRadius:2 ,marginTop:4, flexDirection: 'row' }}>
<AntDesign   name='pluscircleo' color ='#2A1010' size={13} marginTop={8} /> 
<Text style={{ color :'#2A1010'}} >  Save</Text>
</View>
<Text  style={{ fontSize :14 , fontWeight:'bold', color :'#835837',textDecorationLine:'underline'}}> 
Préparation :
</Text >

<Text style ={{ fontSize :14 , fontWeight:'bold'}}>ÉTAPE 1 :</Text>
<Text style={{ fontSize :10,}}>
 { this.props.etape1}
</Text>
<View
  style={{
    padding :5 ,
    borderBottomWidth: 5,
    borderBottomColor: '#E6E6E6',
    width: 150,
  }}
/> 
<Text style ={{ fontSize :14 , fontWeight:'bold'}}>ÉTAPE 2 :</Text>
<Text  style={{ fontSize :10,}}>
{this.props.etape2}
</Text>
<View
  style={{
    padding :5 ,
    borderBottomWidth: 5,
    borderBottomColor: '#E6E6E6',
    width: 150,
  }}
/>

<Text style ={{ fontSize :14 , fontWeight:'bold'}}>ÉTAPE 3 :</Text> 
<Text  style={{ fontSize :10,}}>
{ this.props.etape3}
</Text>
</View>
</View>
</View>
    
);}}

const styles= StyleSheet.create({

  container:{
       flex: 1,
       flexWrap:'wrap',
  //alignItems: 'stretch',
  //justifyContent: 'center',
  backgroundColor: '#FFF7E8' ,
 // marginTop: 20


 
  },

















})
//296d98 <StarRating ratingObj={ratingObj}/>


















