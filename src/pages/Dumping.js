import React from 'react';
import Card from '../components/Card';
import Apex from '../components/Apex';
import { data } from '../data/data';

const Dumping = () => {
	return (
		<Card>
			<Apex data={data} yaxis="Dumping Trucks" />
		</Card>
	);
};

export default Dumping;
