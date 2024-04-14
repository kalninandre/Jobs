import { Platform, StyleSheet } from 'react-native';

import { COLORS, SIZES } from '../../../constants';

const styles = StyleSheet.create({
	btnContainer: {
		width: 40,
		height: 40,
		backgroundColor: COLORS.white,
		borderRadius: SIZES.sm / 2,
		justifyContent: 'center',
		alignItems: 'center',
		marginHorizontal: Platform.OS == 'web' ? 8 : 0,
	},
	btnImg: dimension => ({
		width: dimension,
		height: dimension,
		borderRadius: SIZES.sm / 2,
	}),
});

export default styles;
