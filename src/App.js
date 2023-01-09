import './styles/App.scss';
import { Link } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <div className="container">
        <Link to={"/liste"}>Liste</Link>
        <Link to={"/new"}>Nouvel avis</Link>
      </div>
    </div>
  );
}

export default App;
