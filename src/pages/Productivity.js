import React, { useState, useEffect } from 'react';
import Spinner from '../components/Spinner';
import Card from '../components/Card';
import Apex from '../components/Apex';
import { data } from '../data/data';

const Productivity = () => {
	const [
		loading,
		setLoading
	] = useState(false);

	useEffect(
		() => {
			setLoading(true);
			const fetchData = async () => {
				// setLoading(false);
			};
			fetchData();
		},
		[
			setLoading
		]
	);
	return <Card>{loading ? <Spinner /> : <Apex data={data} />}</Card>;
};

export default Productivity;
