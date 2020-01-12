import React from 'react';
import Card from '../components/Card';
import ApexDuel from '../components/ApexDuel';
import { data } from '../data/data';

const Dumping = () => {
	return (
		<Card>
			<ApexDuel data={data} yaxis="Dumping Trucks" />
		</Card>
	);
};

export default Dumping;
