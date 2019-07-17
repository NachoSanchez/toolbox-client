import React,{ Component } from 'react';
import { Provider } from 'react-redux';

import Texts from './components/Texts';
import TextForm from './components/Textform';
import store from './store'

class App extends Component {

  render(){

    return(

      <Provider store={ store }>
        <div className="App container">
          <TextForm />
          <Texts />              
        </div>
      </Provider>

    )
  };
}

export default App;
