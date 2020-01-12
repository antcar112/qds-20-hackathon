import React from 'react';
import { ThemeProvider } from 'styled-components';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import NavComponent from './NavComponent';
import theme from './styles/Theme';
import GlobalStyles from './styles/GlobalStyles';
import FileUpload from './pages/FileUpload';
import Graph from './pages/Graph';
import Map from './pages/Map';

function App() {
	return (
		<ThemeProvider theme={theme}>
			<GlobalStyles />
			<Router>
				<div className="App">
					<NavComponent />
					<p>Content goes here.</p>
					<Route exact path="/">
						<FileUpload />
					</Route>
					<Route path="/graph">
						<Graph />
					</Route>
					<Route path="/map">
						<Map />
					</Route>
				</div>
			</Router>
		</ThemeProvider>
	);
}

export default App;
