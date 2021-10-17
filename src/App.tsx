import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { createGlobalStyle } from "styled-components";
import "./App.css";
import Main from "./page/Main";
import Randing from "./page/Randing";

function App() {
	const GlobalStyles = createGlobalStyle`
    * {
      margin: 0;
      padding: 0;
      border: none;
      outline: none;
      list-style: none;
      text-decoration: none;
      font-family: "Baloo Paaji", "GothicA1-Medium", sans-serif;
    }
    
    body {
      /* background-color: #171717; */
      height: 100%;
      width: 100%;
      overflow: hidden;
      -ms-overflow-style: none;
      /* color: white; */
    } 
    input {
      background-color: rgba(0, 0, 0, 0);
      border: none;
    
      &::placeholder {
        font-size: 18px;
      }
    }
    button {
      background: none;
      cursor: pointer;
    }

    #root {
      width: 100vw;
      height: 100vh;
      padding: 0;
    }
  `;

	return (
		<Router>
			<GlobalStyles />
			<Switch>
				<Route exact path="/">
					<Randing />
				</Route>
				<Route exact path="/main">
					<Main />
				</Route>
			</Switch>
		</Router>
	);
}

export default App;
