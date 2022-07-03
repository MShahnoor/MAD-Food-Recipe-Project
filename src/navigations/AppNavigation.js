import React from 'react'
import { View, StatusBar } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import HomeScreen from "../screens/Home/HomeScreen";
import CategoriesScreen from "../screens/Categories/CategoriesScreen";
import RecipeScreen from "../screens/Recipe/RecipeScreen";
import RecipesListScreen from "../screens/RecipesList/RecipesListScreen";
import DrawerContainer from "../screens/DrawerContainer/DrawerContainer";
import IngredientScreen from "../screens/Ingredient/IngredientScreen";
import SearchScreen from "../screens/Search/SearchScreen";
import IngredientsDetailsScreen from "../screens/IngredientsDetails/IngredientsDetailsScreen";


const Stack = createStackNavigator();

function MainNavigator() {
	return (
		<Stack.Navigator
			screenOptions={{
				headerTitleStyle: {
					fontWeight: "400",
					textAlign: "center",
					alignSelf: "center",
					flex: 1,
					color: "#ffffff",
				},
				headerStyle: {
					backgroundColor: "#313131",
				},
				headerTintColor: "#ffffff",
			}}
		>
			<Stack.Screen
				name="Home"
				component={HomeScreen}
			/>
			<Stack.Screen
				name="Categories"
				component={CategoriesScreen}
			/>
			<Stack.Screen
				name="Recipe"
				component={RecipeScreen}
			/>
			<Stack.Screen
				name="RecipesList"
				component={RecipesListScreen}
			/>
			<Stack.Screen
				name="Ingredient"
				component={IngredientScreen}
			/>
			<Stack.Screen
				name="Search"
				component={SearchScreen}
			/>
			<Stack.Screen
				name="IngredientsDetails"
				component={IngredientsDetailsScreen}
			/>
		</Stack.Navigator>
	);
}

const Drawer = createDrawerNavigator();

function DrawerStack() {
	return (
		<Drawer.Navigator
			drawerPosition="left"
			initialRouteName="Main"
			screenOptions={{ headerShown: false }}
			drawerContent={({ navigation }) => (
				<DrawerContainer
					navigation={navigation}
				/>
			)}
		>
			<Drawer.Screen
				name="Main"
				component={MainNavigator}
			/>
		</Drawer.Navigator>
	);
}

export default function AppContainer() {
	return (
		<View style={{ flex: 1 }}>
			<StatusBar
				backgroundColor="#313131"
				barStyle="light-content"
			/>
			<NavigationContainer>
				<DrawerStack />
			</NavigationContainer>
		</View>
	);
} 
 

console.disableYellowBox = true;