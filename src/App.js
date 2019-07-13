import React from 'react';
import logo from './logo.svg';
import './App.css';


// way of function definition
// function sampleFunction(a){
//   return {};
// }

// const sampleFunction = function(){

//   return{};
// };

// const sampleFunction = (a) => {
//   return {};
// };

// const sampleFunction = (a) => ({});


///es6
///best practice
//// className dakka gaman jsx bawa hoyagatha hakiya.
//// <div />
//// complnect should start with capital letter
//// support file (language) should start with simple letter
const App = () => (
  <div className="App">
  <header className="App-header">
    <img src={logo} className="App-logo" alt="logo" />
    <p>
      Edit <code>src/App.js</code> and save to reload.
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

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

///defauld
export default App;


///you caan use with multiple project, Eg: language

// export default App;
// export App2 ;
// export App3 ;


// -----
// import { App3 } from "./App";
// Or
// import App, { App2, App3} from "..";
// Or
// import App as A from "../";