import React from 'react';

class Mascota extends React.Component {
	constructor(props) {
		super(props);
	}
	render(){
		// https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment#desestructuraci%C3%B3n_de_objetos
		const {name, tipo, age} = this.props;

		return(
				<p>Nombre: {name}, tipo de mascota: {tipo}, edad: {age}</p>
			)
	}
}




export default Mascota;