import React from 'react';

class HomeAppliance extends React.Component{
	constructor(props){
		super(props)
	}
	render(){
		const {appliance, deleteFunc} = this.props;
		const {name, peso} = appliance;
		return(
			<li>
				Nombre de electrodomestico: {name} , peso: {peso} kg
				<a href='#' onClick={deleteFunc} >Eliminar</a>
			</li>
			);
	}
}

export default HomeAppliance;