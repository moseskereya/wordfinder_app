
import './App.css';
import Header from './components/Header';
import Google from "./components/Google"
import Error from './components/Error'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Word from "./components/Word"
function App() {
    return (
        <Router>
            <div className="App">
                <Switch>
                    <Route path='/' exact component={Header} />
                    <Route path='/word' component={Word} />
                    <Route path='/google/:id' component={Google} />
                    <Route path='*' component={Error} />
                </Switch>
            </div>
        </Router>
    );
}

export default App;
