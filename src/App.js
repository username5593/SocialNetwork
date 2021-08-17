import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import Nav from './components/Nav/Nav';
import Dialogs from './components/Dialogs/Dialogs';
import classes from './App.js';
import { BrowserRouter, Route } from 'react-router-dom';
import Music from './components/Music/Music';
import News from './components/News/News';
import Setting from './components/Setting/Setting';


const App = () => {
  return (
    <BrowserRouter>
      <div className='wrapper'>
        <Header />
        <Nav />
        <div className={classes.contentWrapper}>
          <Route path='/Main' component={Main} />
          <Route path='/Dialogs' component={Dialogs} />
          <Route path='/News' component={News} />
          <Route path='/Music' component={Music} />
          <Route path='/Setting' component={Setting} />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;