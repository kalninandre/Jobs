import { useState } from 'react';
import { View, Text, TouchableOpacity, Image, FlatList, SafeAreaView, ActivityIndicator } from 'react-native';
import { Stack, useRouter, useLocalSearchParams } from 'expo-router';

import { ScreenHeaderBtn, NearbyJobCard } from '../../components';

import { SIZES, COLORS, icons, images } from '../../constants';
import useFetch from '../../hooks/useFetch';

import styles from '../../styles/search';

const Search = () => {
	const router = useRouter();
	const params = useLocalSearchParams();

	const [page, setPage] = useState(1);

	const { data, isLoading, isError, refetch } = useFetch('search', { query: params.name, page: page });

	const handlePagination = direction => {
		if (direction === 'left' && page > 1) {
			setPage(page - 1);
			refetch();
		} else if (direction === 'right') {
			setPage(page + 1);
			refetch();
		}
	};

	return (
		<SafeAreaView style={{ flex: 1, backgroundColor: COLORS.lightWhite }}>
			<Stack.Screen
				options={{
					headerTitle: 'Opportunities',
					headerStyle: {
						backgroundColor: COLORS.offwhite,
					},
					headerShadowVisible: false,
					headerLeft: () => (
						<ScreenHeaderBtn iconUrl={icons.chevronLeft} dimension='50%' onPress={() => router.back()} />
					),
					headerRight: () => <ScreenHeaderBtn iconUrl={images.profile} dimension='100%' />,
				}}
			/>

			<View style={styles.container}>
				<Text style={styles.searchTitle}>{params.name}</Text>
				<Text style={styles.noOfSearchedJobs}>Job Opportunities</Text>
			</View>

			{isLoading ? (
				<View style={styles.loaderContainer}>
					<ActivityIndicator size='large' color={COLORS.primary} />
				</View>
			) : isError ? (
				<View style={styles.loaderContainer}>
					<Text>Ops, something went wrong</Text>
				</View>
			) : (
				<FlatList
					data={data}
					contentContainerStyle={{ padding: SIZES.md, rowGap: SIZES.md }}
					renderItem={({ item, index }) => (
						<NearbyJobCard
							key={index}
							index={index}
							item={item}
							handleNavigate={() => router.push(`/job-details/${item.job_id}`)}
						/>
					)}
					ListFooterComponent={() => (
						<View style={styles.footerContainer}>
							<TouchableOpacity style={styles.paginationButton} onPress={() => handlePagination('left')}>
								<Image source={icons.chevronLeft} style={styles.paginationImage} resizeMode='contain' />
							</TouchableOpacity>
							<View style={styles.paginationTextBox}>
								<Text style={styles.paginationText}>{page}</Text>
							</View>
							<TouchableOpacity style={styles.paginationButton} onPress={() => handlePagination('right')}>
								<Image
									source={icons.chevronRight}
									style={styles.paginationImage}
									resizeMode='contain'
								/>
							</TouchableOpacity>
						</View>
					)}
				/>
			)}
		</SafeAreaView>
	);
};

export default Search;
