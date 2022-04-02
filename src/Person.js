import React from 'react';

class Person extends React.Component {
  constructor(props){
    super(props);
  }

  render() {
    const {name} = this.props.person;
    return (
      <li >Nombre: {name}</li>
    );
  }
}

export default Person;