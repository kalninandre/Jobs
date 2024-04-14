import { Image, TouchableOpacity } from 'react-native';

import styles from './screenheader.style';

const ScreenHeaderBtn = ({ iconUrl, dimension, onPress }) => {
	return (
		<TouchableOpacity style={styles.btnContainer} onPress={onPress}>
			<Image source={iconUrl} style={styles.btnImg(dimension)} resizeMode='cover' />
		</TouchableOpacity>
	);
};

export default ScreenHeaderBtn;
