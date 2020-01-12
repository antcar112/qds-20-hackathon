import React from 'react';
import Card from '../components/Card';
import Apex from '../components/Apex';
import { data } from '../data/data';

const Bunching = () => {
	return (
		<Card>
			<Apex data={data} />
		</Card>
	);
};

export default Bunching;
