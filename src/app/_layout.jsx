import { useState, useEffect } from 'react';

import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';

SplashScreen.preventAutoHideAsync();

const Layout = () => {
	const [appIsReady, setAppIsReady] = useState(false);

	const [fonts] = useFonts({
		DMBold: require('../assets/fonts/DMSans-Bold.ttf'),
		DMMedium: require('../assets/fonts/DMSans-Medium.ttf'),
		DMRegular: require('../assets/fonts/DMSans-Regular.ttf'),
	});

	useEffect(() => {
		const prepare = async () => {
			if (fonts) setAppIsReady(true);
		};

		prepare();
	}, [fonts]);

	useEffect(() => {
		if (appIsReady) SplashScreen.hideAsync();
	}, [appIsReady]);

	if (!appIsReady) return null;

	const isDesktop = () => {
		return {
			contentStyle: {
				width: '100%',
				maxWidth: '1024px',
				margin: 'auto',
			},
		};
	};

	return <Stack screenOptions={isDesktop} />;
};

export default Layout;
