import './App.css';
//3.2
import { Switch, Route, BrowserRouter, NavLink } from 'react-router-dom';
import Home from './containers/home';
import Robots from './containers/robot/index';
import Manufacturers from './containers/manufacturer/index';
import Categories from './containers/category/index';

const Header = () => (
  <div>
    <ul className="header">
      <li><NavLink to="/" exact>Home</NavLink></li>
      <li><NavLink to="/robots">Robots</NavLink></li>
      <li><NavLink to="/manufacturers">Manufacturers</NavLink></li>
      <li><NavLink to="/categories">Categories</NavLink></li>
    </ul>
  </div>
);

const Main = () => (
  <div className="content">
    <Switch>
      <Route exact path="/" component={Home}/>
      <Route path="/robots" component={Robots} />
      <Route path="/manufacturers" component={Manufacturers} />
      <Route path="/categories" component={Categories} />
    </Switch>
  </div>
);

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Main />
      </BrowserRouter>
    </div>
  );
};

export default App;
