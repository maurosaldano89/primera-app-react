import React from 'react';

class HomeApplianceForm extends React.Component{
	constructor(props){
		super(props);
		
		this.state = {
			name: '',
			weight: ''
		};
	}

	// React llama a este metodo (si existe) cuando cambian las props pasadas
	componentWillReceiveProps(nextProps) {
		const { appliance } = nextProps;

		this.setState({
			name: appliance ? appliance.name : '',
			weight: appliance ? appliance.weight : ''
		});
	}

	onFormSubmit = (event) => {
		event.preventDefault(); // evita que el formulario recargue la pagina
		const {onSave, appliance} = this.props;
		const {name, weight} = this.state;
		if(!name || !weight) {
			return false; // no sigo adelante, salgo de este metodo sin ejecutar ninguna linea mas 
		}

		// ahora que se que el form es valido (nombre y peso), veo si estoy editando o creando y llamo a la funcion correspondiente

		const currentAppliance = {
			'name' : name,
			'weight' : weight
		}

		// si estoy editando, appliance de las props NO es null 
		if(appliance) {
			currentAppliance['id'] = appliance.id; // le asigno al nuevo objeto el id del pasado por prop
		}

		onSave(currentAppliance);
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