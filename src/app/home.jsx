import { Stack } from 'expo-router';
import { SafeAreaView, ScrollView, View } from 'react-native';

import { COLORS, SIZES, icons, images } from '../constants';

import { Nearbyjobs, Popularjobs, ScreenHeaderBtn, Welcome } from '../components';

const Home = () => {
	return (
		<SafeAreaView style={{ flex: 1, backgroundColor: COLORS.offwhite }}>
			<Stack.Screen
				options={{
					headerTitle: '',
					headerStyle: {
						backgroundColor: COLORS.offwhite,
					},
					headerShadowVisible: false,
					headerLeft: () => <ScreenHeaderBtn iconUrl={icons.menu} dimension='50%' />,
					headerRight: () => <ScreenHeaderBtn iconUrl={images.profile} dimension='100%' />,
				}}
			/>
			<ScrollView showsVerticalScrollIndicator={false}>
				<View style={{ flex: 1, padding: SIZES.md }}>
					<Welcome />
					<Popularjobs />
					<Nearbyjobs />
				</View>
			</ScrollView>
		</SafeAreaView>
	);
};

export default Home;
