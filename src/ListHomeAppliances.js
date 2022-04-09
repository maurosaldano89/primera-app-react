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
				'weight' : 35
			},
			{
				'id' : 24,
				'name' : 'Televisor',
				'weight' : 20
			},
			{
				'id' : 3,
				'name' : 'Heladera',
				'weight' : 55
			},
			{
				'id' : 14,
				'name' : 'Cocina',
				'weight' : 15
			}
		];

		this.state = {
			homeAppliances: homeAppliances,
			applianceToEdit: null
		}
	}

	onDelete = (itemId) => {
		console.log('borrando', itemId);
		// tenemos que borrar del array homeAppliances del state un elemento que tenga el id == a itemId
		// filter devuelve un NUEVO array (inmutabilidad, no cambie el original) con TODOS los elementos que cumplen con la condicion booleana de la funcion pasada
		const filteredAppliances = this.state.homeAppliances.filter((obj) => { return obj.id != itemId })
		
		this.setState({
			homeAppliances: filteredAppliances // reemplazo esa parte del state con la clave homeAppliances por el nuevo array
		})
	}

	onSave = (item) => {
		let homeAppliances = []; // React se queja si no esta definido afuera del condicional

		if(!item.id) {
			// es nuevo, tengo que agregarle el id
			const ids = this.state.homeAppliances.map((obj) => {
				return obj.id;
			});
			const newId = Math.max(0, ...ids) + 1; // obtengo el maximo de los elementos pasados, por ej: Math.max(1, 6, 3)
			item['id'] = newId;

			homeAppliances = [...this.state.homeAppliances, item];
		} else { // estoy editando
			// tengo que reemplazar el objeto viejo por el nuevo
			homeAppliances = this.state.homeAppliances.map((obj) => {
				return obj.id == item.id ? item : obj
			});
		}


		this.setState({
			homeAppliances: homeAppliances,
			applianceToEdit: null
		})
	}

	onEdit = (itemId) => {
		// buscar el objeto a editar por id y setearlo en el state para que llame a render
		const applianceToEdit = this.state.homeAppliances.find((item) => item.id == itemId); // find devuelve el primer elemento que cumple con la condicion

		this.setState({
			applianceToEdit: applianceToEdit
		});
	}
 
	// Llamar a setState hace que se llame a render
	render(){
		const homeAppliancesList = this.state.homeAppliances.map((appliance)=>{
			return (
				<HomeAppliance key={appliance.id}
					appliance={appliance}
					deleteFunc={ () => { this.onDelete(appliance.id) }}
					onEdit={ () => { this.onEdit(appliance.id) }}
				/>
			)
		})

		return (
			<div>
				<ul>{homeAppliancesList}</ul>
				<HomeApplianceForm appliance={this.state.applianceToEdit} onSave={this.onSave}/>
			</div>
		);
	}
} 

export default ListHomeAppliances;