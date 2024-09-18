import logo from './logo.svg';
import './App.css';

function App() {

  var sname ="amit"
  var age = 30
  var isActive = true

  //jsx


  return (
    <div className="App">
        <h1>HELLO ALL</h1>
        <h2>ALL TAG MUST HAVE CLOSING TAG</h2>
        {sname}
        <h1>NAme = {sname}</h1>
        <h2>Age : {age}</h2>
        <h2>isActive = {isActive == true? "Active":"Not Active"}</h2>
    </div>
  );
}

export default App;
