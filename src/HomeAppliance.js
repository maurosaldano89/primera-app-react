import React from 'react';

class HomeAppliance extends React.Component{
	constructor(props){
		super(props)
	}
	render(){
		const {appliance, deleteFunc, onEdit} = this.props;
		const {name, weight} = appliance;
		return(
			<li>
				Nombre de electrodomestico: {name} , peso: {weight} kg
				<a href='#' onClick={deleteFunc} >Eliminar</a> {/*LLAMA FUNCION DEL PADRE*/}
				<a href='#' onClick={onEdit} >Modificar</a>
			</li>
			);
	}
}

export default HomeAppliance;