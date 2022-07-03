import React, { useLayoutEffect } from "react";
import { FlatList, Text, View, TouchableHighlight, Image, ImageBackground } from "react-native";
import styles from "./styles";
import { recipes } from "../../data/dataArrays";
import MenuImage from "../../components/MenuImage/MenuImage";
import { getCategoryName } from "../../data/MockDataAPI";

export default function HomeScreen(props) {
	const { navigation } = props;

	useLayoutEffect(() => {
		navigation.setOptions({
			headerTitleStyle: {
				fontWeight: "700",
				textAlign: "center",
				alignSelf: "center",
				color: "#ffffff",
				fontFamily: "Roboto",
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

	const onPressRecipe = item => {
		navigation.navigate("Recipe", { item });
	};

	const renderRecipes = ({ item }) => (
		<TouchableHighlight
			underlayColor="#3A3A3A"
			onPress={() => onPressRecipe(item)}
		>
			<View style={styles.container}>
				<ImageBackground
					style={styles.photo}
					source={{
						uri: item.photo_url,
					}}
					resizeMode="cover"
				>
				<View style={
							styles.gradientPhoto
						}>
					<View>
						<Text style={styles.title}>
							{item.title}
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
				data={recipes}
				renderItem={renderRecipes}
				keyExtractor={item => `${item.recipeId}`}
			/>
		</View>
	);
}
