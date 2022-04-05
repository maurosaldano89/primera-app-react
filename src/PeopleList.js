import React from 'react';
import Person from './Person';

class PeopleList extends React.Component {
	constructor(props){
		super(props);
		this.people = [
      {'name' : 'Pepe'},
      {'name' : 'Luis'},
      {'name' : 'Jorge'},
      {'name' : 'Jorge'}
    ];
	}

	render() {
		const peopleList = this.people.map((person, idx) => {
			return <Person key={idx} person={person} />
		});

		return (
			<ul>{peopleList}</ul>
		);
	}
}

export default PeopleList;

//hacer una app desde cero react y definir un componente con ListadoDeElectrodomesticos que itere componentes Electrodomesticos