import React from 'react';
import { ThemeProvider } from 'styled-components';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import styled from 'styled-components';

import NavComponent from './components/NavComponent';
import theme from './styles/Theme';
import GlobalStyles from './styles/GlobalStyles';
import Productivity from './pages/Productivity';
import Bunching from './pages/Bunching';
import Loading from './pages/Loading';
import Dumping from './pages/Dumping';
import Roads from './pages/Roads';
import FileUpload from './pages/FileUpload';
import Map from './pages/Map';
import VerticalNav from './components/VerticalNav/VerticalNav';
//import RightBar from './RightBar';

const FlexContainer = styled.main`
	display: flex;
	max-height: 100vh;
	padding-top: 60px;
`;

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
								<Productivity />
							</Route>
							<Route exact path="/bunching">
								<Bunching />
							</Route>
							<Route exact path="/loading">
								<Loading />
							</Route>
							<Route exact path="/dumping">
								<Dumping />
							</Route>
							<Route exact path="/roads">
								<Roads />
							</Route>
						</Switch>
						{/* <RightBar /> */}
					</FlexContainer>
				</div>
			</Router>
		</ThemeProvider>
	);
}

export default App;
