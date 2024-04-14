import { StyleSheet } from 'react-native';

import { COLORS, FONT, SHADOWS, SIZES } from '../../../../constants';

const styles = StyleSheet.create({
	container: (selectedJob, item) => ({
		width: 250,
		padding: SIZES.xl,
		backgroundColor: selectedJob === item.job_id ? COLORS.primary : '#FFF',
		borderRadius: SIZES.md,
		justifyContent: 'space-between',
		...SHADOWS.md,
		shadowColor: COLORS.white,
	}),
	logoContainer: (selectedJob, item) => ({
		width: 50,
		height: 50,
		backgroundColor: selectedJob === item.job_id ? '#FFF' : COLORS.white,
		borderRadius: SIZES.md,
		justifyContent: 'center',
		alignItems: 'center',
	}),
	logoImage: {
		width: '70%',
		height: '70%',
	},
	companyName: {
		fontSize: SIZES.md,
		fontFamily: FONT.regular,
		color: '#A2A2A2',
		marginTop: SIZES.sm,
		marginLeft: 3,
	},
	infoContainer: {
		marginTop: SIZES.lg,
	},
	jobName: (selectedJob, item) => ({
		fontSize: SIZES.lg,
		fontFamily: FONT.medium,
		color: selectedJob === item.job_id ? COLORS.white : COLORS.primary,
	}),
	infoWrapper: {
		flexDirection: 'row',
		marginTop: 5,
		justifyContent: 'flex-start',
		alignItems: 'center',
	},
	publisher: (selectedJob, item) => ({
		fontSize: SIZES.md - 2,
		fontFamily: FONT.bold,
		color: selectedJob === item.job_id ? COLORS.white : COLORS.primary,
	}),
	location: {
		fontSize: SIZES.md - 2,
		fontFamily: FONT.regular,
		color: '#B3AEC6',
	},
});

export default styles;
