import { useState } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';

import styles from './tabs.style';

function TabButton({ name, index, activeTab, onHandleSearchType }) {
	return (
		<TouchableOpacity style={styles.btn(index, activeTab)} onPress={onHandleSearchType}>
			<Text style={styles.btnText(index, activeTab)}>{name}</Text>
		</TouchableOpacity>
	);
}

const Tabs = ({ tabs, children }) => {
	const [activeTab, setActiveTab] = useState(0);

	return Array.isArray(children) ? (
		<View style={{ marginBottom: 30 }}>
			<View style={styles.container}>
				{tabs.map((i, index) => (
					<TabButton
						key={index}
						index={index}
						name={i}
						activeTab={activeTab}
						onHandleSearchType={() => setActiveTab(index)}
					/>
				))}
			</View>

			{children.map((i, index) => {
				return index == activeTab && i;
			})}
		</View>
	) : (
		<Text>Something went wrong rendering this content</Text>
	);
};

export default Tabs;
