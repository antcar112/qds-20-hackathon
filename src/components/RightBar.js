import React from 'react';
import Nav from 'react-bootstrap/Nav';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const StyledRightBar = styled.div`
	height: 100vh;
	line-height: 3em;
	width: 200px;
`;

const RightBar = () => {
	return (
		<StyledRightBar>
			<Nav defaultActiveKey="/" className="flex-column">
				<Link to="/">Add</Link>
				<Link to="/graph">Graph</Link>
				<Link to="/map">Map</Link>
			</Nav>
		</StyledRightBar>
	);
};
export default RightBar
