import React, {Component} from 'react';
import store, {loadSchools} from '../store';
import {Provider} from 'react-redux';


class App extends Component {
  componentDidMount() {
    store.dispatch(loadSchools());
  }
  render() {
    return (
      <Provider store={store}>
        <div>
          //Components

        </div>
      </Provider>
    )
  }
}

export default App
