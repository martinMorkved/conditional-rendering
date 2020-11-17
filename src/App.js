
import './App.css';
import Input from './components/Input.jsx';
import Login from "./components/Login.jsx";



var isLoggedIn = true;

const currentTime = new Date().getHours();

console.log(currentTime);





function App() {
  return (
    <div className="App">
      <div className="container"> {
          // isLoggedIn  ? <h1>Hello</h1> : <Login />
          currentTime < 12 ? <h1>Klokka er mer enn 12</h1> : <h1>Klokka er mindre enn 12</h1>

        }</div>

        



    </div>

  );
}

export default App;
