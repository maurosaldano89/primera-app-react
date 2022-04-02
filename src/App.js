import React from 'react';
import PeopleList from './PeopleList';

class App extends React.Component {
  
  render() {// sobreescribo el metodo render de la clase padre, para que use este
    return ( // render retorna html. Retorna solo 1 elemento padre
      <PeopleList />
    );
  }
}

export default App;