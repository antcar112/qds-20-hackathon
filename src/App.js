import React from 'react';
import { ThemeProvider } from 'styled-components';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import styled from 'styled-components';

import NavComponent from './components/NavComponent';
import theme from './styles/Theme';
import GlobalStyles from './styles/GlobalStyles';
import FileUpload from './pages/FileUpload';
import Graph from './pages/Graph';
import Map from './pages/Map';
import VerticalNav from './VerticalNav';
import RightBar from './RightBar';

const FlexContainer = styled.div`display: flex;`;

function App() {
	return (
		<ThemeProvider theme={theme}>
			<GlobalStyles />
			<Router>
				<div className="App">
					<NavComponent />
					<FlexContainer>
						<VerticalNav />
						<Switch>
							<Route exact path="/">
								<FileUpload />
							</Route>
							<Route path="/graph">
								<Graph />
							</Route>
							<Route path="/map">
								<Map />
							</Route>
						</Switch>
						<RightBar />
					</FlexContainer>
				</div>
			</Router>
		</ThemeProvider>
	);
}

export default App;
