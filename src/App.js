import logo from './logo.svg';
import './App.css';

function App() {
  var name={
    name:"Dr. Ma"
  };
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit Done <code>src/App.js</code> and save to reload.
        </p>
        <h1>My heading : {name}</h1>
      </header>
    </div>
  );
}

export default App;
