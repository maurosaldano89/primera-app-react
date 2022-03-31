import React from 'react';

class Persona extends React.Component {
  constructor(props){
    super(props);
  }

  render() {
    return (
      <p>Nombre: {this.props.name}, edad: {this.props.age}</p>
    );
  }
}

export default Persona;