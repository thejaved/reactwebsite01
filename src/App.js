import react from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from './components/Screens/Home';
import Blogs from './components/Screens/Blogs';
import Services from './components/Screens/Services';
import About from './components/Screens/About';
import Contact from './components/Screens/Contact';
import Footer from "./components/Footer";
function App() {
  return (
    <div className="App">
      <Navbar/>
      <Switch>
        <Route exact path='/' component={Home}/>
        <Route exact path='/blogs' component={Blogs}/>
        <Route exact path='/services' component={Services}/>
        <Route exact path='/about' component={About}/>
        <Route exact path='/contact' component={Contact}/>
        <Redirect to='/'/>
      </Switch>
      <Footer/>
    </div>
  );
}

export default App;
