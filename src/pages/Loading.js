import React from 'react';
import Card from '../components/Card';
import Apex from '../components/Apex';
import { data } from '../data/data';

const Loading = () => {
	return (
		<Card>
			<Apex data={data} yaxis="Loading Trucks" />
		</Card>
	);
};

export default Loading;
