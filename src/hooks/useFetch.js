import { useEffect, useState } from 'react';

import axios from 'axios';

const useFetch = (endpoint, query) => {
	const [data, setData] = useState([]);
	const [isLoading, setIsLoading] = useState(false);
	const [isError, setIsError] = useState(null);

	const fetch = async () => {
		try {
			setIsLoading(true);
			setIsError(null);

			const response = await axios.get(`https://jsearch.p.rapidapi.com/${endpoint}`, {
				headers: {
					'X-RapidAPI-Key': process.env.X_RapidAPI_Key,
					'X-RapidAPI-Host': process.env.X_RapidAPI_Host,
				},
				params: {
					...query,
				},
			});

			setData(response.data.data);
		} catch (error) {
			setIsError(error);
		} finally {
			setIsLoading(false);
		}
	};

	useEffect(() => {
		fetch();
	}, []);

	const refetch = () => {
		fetch();
	};

	return {
		// Variables
		data,
		isLoading,
		isError,

		// Functions
		refetch,
	};
};

export default useFetch;
