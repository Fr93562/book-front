import React from 'react';
import { PureComponent } from 'react';
import { ThemeProvider } from "styled-components";
import theme from './components/theme';
import GlobalStyle from './components//global';
import Store from './stores/Store';
import Router from './pages/Router';

class App extends PureComponent {
    render() {
      console.log('app is ready');
    
        return (
            <ThemeProvider theme={theme}>
                <GlobalStyle />
                  <Store>
                      <Router />
                  </Store>
            </ThemeProvider>
        );
    }
}

export default App;
