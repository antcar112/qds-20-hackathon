import React, { useState, useEffect } from 'react';
import Spinner from '../components/Spinner';
import Card from '../components/Card';
import ProdChart from '../components/ProdChart';
// import { data } from '../data/data';

const Productivity = () => {
	const [
		loading,
		setLoading
	] = useState(false);
	const [
		data,
		setData
	] = useState([]);

	useEffect(
		() => {
			setLoading(true);
			const fetchData = async () => {
				const response = await fetch(
					'http://localhost:5000/api/productivity'
				);
				const responseData = await response.json();
				const responseArray = responseData.map(el => el.productivity);
				setData(responseArray);
				setLoading(false);
			};
			fetchData();
		},
		[
			setLoading
		]
	);
	return (
		<Card>
			{loading ? (
				<Spinner />
			) : (
				<ProdChart data={data} yaxis="Productivity per Day" />
			)}
		</Card>
	);
};

export default Productivity;
