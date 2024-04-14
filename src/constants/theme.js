const COLORS = {
	primary: '#312651',
	secondary: '#444262',
	tertiary: '#FF7754',

	gray: '#83829A',
	lightgray: '#C1C0C8',

	white: '#F3F4F8',
	offwhite: '#FAFAFC',
};

const FONT = {
	regular: 'DMRegular',
	medium: 'DMMedium',
	bold: 'DMBold',
};

const SIZES = {
	xs: 10,
	sm: 12,
	md: 16,
	lg: 20,
	xl: 24,
	ul: 32,
};

const SHADOWS = {
	sm: {
		shadowColor: '#000',
		shadowOffset: {
			width: 0,
			height: 2,
		},
		shadowOpacity: 0.25,
		shadowRadius: 3.84,
		elevation: 2,
	},
	md: {
		shadowColor: '#000',
		shadowOffset: {
			width: 6,
			height: 6,
		},
		shadowRadius: 12,
		elevation: 6,
	},
};

export { COLORS, FONT, SIZES, SHADOWS };
