import Login from "./components/login"
import Home from "./components/home";
import SignUp from "./components/signup";
import { BrowserRouter, Route, Switch} from "react-router-dom"
import './App.css';

function App() {
  return (
    <div className="App">
    <BrowserRouter>
      <div>
        <Switch>
        <Route path="/login/signup" component={SignUp}/>
        <Route path="/signup" component={SignUp}/>
        <Route path="/login" component={Login}/>
        <Route path="/" component={Home}/>
        </Switch>
      </div>
    </BrowserRouter> 
    </div>
  );
}

export default App;
