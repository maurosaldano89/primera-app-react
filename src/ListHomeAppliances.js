import React from 'react';
import HomeAppliance from './HomeAppliance';

class ListHomeAppliances extends React.Component{
	constructor(props){
		super(props)
		const homeAppliances = [
			{
				'name' : 'Lavarropas',
				'peso' : 35
			},
			{
				'name' : 'Televisor',
				'peso' : 20
			},
			{
				'name' : 'Heladera',
				'peso' : 55
			},
			{
				'name' : 'Cocina',
				'peso' : 15
			}
		];

		this.state = {
			homeAppliances: homeAppliances
		}
	}

	onAddNewButtonClicked = () => {
		console.log("Entro al click en la funcion");
		const newTv = {
			'name' : 'Televisor',
			'peso' : 43
		};

		// cadavez que se setea una parte del state, no se modifica sino que se pasa una nueva (inmutabilidad)

		// Lo que NO se hace
		// this.state.homeAppliances.push(newTv); // Estoy cambiando el original, NO!

		// Opcion 1: Hago una copia con spread operator y agrego al final con push (no modifico el original)
		const newHomeAppliances = [...this.state.homeAppliances];
		// newHomeAppliances.push(newTv); // Agrega al final
		newHomeAppliances.unshift(newTv); // Agrega al ppio

		// Opcion2: Agrego el nueo item al ppio o al final solo con spread operator
		// const newHomeAppliances = [newTv, ...this.state.homeAppliances];
		// const newHomeAppliances = [...this.state.homeAppliances, newTv];

		// const newHomeAppliances = this.state.homeAppliances.push(newTv) // Estoy cambiando el original, NO!
		this.setState({
			homeAppliances: newHomeAppliances
		})
	}

	onDeleteButtonClicked = () => {
		console.log('borrando');

		// Tengo que evitar cambiar el state original
		// 1. Hago una copia del array
		const newHomeAppliances = [...this.state.homeAppliances]
		// 2. Elimino/actualizo la copia (no el original)
		newHomeAppliances.pop();
		// 3. Llamo a setState seteando esa copia
		this.setState({
			homeAppliances: newHomeAppliances
		})
	};

	// Llamar a setState hace que se llame a render
	render(){
		const homeAppliancesList = this.state.homeAppliances.map((appliance, idx)=>{
			return <HomeAppliance key={idx} appliance= {appliance} />
		})

		return (
			<div>
				<ul>{homeAppliancesList}</ul>
				<button onClick={this.onAddNewButtonClicked}>Agregar Nuevo	</button>
				<button onClick={this.onDeleteButtonClicked}> Borrar </button>
			</div>
		);
	}
} 

export default ListHomeAppliances;