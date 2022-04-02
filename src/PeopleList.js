import React from 'react';
import Person from './Person';

class PeopleList extends React.Component {
	constructor(props){
		super(props);
		this.people = [
      {'name' : 'Pepe'},
      {'name' : 'Luis'},
      {'name' : 'Jorge'}
    ];
	}

	render() {
		const peopleList = this.people.map((person) => {
			return <Person person={person} />
		});

		return (
			<ul>{peopleList}</ul>
		);
	}
}

export default PeopleList;