import logo from './logo.svg';
import './App.css';
import Weather from './api/Weather';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Weather />
      </header>
    </div>
  );
}

export default App;
