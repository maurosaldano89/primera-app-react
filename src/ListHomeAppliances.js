import React from 'react';
import HomeAppliance from './HomeAppliance';

class ListHomeAppliances extends React.Component{
	constructor(props){
		super(props)
		const homeAppliances = [
			{
				'id' : 1,
				'name' : 'Lavarropas',
				'peso' : 35
			},
			{
				'id' : 24,
				'name' : 'Televisor',
				'peso' : 20
			},
			{
				'id' : 3,
				'name' : 'Heladera',
				'peso' : 55
			},
			{
				'id' : 14,
				'name' : 'Cocina',
				'peso' : 15
			}
		];

		this.state = {
			homeAppliances: homeAppliances
		}
	}

	onAddNewButtonClicked = () => {
		// Tomar todos los ids, sacar el mayor y sumarle 1 para tener el nuevo id
		const ids = this.state.homeAppliances.map((obj) => {
				return obj.id;
		})

		const newId = Math.max(0, ...ids) + 1; // obtengo el maximo de los elementos pasados, por ej: Math.max(1, 6, 3)
		const newTv = {
			'id' : newId,
			'name' : 'Televisor',
			'peso' : 43
		};

		// cada vez que se setea una parte del state, no se modifica sino que se pasa una nueva (inmutabilidad)

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

	onDelete = (itemId) => {
		console.log('borrando', itemId);
		// tenemos que borrar del array homeAppliances del state un elemento que tenga el id == a itemId
		// filter devuelve un NUEVO array (inmutabilidad, no cambie el original) con los elementos que cumplen con la condicion booleana de la funcion pasada
		const filteredAppliances = this.state.homeAppliances.filter((obj) => { return obj.id != itemId })
		
		this.setState({
			homeAppliances: filteredAppliances // reemplazo esa parte del state con la clave homeAppliances por el nuevo array
		})
	}

	// Llamar a setState hace que se llame a render
	render(){
		const homeAppliancesList = this.state.homeAppliances.map((appliance)=>{
			return <HomeAppliance key={appliance.id} appliance={appliance} deleteFunc={ () => { this.onDelete(appliance.id) } }/>
		})

		return (
			<div>
				<ul>{homeAppliancesList}</ul>
				<button onClick={this.onAddNewButtonClicked}>Agregar Nuevo	</button>
			</div>
		);
	}
} 

export default ListHomeAppliances;