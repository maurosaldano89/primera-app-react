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
		const newWeight = event.currentTarget.value
		this.setState({
			weight: newWeight
		})
	}

	render(){
		const {name, weight} = this.state;

		return (
			<form>
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

				<button onClick={this.onFormSubmit}>
					Guardar
				</button>
			</form>
		);
	}
}

export default HomeApplianceForm;