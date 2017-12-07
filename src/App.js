import React, { Component } from 'react';
import { Route } from 'react-router-dom'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import HeaderBar from './components/HeaderBar'
import Footer from './components/Footer'
import Search from './components/Search'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Route path="/" exact render={() => (
          <div>
            <header>
              <MuiThemeProvider>
                <HeaderBar />
                <Search />
              </MuiThemeProvider>
            </header>
            <div class="content-wrapper">
              <p>Content</p>
            </div>
            <footer>
              <MuiThemeProvider>
                <Footer />
              </MuiThemeProvider>
            </footer>
          </div>
        )}/>
      </div>
    );
  }
}

export default App;
