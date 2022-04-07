import React from 'react';
import ListHomeAppliances from './ListHomeAppliances';
import SmartphoneList from './SmartphoneList';

class App extends React.Component {
  
  render() {// sobreescribo el metodo render de la clase padre, para que use este
    return ( // render retorna html. Retorna solo 1 elemento padre
      <div>
        <ListHomeAppliances />
        {/*<SmartphoneList />*/}
      </div>
    );
  }
}

export default App;