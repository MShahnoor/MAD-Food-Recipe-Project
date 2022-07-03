import React, { useEffect, useLayoutEffect, useState } from "react";
import { FlatList, Text, View, Image, ImageBackground,TouchableHighlight, Pressable } from "react-native";
import styles from "./styles";
import MenuImage from "../../components/MenuImage/MenuImage";
import { getCategoryName, getRecipesByRecipeName, getRecipesByCategoryName, getRecipesByIngredientName } from "../../data/MockDataAPI";
import { TextInput } from "react-native-gesture-handler";

export default function SearchScreen(props) {
  const { navigation } = props;

  const [value, setValue] = useState("");
  const [data, setData] = useState([]);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerLeft: () => (
        <MenuImage
          onPress={() => {
            navigation.openDrawer();
          }}
        />
      ),
      headerTitle: () => (
        <View style={styles.searchContainer}>
          <Image style={styles.searchIcon} source={require("../../../assets/icons/search.png")} />
          <TextInput
            style={styles.searchInput}
            onChangeText={handleSearch}
            value={value}
          />
          <Pressable onPress={() => handleSearch("")}>
          <Image style={styles.searchIcon} source={require("../../../assets/icons/close.png")} />
          </Pressable>
        </View>
      ),
      headerRight: () => <View />,
    });
  }, [value]);

  useEffect(() => {}, [value]);

  const handleSearch = (text) => {
    setValue(text);
    var recipeArray1 = getRecipesByRecipeName(text);
    var recipeArray2 = getRecipesByCategoryName(text);
    var recipeArray3 = getRecipesByIngredientName(text);
    var aux = recipeArray1.concat(recipeArray2);
    var recipeArray = [...new Set(aux)];

    if (text == "") {
      setData([]);
    } else {
      setData(recipeArray);
    }
  };

  const onPressRecipe = (item) => {
    navigation.navigate("Recipe", { item });
  };

  const renderRecipes = ({ item }) => (
    <TouchableHighlight underlayColor="#3A3A3A" onPress={() => onPressRecipe(item)}>
      <View style={styles.container}>
        <ImageBackground style={styles.photo} source={{ uri: item.photo_url }}resizeMode="cover"
				>
				<View style={
							styles.gradientPhoto
						}>
              <View>
              <Text style={styles.title}>{item.title}</Text>
              </View>
            </View>
          </ImageBackground>
        
      </View>
    </TouchableHighlight>
  );

  return (
    
    <View style={{
      backgroundColor: "#313131",
      flex: 1,
    }}>
      <FlatList  data={data} renderItem={renderRecipes} keyExtractor={(item) => `${item.recipeId}`} />
    </View>
  );
}
