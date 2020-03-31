import React from 'react';
import logo from './logo.svg';
import { Route, Switch, useRouteMatch } from "react-router-dom";
import './App.css';

interface IProps {};
export const App = React.memo((props: IProps) => {
  const matchUrl = useRouteMatch()?.url || "";
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
});
