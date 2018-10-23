/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { store  } from './store';
import Home from './Home';
 const App = ()=>{ 
  <Provider store={store}>
    <Home />
  </Provider>
 }
export default App;




