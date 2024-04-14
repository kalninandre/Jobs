import { useState } from 'react';
import { FlatList, Image, Text, TextInput, TouchableOpacity, View } from 'react-native';

import { useRouter } from 'expo-router';
import { Controller, useForm } from 'react-hook-form';

import { icons } from '../../../constants';
import styles from './welcome.style';

const jobTypes = ['Full-time', 'Part-time', 'Contractor', 'Intern'];

const Welcome = () => {
	const [active, setActive] = useState(0);
	const router = useRouter();

	const { control, handleSubmit } = useForm({
		mode: 'all',
		defaultValues: {
			search: '',
		},
	});

	const submitHandler = data => {
		const search = data.search;

		router.push(`/search/${search}`);
		return true;
	};

	return (
		<View>
			<View style={styles.container}>
				<Text style={styles.userName}>Hello Adrian</Text>
				<Text style={styles.welcomeMessage}>Find your perfect job</Text>
			</View>

			<View style={styles.searchContainer}>
				<View style={styles.searchWrapper}>
					<Controller
						control={control}
						name='search'
						render={({ field: { onChange, onBlur, value } }) => (
							<TextInput style={styles.searchInput} value={value} onChange={onChange} onBlur={onBlur} />
						)}
					/>
				</View>
				<TouchableOpacity style={styles.searchBtn} onPress={handleSubmit(submitHandler)}>
					<Image style={styles.searchBtnImage} source={icons.search} />
				</TouchableOpacity>
			</View>

			<View style={styles.tabsContainer}>
				{jobTypes.map((item, index) => {
					return (
						<TouchableOpacity
							key={index}
							style={styles.tab(active, index)}
							onPress={() => {
								setActive(index);
								router.push(`/search/${item}`);
							}}
						>
							<Text style={styles.tabText(active, index)}>{item}</Text>
						</TouchableOpacity>
					);
				})}
			</View>
		</View>
	);
};

export default Welcome;
