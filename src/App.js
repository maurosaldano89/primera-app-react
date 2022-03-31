import React from 'react';
import Time from './Time';

class App extends React.Component {
  render() {// sobreescribo el metodo render de la clase pare, para que use este
    return ( // render retorna html. Retorna solo 1 elemento padre
      <div>
        <ul>
          <li>Item 1</li>
          <li>Item 2</li>
          <li>Item 3</li>
          <li>Item 4</li>
        </ul>
        <p>asdas</p>
        <Time />
      </div>
    )
  }
}

export default App;