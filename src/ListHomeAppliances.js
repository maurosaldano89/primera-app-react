import React from 'react';
import HomeAppliance from './HomeAppliance';
import HomeApplianceForm from './HomeApplianceForm';

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

	onDelete = (itemId) => {
		console.log('borrando', itemId);
		// tenemos que borrar del array homeAppliances del state un elemento que tenga el id == a itemId
		// filter devuelve un NUEVO array (inmutabilidad, no cambie el original) con los elementos que cumplen con la condicion booleana de la funcion pasada
		const filteredAppliances = this.state.homeAppliances.filter((obj) => { return obj.id != itemId })
		
		this.setState({
			homeAppliances: filteredAppliances // reemplazo esa parte del state con la clave homeAppliances por el nuevo array
		})
	}

	onCreate = (newItem) => {
		const ids = this.state.homeAppliances.map((obj) => {
				return obj.id;
		})

		const newId = Math.max(0, ...ids) + 1; // obtengo el maximo de los elementos pasados, por ej: Math.max(1, 6, 3)
		newItem['id'] = newId;
		const newHomeAppliances = [...this.state.homeAppliances, newItem];

		this.setState({
			homeAppliances: newHomeAppliances
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
				<HomeApplianceForm onCreate={this.onCreate}/>
			</div>
		);
	}
} 

export default ListHomeAppliances;