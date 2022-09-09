import React from 'react';
import { PureComponent } from 'react';
import { GlobalStyle } from './components/global/common/global.styled';
import Store from './Store';

class App extends PureComponent {
  render() {
    return (
      <>
        <GlobalStyle />
        <Store />
      </>
    );
  }
}

export default App;
