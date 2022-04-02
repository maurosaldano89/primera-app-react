import React from 'react';

class Person extends React.Component {
  constructor(props){
    super(props);
  }

  render() {
    const {name, id} = this.props.person;
    return (
      <li >Nombre: {name}, Id: {id}</li>
    );
  }
}

export default Person;