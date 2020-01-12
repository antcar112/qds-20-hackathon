import React from 'react';
import Card from 'react-bootstrap/Card';

const cardStyles = {
	width     : '100%',
	margin    : '70px 120px',
	maxHeight : '100%'
};

const ComponentCard = ({ children }) => {
	return <Card style={cardStyles}>{children}</Card>;
};

export default ComponentCard;
