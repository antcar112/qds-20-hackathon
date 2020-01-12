import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { FiLogOut } from 'react-icons/fi';

const NavComponent = () => {
	return (
		<div>
			<Navbar bg="light" expand="lg">
				<Navbar.Brand href="/">I just did the front end</Navbar.Brand>
				<Navbar.Toggle aria-controls="basic-navbar-nav" />
				<Navbar.Collapse id="basic-navbar-nav">
					<Nav className="ml-auto">
						<Nav.Link href="#">
							<FiLogOut /> Log Out
						</Nav.Link>
					</Nav>
				</Navbar.Collapse>
			</Navbar>
		</div>
	);
};

export default NavComponent;
