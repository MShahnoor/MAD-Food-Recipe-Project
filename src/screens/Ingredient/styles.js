import { StyleSheet,Dimensions } from 'react-native';

const { width, height } = Dimensions.get("window");

const SCREEN_WIDTH = width < height ? width : height;
const recipeNumColums = 2;
const RECIPE_ITEM_HEIGHT = 150;
const RECIPE_ITEM_MARGIN = 20;


const styles = StyleSheet.create({
  mainContainer:{
    backgroundColor: "#313131",
				flex: 1,
  },
  
  titleIngredient: {
    fontWeight: 'bold',
    fontSize: 20
  },
  photoIngredient: {
    width: '100%',
    height: 250,
    alignSelf: 'center'
  },
  ingredientInfo: {
    margin: 10,
    fontSize: 19,
    textAlign: 'left',
    fontWeight: 'bold',
		color: "#ffffff",
		letterSpacing: 2,
		fontFamily: "Roboto",
  },
  gradientPhoto: {
		backgroundColor: "rgba(0,0,0,0.4)",
		height: "100%",
		width: "100%",
		justifyContent: "center",
		alignItems: "center",
	},
  container: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
		marginLeft: RECIPE_ITEM_MARGIN,
		marginTop: 20,
		width:
			(SCREEN_WIDTH -
				(recipeNumColums + 1) *
					RECIPE_ITEM_MARGIN) /
			recipeNumColums,
		height: RECIPE_ITEM_HEIGHT + 75,
		marginBottom: 5,
		borderRadius: 10,
		borderWidth: 1,
		borderColor: "#313131",
		overflow: "hidden",
    backgroundColor:"#424242",
	},
	photo: {
		width:
			(SCREEN_WIDTH -
				(recipeNumColums + 1) *
					RECIPE_ITEM_MARGIN) /
			recipeNumColums,
		height: RECIPE_ITEM_HEIGHT,
	},
	title: {
		flex: 1,
		fontSize: 16,
		fontWeight: "bold",
		textAlign: "center",
		color: "#ffffff",
		letterSpacing: 2,
		fontFamily: "Roboto",
		marginTop: 3,
		marginRight: 5,
		marginLeft: 5,
	},
	category: {
    fontSize:12,
		marginTop: 5,
		marginBottom: 5,
    color: "#a0a0a0",
		letterSpacing: 2,
		fontFamily: "Roboto",
	},
});

export default styles;
