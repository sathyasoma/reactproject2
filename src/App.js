
import './App.css';
import FirstMount from './lifeCycle/FirstMount';
import FirstEffect from './States/Effects/FirstEffect';
//import RadioButtonsGroup from './Basics/First';
import React from 'react';
import ComponentA from './States/Contexts/ComponentC';
import UseStateEx from './components/UseStateEx';
import Sam from './States/Sam';
import Test from './States/Test';
import Wel from './States/Wel';
import Counter from './components/Counter';
import ErrorBoundary from './components/ErrorBoundary';

export const UserContext=React.createContext();

function App() {
  return (
    <div className="App">
    <h1>Welcome Root Component</h1>
{/*<RadioButtonsGroup></RadioButtonsGroup>
 <UserContext.Provider value={"parent to least child"}>

<ComponentA></ComponentA>
  </UserContext.Provider>
  <FirstMount></FirstMount>
  <UseStateEx></UseStateEx>

  <Sam></Sam>

  <Test></Test>
  <Wel></Wel>*/}
<ErrorBoundary>
<Counter></Counter>
</ErrorBoundary>

    </div>
  );
}

export default App;
