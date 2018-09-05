import React from 'react';
import {Text} from 'react-native';

class Judul extends React.Component{
	render(){
		return(
			<Text style={salon.judul}
			>BIODATA</Text>
			)
	}
}
const salon ={
	judul:{
		color: 'blue',
		fontsize: 50,
		backgroundColor: 'white'
	}
}
export default Judul;