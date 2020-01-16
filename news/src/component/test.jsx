import React,{Component} from 'react';
import Grid from './Grid';
import Home from './Home/Home';
import '../style/styles.css';
import { BrowserRouter as Router,Route,Link } from "react-router-dom";
import $ from 'jquery';
import News from './News';
window.jQuery = $;
window.$ = $;
global.jQuery = $;
 
class App extends Component {
    render(){
      return(
        <Router>
       
 
            <Route path="/" exact component={Home}/>
            <Route path="/grid"  component={Grid}/>
            <Route path="/news" component={News}/>
            {/* <Route path="/test" component={test}/> */}
         
        </Router>
      )
    }
}
 
export default test;