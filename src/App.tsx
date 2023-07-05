import React, { FC } from 'react';
import AddPizzaForm from './components/AddPizzaForm';

import './App.css';


const App: FC = () =>{
  return (
    <div className="App" style={{ background: '#333', color: 'white'}}>
      <div className="wrap">
        <span className="heading">Наша пицерия</span>
        <AddPizzaForm />
      </div>
    </div>
  );
}

export default App;
