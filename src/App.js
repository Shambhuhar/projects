
import './App.css';
import {BrowserRouter as Router, Route, Switch, useHistory} from "react-router-dom";
import Header from './Header';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  return (
    <div>
      <Router>
        <Header/>
      </Router>
    </div>
  );
}

export default App;
