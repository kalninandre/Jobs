import { useRouter } from 'expo-router';
import { ActivityIndicator, Text, TouchableOpacity, View } from 'react-native';

import { COLORS } from '../../../constants';
import useFetch from '../../../hooks/useFetch';

import NearbyJobCard from '../../common/cards/nearby/NearbyJobCard';

import styles from './nearbyjobs.style';

const Nearbyjobs = () => {
	const router = useRouter();

	const { data, isLoading, isError } = useFetch('search', { query: 'React Developer', num_pages: 1 });

	return (
		<View style={styles.container}>
			<View style={styles.header}>
				<Text style={styles.headerTitle}> Nearby Jobs</Text>
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
					data.map((item, index) => (
						<NearbyJobCard
							key={`nearby-job-${index}`}
							item={item}
							handleNavigate={() => router.push(`job-details/${item.job_id}`)}
						/>
					))
				)}
			</View>
		</View>
	);
};

export default Nearbyjobs;
