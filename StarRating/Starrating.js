import React, { Component } from 'react';
import {
	StyleSheet,
	View,
	Text
} from 'react-native';

/*type Props = {
	ratingObj : {
	  ratings: number;
	  views: number;
	}
  };*/
  let stars = [];
  var i ;
export default class StarRating extends Component {
	
    
	render() {
		let ratingObj = this.props.ratingObj;

		return (
			<View style={ styles.container }>
            
                
             {<Text style={{ color :'#FFBF00'}}> ★</Text>}
            
                
             {<Text style={{ color :'#FFBF00'}}> ★</Text>}
            
                
             {<Text style={{ color :'#FFBF00'}}> ★</Text>}
            
                
             {<Text style={{ color :'#E6E6E6'}}> ★</Text>}
            
                
             {<Text style={{ color :'#E6E6E6'}}> ★</Text>}
			 <Text style={{ fontSize: 14, marginLeft: 10,marginRight: 10}}>({ratingObj.views})</Text>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		alignItems: 'center',
		flexDirection: 'row'
        
	}
});
//https://medium.com/@hassanahmedkhan/simple-ratings-view-in-react-native-59a0ceb2d13f