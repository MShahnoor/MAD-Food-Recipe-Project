import { StyleSheet, Dimensions } from 'react-native';
// screen sizing
const { width, height } = Dimensions.get('window');
// orientation must fixed
const SCREEN_WIDTH = width < height ? width : height;

const numColumns = 3;
// item size
const RECIPE_ITEM_HEIGHT = 100;
const RECIPE_ITEM_OFFSET = 10;
const RECIPE_ITEM_MARGIN = RECIPE_ITEM_OFFSET * 2;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: "center",
		margin: RECIPE_ITEM_OFFSET,
		marginTop: 15,
		width:
			(SCREEN_WIDTH - RECIPE_ITEM_MARGIN) / numColumns -
			RECIPE_ITEM_OFFSET -
			4,
		height: RECIPE_ITEM_HEIGHT + 50,
		backgroundColor: "#424242",
		borderRadius: 10,

		shadowColor: "#000",
		shadowOffset: {
			width: 0,
			height: 3,
		},
		shadowOpacity: 0.29,
		shadowRadius: 4.65,

		elevation: 7,
	},
	title: {
		margin: 5,
		marginBottom: 5,
		color: "#ffffff",
		fontSize: 12,
		textAlign: "center",
		fontWeight: "600",
		flexWrap: "wrap",
	},
	photo: {
		width:
			(SCREEN_WIDTH - RECIPE_ITEM_MARGIN) / numColumns -
			RECIPE_ITEM_OFFSET -
			4,
		height: RECIPE_ITEM_HEIGHT - 10,
		overflow: "hidden",
		borderTopLeftRadius: 10,
		borderTopRightRadius: 10,
	},
	gradientPhoto: {
		backgroundColor: "rgba(0,0,0,0.3)",
		height: "100%",
		width: "100%",
	},
	amount: {
		color: "#ffffff",
		fontSize: 11,
		opacity: 0.6,
		flexWrap: "wrap",
	},
});

export default styles;
