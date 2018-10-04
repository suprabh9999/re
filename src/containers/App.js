import React from 'react';
import Sidebar from "../components/sidebar";
import Main from "../components/main";
import './App.css';
import store  from '../store';
import _ from 'lodash';

const App = () => {
  const { contacts, user, activeUserId  } = store.getState();
  return (
    <div className="App">
      <Sidebar contacts={_.values(contacts)} />
      <Main user={user} activeUserId={activeUserId} />
    </div>
  );
};

export default App;
