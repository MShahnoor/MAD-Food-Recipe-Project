import React, { useLayoutEffect } from "react";
import { FlatList, ScrollView, Text, View, Image, ImageBackground,TouchableHighlight } from "react-native";
import styles from "./styles";
import { getIngredientUrl, getRecipesByIngredient, getCategoryName } from "../../data/MockDataAPI";

export default function IngredientScreen(props) {
  const { navigation, route } = props;

  const ingredientId = route.params?.ingredient;
  const ingredientUrl = getIngredientUrl(ingredientId);
  const ingredientName = route.params?.name;

  useLayoutEffect(() => {
    navigation.setOptions({
      headerTitleStyle: {
				fontWeight: "700",
				textAlign: "center",
				alignSelf: "center",
				color: "#ffffff",
				fontFamily: "Roboto",
			},
      title: route.params?.name,
    });
  }, []);

  const onPressRecipe = (item) => {
    navigation.navigate("Recipe", { item });
  };

  const renderRecipes = ({ item }) => (
    <TouchableHighlight underlayColor="#3A3A3A" onPress={() => onPressRecipe(item)}>
      <TouchableHighlight underlayColor="#3A3A3A" onPress={() => onPressRecipe(item)}>
        <View style={styles.container}>
          <ImageBackground style={styles.photo} source={{ uri: item.photo_url }}>
            <View style={styles.gradientPhoto}></View>
            </ImageBackground>
          <Text style={styles.title}>{item.title}</Text>
          <Text style={styles.category}>{getCategoryName(item.categoryId)}</Text>
        </View>
      </TouchableHighlight>
    </TouchableHighlight>
  );

  return (
		<ScrollView style={styles.mainContainer}>
			<View
				style={{
					borderBottomWidth: 0.4,
					marginBottom: 10,
					borderBottomColor: "grey",
				}}
			>
				<ImageBackground
					style={styles.photoIngredient}
					source={{
						uri:
							"" +
							ingredientUrl,
					}}
				>
					<View
						style={
							styles.gradientPhoto
						}
					></View>
				</ImageBackground>
			</View>
			<Text style={styles.ingredientInfo}>
				Recipes with {ingredientName}:
			</Text>
			<View
				style={{
					backgroundColor: "#313131",
					flex: 1,
				}}
			>
				<FlatList
					vertical
					showsVerticalScrollIndicator={
						false
					}
					numColumns={2}
					data={getRecipesByIngredient(
						ingredientId
					)}
					renderItem={renderRecipes}
					keyExtractor={item =>
						`${item.recipeId}`
					}
				/>
			</View>
		</ScrollView>
  );
}
