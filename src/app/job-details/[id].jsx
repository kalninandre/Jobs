import { useState } from 'react';

import { Text, View, SafeAreaView, ScrollView, ActivityIndicator, RefreshControl } from 'react-native';
import { Stack, useLocalSearchParams, useRouter } from 'expo-router';

import useFetch from '../../hooks/useFetch';
import { COLORS, icons, SIZES } from '../../constants';

import { Company, JobAbout, JobFooter, JobTabs, ScreenHeaderBtn, Specifics } from '../../components';
import Footer from '../../components/jobdetails/footer/Footer';

const tabs = ['About', 'Qualifications', 'Responsibilities'];

const JobDetails = () => {
	const params = useLocalSearchParams();
	const router = useRouter();

	const { data, isLoading, error, refetch } = useFetch('job-details', {
		job_id: params.id,
	});

	const [refreshing, setRefreshing] = useState(false);

	const onRefresh = () => {
		setRefreshing(true);
		refetch();
		setRefreshing(false);
	};

	return (
		<SafeAreaView style={{ flex: 1, backgroundColor: COLORS.lightWhite }}>
			<Stack.Screen
				options={{
					headerTitle: 'Job Details',
					headerStyle: {
						backgroundColor: COLORS.offwhite,
					},
					headerShadowVisible: false,
					headerLeft: () => (
						<ScreenHeaderBtn iconUrl={icons.chevronLeft} dimension='50%' onPress={() => router.back()} />
					),
					headerRight: () => <ScreenHeaderBtn iconUrl={icons.share} dimension='60%' />,
				}}
			/>

			<ScrollView
				showsVerticalScrollIndicator={false}
				refreshControl={
					<RefreshControl onRefresh={onRefresh} refreshing={refreshing} progressViewOffset={16} />
				}
			>
				{isLoading ? (
					<ActivityIndicator size='large' color={COLORS.primary} style={{ marginTop: 16 }} />
				) : error ? (
					<Text>Something went wrong</Text>
				) : data.length === 0 ? (
					<Text>No data available</Text>
				) : (
					<View style={{ padding: SIZES.medium, paddingBottom: 100 }}>
						<Company
							companyLogo={data[0].employer_logo}
							jobTitle={data[0].job_title}
							companyName={data[0].employer_name}
							location={data[0].job_country}
						/>

						<JobTabs tabs={tabs}>
							<View>
								<JobAbout
									info={data[0].job_description ?? 'Ops, the about job section was not informed'}
								/>
							</View>
							<View>
								<Specifics
									title='Qualifications'
									points={data[0].job_highlights?.Qualifications ?? ['N/A']}
								/>
							</View>
							<View>
								<Specifics
									title='Responsibilities'
									points={data[0].job_highlights?.Responsibilities ?? ['N/A']}
								/>
							</View>
						</JobTabs>

						<Footer url={data[0]?.job_google_link} />
					</View>
				)}
			</ScrollView>
		</SafeAreaView>
	);
};

export default JobDetails;
