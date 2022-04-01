import React from 'react';

class Mascota extends React.Component {
	constructor(props) {
		super(props);
	}
	render(){
		// https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment#desestructuraci%C3%B3n_de_objetos
		const {name, tipo, age, vacunas} = this.props;
		const listadoVacunas = (vacunas || []).map((vacuna) => <li>{vacuna.name}</li>);
		// si vacunas es undefined, itero [], para no iterar algo que no existe

		return (
				<div>
					<p>Nombre: {name}, tipo de mascota: {tipo}, edad: {age}</p>
					<div>Vacunas: <ul>{listadoVacunas}</ul></div>
				</div>
			)
	}
}




export default Mascota;