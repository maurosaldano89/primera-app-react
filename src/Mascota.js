import React from 'react';

class Mascota extends React.Component {
	constructor(props) {
		super(props);
	}
	render(){
		return(
				<p>Nombre: {this.props.name}, tipo de mascota: {this.props.tipo}, edad: {this.props.age}</p>
			)
	}
}




export default Mascota;