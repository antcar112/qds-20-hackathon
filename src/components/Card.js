import React from 'react';
import Card from 'react-bootstrap/Card';

const cardStyles = {
	width  : '600px',
	margin : '0 auto'
};

const ComponentCard = ({ children }) => {
	return <Card style={cardStyles}>{children}</Card>;
};

export default ComponentCard;
