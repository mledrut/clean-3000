import './styles/App.scss';
import { Link } from 'react-router-dom';
import { AiFillFileAdd, AiOutlineUnorderedList } from "react-icons/ai";

function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="page-title">
            <h2>Bienvenue</h2>
        </div>
        <div className="content">
          <Link to={"/new"}>
            <AiFillFileAdd />
            <p>Déposer un avis de passage</p>
          </Link>
          <Link to={"/liste"}>
            <AiOutlineUnorderedList />
            <p>Consulter les avis de passage</p>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default App;
