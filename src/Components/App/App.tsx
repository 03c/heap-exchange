import React from 'react';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';

import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Home from '../Home/Home';
import About from '../About/About';

class App extends React.Component {
  render() {
    return (
      <div className="h-screen w-screen bg-gray-200">
        <Router>
          <div className="container mx-auto bg-white">
            <Header />
            <div className="p-4">
              <Switch>
                <Route path="/about">
                  <About />
                </Route>
                <Route path="/">
                  <Home />
                </Route>
              </Switch>
            </div>
            <Footer />
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
