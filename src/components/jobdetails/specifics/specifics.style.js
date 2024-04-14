import { StyleSheet } from 'react-native';

import { COLORS, FONT, SIZES } from '../../../constants';

const styles = StyleSheet.create({
	container: {
		marginHorizontal: SIZES.sm / 1.25,
		marginTop: SIZES.sm,
		backgroundColor: '#FFF',
		borderRadius: SIZES.md,
		padding: SIZES.md,
	},
	title: {
		fontSize: SIZES.lg,
		color: COLORS.primary,
		fontFamily: FONT.bold,
	},
	pointsContainer: {
		marginVertical: SIZES.sm,
	},
	pointWrapper: {
		flexDirection: 'row',
		justifyContent: 'flex-start',
		alignItems: 'flex-start',
		marginVertical: SIZES.sm / 1.25,
	},
	pointDot: {
		width: 6,
		height: 6,
		borderRadius: 6,
		backgroundColor: COLORS.lightgray,
		marginTop: 6,
	},
	pointText: {
		fontSize: SIZES.md - 2,
		color: COLORS.gray,
		fontFamily: FONT.regular,
		marginLeft: SIZES.sm,
	},
});

export default styles;
