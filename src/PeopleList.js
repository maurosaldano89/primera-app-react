import React from 'react';
import Person from './Person';

class PeopleList extends React.Component {
	constructor(props){
		super(props);
		this.people = [
      {'name' : 'Pepe',
      'id' : '25164651'
    },
      {'name' : 'Luis',
      'id' : '51166651'
    },
      {'name' : 'Jorge',
      'id' : '12346841'
    }
    ];
	}

	render() {
		const peopleList = this.people.map((person) => {
			return <Person key={person.id} person={person} />
		});

		return (
			<ul>{peopleList}</ul>
		);
	}
}

export default PeopleList;