import React, {Component} from 'react';
import {Link, Route, Routes, BrowserRouter as Router} from 'react-router-dom'
import Home from './home';
import About from './about';
import Contact from './contact';

class RouterIndex extends Component {
    render() {
        return (
            <Router>
                <div>
                    <nav>
                        <ul>
                            <li>
                                <Link to="/">Home</Link>
                            </li>
                            <li>
                                <Link to="/about">About</Link>
                            </li>
                            <li>
                                <Link to="/contact">Contact</Link>
                            </li>
                        </ul>
                    </nav>
                    <Routes>
                        <Route path="/" element={<Home/>}/>
                        <Route path="/about" element={<About/>}/>
                        <Route path="/contact" element={<Contact/>}/>
                    </Routes>
                </div>
            </Router>
        );
    }
}

export default RouterIndex;