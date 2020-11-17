
import './App.css';
import Input from './components/Input.jsx';
import Login from "./components/Login.jsx";
import From from "./components/Form.jsx";


var userIsRegistered = false;






function App() {
  return (
    <div className="App">
      <div className="container"> {
          //Ternary
          // isLoggedIn  ? <h1>Hello</h1> : <Login />
          // AND Operator
          //currentTime < 12 && <h1>Klokka er mer enn 12</h1> 

          <From />

        }</div>

        



    </div>

  );
}

export default App;
