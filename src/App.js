import './App.css';
import MainContent from './Components/MainContent';
import Navigation from './Components/Navigation/Navigation';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navigation />
        <MainContent/>
      </header>
    </div>
  );
}

export default App;
