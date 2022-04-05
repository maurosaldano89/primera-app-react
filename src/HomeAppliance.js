import React from 'react';

class HomeAppliance extends React.Component{
	constructor(props){
		super(props)
	}
	render(){
		const {name , peso} = this.props.appliance;
		return(
			<li>Nombre de electrodomestico: {name} , peso: {peso} kg</li>
			);
	}
}

export default HomeAppliance;