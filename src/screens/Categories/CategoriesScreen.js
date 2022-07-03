import React, { useLayoutEffect } from "react";
import {
	FlatList,
	Text,
	View,
	Image,
	TouchableHighlight,
	ImageBackground,
} from "react-native";
import styles from "./styles";
import { categories } from "../../data/dataArrays";
import { getNumberOfRecipes } from "../../data/MockDataAPI";
import MenuImage from "../../components/MenuImage/MenuImage";

export default function CategoriesScreen(props) {
	const { navigation } = props;

	useLayoutEffect(() => {
		navigation.setOptions({
			headerTitleStyle: {
				fontWeight: "500",
				textAlign: "center",
				alignSelf: "center",
				color: "#ffffff",
			},
			headerLeft: () => (
				<MenuImage
					onPress={() => {
						navigation.openDrawer();
					}}
				/>
			),
			headerRight: () => <View />,
		});
	}, []);

	const onPressCategory = item => {
		const title = item.name;
		const category = item;
		navigation.navigate("RecipesList", { category, title });
	};

	const renderCategory = ({ item }) => (
		<TouchableHighlight
			underlayColor="#3A3A3A"
			onPress={() => onPressCategory(item)}
			style={{ flex: 1 }}
		>
			<View style={styles.categoriesItemContainer}>
				<ImageBackground
					style={styles.categoriesPhoto}
					source={{
						uri: item.photo_url,
					}}
					resizeMode="cover"
				>
					<View
						style={
							styles.gradientPhoto
						}
					>
						<View>
							<Text
								style={
									styles.categoriesName
								}
							>
								{
									item.name
								}
							</Text>
						</View>
					</View>
				</ImageBackground>
			</View>
		</TouchableHighlight>
	);

	return (
		<View
			style={{
				backgroundColor: "#313131",
				flex: 1,
			}}
		>
			<FlatList
				data={categories}
				renderItem={renderCategory}
				keyExtractor={item => `${item.id}`}
			/>
		</View>
	);
}
