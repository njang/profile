import React, { Component } from 'react';
import { Route, BrowserRouter } from "react-router-dom";
// import 'bootstrap/dist/css/bootstrap.css';

import Home from "./Home";
import Navbar from "./Navbar";
import Stuff from "./Stuff";
import Contact from "./Contact";

class Main extends Component {
    render() {
        return (
        	<BrowserRouter>
	            <div className="App">
					<Navbar />
					<ul className="content">
						<Route exact path="/" component={Home}/>
			            <Route path="/stuff" component={Stuff}/>
			            <Route path="/contact" component={Contact}/>
					</ul>
	            </div>
        	</BrowserRouter>
        );
    }
}

export default Main;
