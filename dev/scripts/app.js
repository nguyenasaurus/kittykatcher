import React from 'react';
import ReactDOM from 'react-dom';
import Login from './login';
import ChooseCharCature from './character';
import KittyKatcher from './kittykatcher';

class App extends React.Component {
    render() {
      return (
        <div>
          <Login />
          <ChooseCharCature />
          <KittyKatcher />
        </div>
      )
    }
}

ReactDOM.render(<App />, document.getElementById('app'));
