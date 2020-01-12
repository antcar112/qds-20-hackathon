import React from 'react';
//import NavDropdown from 'react-bootstrap/NavDropdown';
import { ThemeProvider } from 'styled-components';

import NavComponent from './NavComponent';
import theme from './styles/Theme';
import GlobalStyles from './styles/GlobalStyles';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />

      <div className="App">  
        <NavComponent>
        </NavComponent>
        <p>Content goes here.</p>
      </div>
    </ThemeProvider>
  );
}

export default App;
