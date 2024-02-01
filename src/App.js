
import React from 'react';
import { Provider } from 'react-redux';
import store from './store';
import HotelList from './components/HotelList';
import "./App.css"

const App = () => {
  return (
    <Provider store={store}>
      <div>
        <h1>Hotel Management Dev201</h1>
         <h2> BENATTOUCH /  IHFA </h2>
        <HotelList />
      </div>
    </Provider>
  );
};

export default App;
