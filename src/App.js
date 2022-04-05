import React from 'react';
import PeopleList from './PeopleList';
import ListHomeAppliances from './ListHomeAppliances';

class App extends React.Component {
  
  render() {// sobreescribo el metodo render de la clase padre, para que use este
    return ( // render retorna html. Retorna solo 1 elemento padre
      <div><PeopleList />
      <ListHomeAppliances />
      </div>
    );
  }
}

export default App;