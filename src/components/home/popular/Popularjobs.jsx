import { useState } from 'react';
import { View, Text, TouchableOpacity, ActivityIndicator, FlatList } from 'react-native';
import { useRouter } from 'expo-router';

import useFetch from '../../../hooks/useFetch';
import { COLORS, SIZES } from '../../../constants';

import PopularJobCard from '../../common/cards/popular/PopularJobCard';

import styles from './popularjobs.style';

const Popularjobs = () => {
	const router = useRouter();

	const { data, isLoading, isError } = useFetch('search', { query: 'React Developer', num_pages: 1 });

	const [selectedJob, setSelectedJob] = useState();

	const handleCardPress = item => {
		setSelectedJob(item.job_id);
		router.push(`/job-details/${item.job_id}`);
	};

	return (
		<View style={styles.container}>
			<View style={styles.header}>
				<Text style={styles.headerTitle}> Popular Jobs</Text>
				<TouchableOpacity>
					<Text style={styles.headerBtn}>Show all</Text>
				</TouchableOpacity>
			</View>

			<View style={styles.cardsContainer}>
				{isLoading ? (
					<ActivityIndicator size='large' color={COLORS.primary} />
				) : isError != null ? (
					<Text>Something went wrong...</Text>
				) : (
					<FlatList
						data={data}
						horizontal
						contentContainerStyle={{ columnGap: SIZES.md }}
						renderItem={({ item, index }) => (
							<PopularJobCard
								key={index}
								item={item}
								selectedJob={selectedJob}
								handleCardPress={handleCardPress}
							/>
						)}
					/>
				)}
			</View>
		</View>
	);
};

export default Popularjobs;
