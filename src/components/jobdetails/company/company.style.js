import { StyleSheet } from 'react-native';

import { COLORS, FONT, SIZES } from '../../../constants';

const styles = StyleSheet.create({
	container: {
		marginVertical: SIZES.md,
		justifyContent: 'center',
		alignItems: 'center',
	},
	logoBox: {
		width: 80,
		height: 80,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#FFF',
		borderRadius: SIZES.lg,
	},
	logoImage: {
		width: '80%',
		height: '80%',
	},
	jobTitleBox: {
		marginTop: SIZES.sm,
	},
	jobTitle: {
		fontSize: SIZES.lg,
		color: COLORS.primary,
		fontFamily: FONT.bold,
		textAlign: 'center',
	},
	companyInfoBox: {
		marginTop: SIZES.sm / 2,
		flexDirection: 'row',
		justifyContent: 'center',
		alignItems: 'center',
	},
	companyName: {
		fontSize: SIZES.md - 2,
		color: COLORS.primary,
		fontFamily: FONT.medium,
	},
	locationBox: {
		flexDirection: 'row',
		justifyContent: 'center',
		alignItems: 'center',
	},
	locationImage: {
		width: 14,
		height: 14,
		tintColor: COLORS.gray,
		resizeMode: 'contain',
	},
	locationName: {
		fontSize: SIZES.md - 2,
		color: COLORS.gray,
		fontFamily: FONT.regular,
		marginLeft: 2,
	},
});

export default styles;
