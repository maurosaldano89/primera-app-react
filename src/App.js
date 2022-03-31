import React from 'react';
import Persona from './Persona';
import Mascota from './Mascota';

class App extends React.Component {
  render() {// sobreescribo el metodo render de la clase padre, para que use este
    return ( // render retorna html. Retorna solo 1 elemento padre
      <div>
        <ul>
          <Persona name='Mauro P' age='32' />
          <Persona name='Mauro S' age='32' />
        </ul>
        <ul>
          <Mascota name='Tito' tipo='Perro' age={3}/>
          <Mascota name='Pipo' tipo='Gato' age={5}/>
          <Mascota name='Pepe' tipo='Loro' age={2}/>
        </ul>
      </div>
    )
  }
}

export default App;