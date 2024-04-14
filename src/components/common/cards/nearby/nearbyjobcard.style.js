import { StyleSheet } from 'react-native';

import { COLORS, SHADOWS, SIZES } from '../../../../constants';

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center',
		flexDirection: 'row',
		padding: SIZES.md,
		borderRadius: SIZES.sm,
		backgroundColor: '#FFF',
		...SHADOWS.md,
		shadowColor: COLORS.white,
	},
	logoContainer: {
		width: 50,
		height: 50,
		backgroundColor: COLORS.white,
		borderRadius: SIZES.md,
		justifyContent: 'center',
		alignItems: 'center',
	},
	logImage: {
		width: '70%',
		height: '70%',
	},
	textContainer: {
		flex: 1,
		marginHorizontal: SIZES.md,
	},
	jobName: {
		fontSize: SIZES.md,
		fontFamily: 'DMBold',
		color: COLORS.primary,
	},
	jobType: {
		fontSize: SIZES.sm + 2,
		fontFamily: 'DMRegular',
		color: COLORS.gray,
		marginTop: 3,
		textTransform: 'capitalize',
	},
});

export default styles;
