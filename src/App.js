import React from 'react';
import { ThemeProvider } from 'styled-components';

import theme from './styles/Theme';
import GlobalStyles from './styles/GlobalStyles';

function App() {
	return (
		<ThemeProvider theme={theme}>
			<GlobalStyles />
			<div className="App">
				<p>Content goes here.</p>
			</div>
		</ThemeProvider>
	);
}

export default App;
