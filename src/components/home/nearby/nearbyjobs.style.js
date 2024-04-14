import { StyleSheet } from 'react-native';

import { COLORS, FONT, SIZES } from '../../../constants';

const styles = StyleSheet.create({
	container: {
		marginTop: SIZES.xl,
	},
	header: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
		marginTop: SIZES.sm,
	},
	headerTitle: {
		fontSize: SIZES.lg,
		fontFamily: FONT.medium,
		color: COLORS.primary,
	},
	headerBtn: {
		fontSize: SIZES.md,
		fontFamily: FONT.medium,
		color: COLORS.gray,
	},
	cardsContainer: {
		marginTop: SIZES.md,
		gap: SIZES.sm,
	},
});

export default styles;
