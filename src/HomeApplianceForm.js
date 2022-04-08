import React from 'react';

class HomeApplianceForm extends React.Component{
	constructor(props){
		super(props);

		this.state = {
			name: '',
			weight: ''
		};
	}

	onFormSubmit = (event) => {
		event.preventDefault(); // evita que el formulario recargue la pagina
		const {onCreate} = this.props;
		const {name, weight} = this.state;
		
		const newAppliance = {
			'name' : name,
			'peso' : weight
		}
		// crear un objeto electro
		onCreate(newAppliance);
	}

	handleNameChange = (event) => {
		const newName = event.currentTarget.value
		this.setState({
			name: newName
		})
	}

	handleWeightChange = (event) => {
		const input = event.currentTarget;
		//CURRENTTARGET ES EL ELEMENTO QUE DISPARA EL HTML
		const newWeight = input.value
		this.setState({
			weight: newWeight
		})
	}

	render(){
		const {name, weight} = this.state;

		return (
			<form onSubmit={this.onFormSubmit}>
				<h2>
					Crear nuevo electrodomestico
				</h2>

				<div>
					<label>Nombre</label>
					<input value={name} onChange={this.handleNameChange} />
				</div>

				<div>
					<label>Peso (kg)</label>
					<input value={weight} onChange={this.handleWeightChange}/>
				</div>

				<button>
					Guardar
				</button>
			</form>
		);
	}
}

export default HomeApplianceForm;