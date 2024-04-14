import { StyleSheet } from 'react-native';

import { COLORS, FONT, SIZES } from '../constants';

const styles = StyleSheet.create({
	container: {
		width: '100%',
		marginTop: 20,
		paddingHorizontal: SIZES.lg,
	},
	searchTitle: {
		fontFamily: FONT.bold,
		fontSize: SIZES.xl,
		color: COLORS.primary,
	},
	noOfSearchedJobs: {
		marginTop: 2,
		fontFamily: FONT.medium,
		fontSize: SIZES.sm,
		color: COLORS.primary,
	},
	loaderContainer: {
		marginTop: SIZES.md,
	},
	footerContainer: {
		paddingRight: 4,
		justifyContent: 'end',
		alignItems: 'center',
		flexDirection: 'row',
		gap: 5,
	},
	paginationButton: {
		width: 30,
		height: 30,
		borderRadius: 5,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: COLORS.tertiary,
	},
	paginationImage: {
		width: '60%',
		height: '60%',
		tintColor: COLORS.white,
	},
	paginationTextBox: {
		width: 30,
		height: 30,
		borderRadius: 2,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: COLORS.white,
	},
	paginationText: {
		fontFamily: FONT.bold,
		fontSize: SIZES.md,
		color: COLORS.primary,
	},
});

export default styles;
