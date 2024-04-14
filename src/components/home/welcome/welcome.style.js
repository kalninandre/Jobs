import { StyleSheet, Platform } from 'react-native';

import { COLORS, FONT, SIZES } from '../../../constants';

const styles = StyleSheet.create({
	container: {
		width: '100%',
	},
	userName: {
		fontFamily: FONT.regular,
		fontSize: SIZES.lg,
		color: COLORS.secondary,
	},
	welcomeMessage: {
		fontFamily: FONT.bold,
		fontSize: SIZES.lg,
		color: COLORS.primary,
		marginTop: 2,
	},
	searchContainer: {
		maxWidth: Platform.OS == 'web' ? '400px' : 'auto',
		justifyContent: 'center',
		alignItems: 'center',
		flexDirection: 'row',
		marginTop: SIZES.md,
		height: 40,
	},
	searchWrapper: {
		flex: 1,
		backgroundColor: COLORS.white,
		marginRight: SIZES.sm,
		justifyContent: 'center',
		alignItems: 'center',
		borderRadius: SIZES.md,
		height: '100%',
	},
	searchInput: {
		fontFamily: FONT.regular,
		width: '100%',
		height: '100%',
		paddingHorizontal: SIZES.md,
		textDecorationLine: 'none',
	},
	searchBtn: {
		width: 50,
		height: '100%',
		backgroundColor: COLORS.tertiary,
		borderRadius: SIZES.md,
		justifyContent: 'center',
		alignItems: 'center',
	},
	searchBtnImage: {
		width: '50%',
		height: '50%',
		tintColor: COLORS.white,
	},
	tabsContainer: {
		width: '100%',
		flexDirection: 'row',
		flexWrap: 'wrap',
		gap: 6,
		marginTop: SIZES.md,
	},
	tab: (activeJobType, item) => ({
		width: 'fit-content',
		paddingVertical: SIZES.sm / 2,
		paddingHorizontal: SIZES.md,
		borderRadius: SIZES.md,
		borderWidth: 1,
		borderColor: activeJobType === item ? COLORS.secondary : COLORS.lightgray,
	}),
	tabText: (activeJobType, item) => ({
		fontFamily: FONT.medium,
		color: activeJobType === item ? COLORS.secondary : COLORS.lightgray,
	}),
});

export default styles;
