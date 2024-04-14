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
	headText: {
		fontSize: SIZES.lg,
		color: COLORS.primary,
		fontFamily: FONT.bold,
	},
	contentBox: {
		marginVertical: SIZES.sm,
	},
	contextText: {
		fontSize: SIZES.md - 2,
		color: COLORS.gray,
		fontFamily: FONT.regular,
		marginVertical: SIZES.sm / 1.25,
	},
});

export default styles;
