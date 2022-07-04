import React, { useLayoutEffect } from "react";
import {
	FlatList,
	Text,
	View,
	TouchableHighlight,
	ImageBackground,
} from "react-native";
import styles from "./styles";
import { getRecipes, getCategoryName } from "../../data/MockDataAPI";

export default function RecipesListScreen(props) {
	const { navigation, route } = props;

	const item = route?.params?.category;
	const recipesArray = getRecipes(item.id);

	useLayoutEffect(() => {
		navigation.setOptions({
			title: route.params?.title,
			headerRight: () => <View />,
			headerTitleStyle: {
				fontWeight: "500",
				textAlign: "center",
				alignSelf: "center",
				color: "#ffffff",
			},
		});
	}, []);

	const onPressRecipe = item => {
		navigation.navigate("Recipe", { item });
	};

	const renderRecipes = ({ item }) => (
		<TouchableHighlight
			underlayColor="#3a3a3a"
			onPress={() => onPressRecipe(item)}
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
						<View
							style={
								styles.titleContainer
							}
						>
							<Text
								style={
									styles.title
								}
							>
								{
									item.title
								}
							</Text>
						</View>
					</View>
				</ImageBackground>
			</View>
		</TouchableHighlight>
	);

	return (
		<View style={{ backgroundColor: "#313131", flex: 1 }}>
			<FlatList
				vertical
				showsVerticalScrollIndicator={false}
				numColumns={1}
				data={recipesArray}
				renderItem={renderRecipes}
				keyExtractor={item =>
					`${item.recipeId}`
				}
			/>
		</View>
	);
}
