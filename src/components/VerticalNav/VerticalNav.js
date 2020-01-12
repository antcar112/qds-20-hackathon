import React from 'react';
import Nav from 'react-bootstrap/Nav';
import styled from 'styled-components';
import { IoIosAddCircleOutline } from 'react-icons/io';
import { FaRegMap } from 'react-icons/fa';
import { GoGraph } from 'react-icons/go';

import VerticalNavLink from './VerticalNavLink';

const StyledVerticalNav = styled.aside`
	height: calc(100vh - 60px);
	line-height: 3em;
	width: 70px;
	background-color: white;
`;

const links = [
	{ name: 'Add', path: '/', icon: <IoIosAddCircleOutline /> },
	{ name: 'Graph', path: '/graph', icon: <GoGraph /> },
	{ name: 'Map', path: '/map', icon: <FaRegMap /> }
];

const VerticalNav = () => {
	return (
		<StyledVerticalNav>
			<Nav defaultActiveKey="/" className="flex-column">
				{links.map(link => (
					<VerticalNavLink
						key={link.name}
						path={link.path}
						name={link.name}
						icon={link.icon}
					/>
				))}
			</Nav>
		</StyledVerticalNav>
	);
};

export default VerticalNav;
