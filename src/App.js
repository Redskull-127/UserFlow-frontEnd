import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import HomePage from './Pages/Home/Home'
import Navbar from './Components/Navbar/Navbar'
import Footer from './Components/Footer/Footer'
import NotfoundPage from './Pages/NotfoundPage/NotfoundPage'

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route component={NotfoundPage} />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
