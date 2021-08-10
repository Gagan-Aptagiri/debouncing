import React, { useState, useEffect, Fragment } from 'react';
import nationalSports from './national-sports';

const App = () => {
	console.log('render');
	const [search, setSearch] = useState('');
	const [filteredNationalSports, setFilteredNationalSports] =
		useState(nationalSports);

	useEffect(() => {
		const timer = setTimeout(() => {
			const filter = nationalSports.filter((sport) => {
				return sport['national sport']
					.toLowerCase()
					.includes(search.toLowerCase());
			});

			setFilteredNationalSports(filter);
		}, 1000);

		return () => clearTimeout(timer);
	}, [search]);

	return (
		<Fragment>
			<input value={search} onChange={(e) => setSearch(e.target.value)} />
			<ul>
				{filteredNationalSports &&
					filteredNationalSports.map((sport) => {
						return <li key={sport.country}>{sport['national sport']}</li>;
					})}
			</ul>
		</Fragment>
	);
};

export default App;
