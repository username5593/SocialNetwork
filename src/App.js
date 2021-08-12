import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import Nav from './components/Nav/Nav';

const App = () => {
  return (
    <div className='wrapper'>
      <Header />
      <Nav />
      <Main />
    </div>
  );
}

export default App;