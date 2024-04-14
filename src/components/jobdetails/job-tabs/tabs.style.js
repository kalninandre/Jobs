import { StyleSheet } from 'react-native';

import { COLORS, SHADOWS, SIZES } from '../../../constants';

const styles = StyleSheet.create({
	container: {
		flexDirection: 'row',
		justifyContent: 'center',
		gap: SIZES.sm,
		marginTop: SIZES.sm,
		marginBottom: SIZES.sm / 2,
	},
	btn: (name, activeTab) => ({
		paddingVertical: SIZES.sm,
		paddingHorizontal: SIZES.md,
		backgroundColor: name === activeTab ? COLORS.primary : 'white',
		borderRadius: SIZES.md,
		marginLeft: 2,
		...SHADOWS.md,
		shadowColor: COLORS.white,
	}),
	btnText: (name, activeTab) => ({
		fontFamily: 'DMMedium',
		fontSize: SIZES.sm,
		color: name === activeTab ? 'white' : '#AAA9B8',
	}),
});

export default styles;
