import { StyleSheet } from 'react-native';

import { COLORS, FONT, SIZES } from '../../../constants';

const styles = StyleSheet.create({
	container: {
		position: 'absolute',
		bottom: 0,
		left: 0,
		right: 0,
		padding: SIZES.md,
		backgroundColor: '#FFF',
		justifyContent: 'flex-end',
		borderRadius: SIZES.md,
		marginBottom: 30,
		marginHorizontal: SIZES.sm,
		alignItems: 'center',
		flexDirection: 'row',
	},
	likeBtn: {
		width: 40,
		height: 40,
		borderWidth: 1,
		borderColor: '#F37453',
		borderRadius: SIZES.sm,
		justifyContent: 'center',
		alignItems: 'center',
	},
	likeBtnImage: {
		width: '60%',
		height: '60%',
		tintColor: '#F37453',
	},
	applyBtn: {
		flex: 1,
		maxWidth: '200px',
		width: '100%',
		backgroundColor: '#FE7654',
		height: '100%',
		paddingVertical: SIZES.xs,
		justifyContent: 'center',
		alignItems: 'center',
		marginLeft: SIZES.md,
		borderRadius: SIZES.md,
	},
	applyBtnText: {
		fontSize: SIZES.md,
		color: COLORS.white,
		fontFamily: FONT.bold,
	},
});

export default styles;
