import { StyleSheet, Dimensions } from 'react-native';

const { width: viewportWidth } = Dimensions.get('window');

const styles = StyleSheet.create({
	container: {
		backgroundColor: "#3a3a3a",
		flex: 1,
	},
	carouselContainer: {
		minHeight: 250,
	},
	carousel: {},

	image: {
		...StyleSheet.absoluteFillObject,
		width: "100%",
		height: 250,
	},
	imageContainer: {
		flex: 1,
		justifyContent: "center",
		width: viewportWidth,
		height: 250,
	},
	paginationContainer: {
		flex: 1,
		position: "absolute",
		alignSelf: "center",
		paddingVertical: 8,
		marginTop: 200,
	},
	paginationDot: {
		width: 8,
		height: 8,
		borderRadius: 4,
		marginHorizontal: 0,
	},
	infoRecipeContainer: {
		flex: 1,
		margin: 25,
		marginTop: 20,
		justifyContent: "center",
		alignItems: "center",
	},
	infoContainer: {
		flex: 1,
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "flex-start",

		shadowColor: "#000",
		shadowOffset: {
			width: 0,
			height: 4,
		},
		shadowOpacity: 0.3,
		shadowRadius: 4.65,

		elevation: 8,
	},
	buttonContainer: {
		flex: 1,
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "flex-start",
	},
	infoPhoto: {
		height: 20,
		width: 20,
		marginRight: 0,
	},
	infoRecipe: {
		fontSize: 14,
		fontWeight: "bold",
		marginLeft: 5,
		color: "white",
	},
	category: {
		fontSize: 14,
		fontWeight: "bold",
		margin: 10,
		color: "#2cd18a",
	},
	infoDescriptionRecipe: {
		textAlign: "left",
		fontSize: 16,
		marginTop: 30,
		margin: 15,
		color: "white",
	},
	infoRecipeName: {
		fontSize: 28,
		margin: 10,
		fontWeight: "bold",
		color: "white",
		textAlign: "center",
	},
	gradientPhoto: {
		backgroundColor: "rgba(0,0,0,0.3)",
		height: "100%",
		width: "100%",
		justifyContent: "center",
		alignItems: "center",
	},
});

export default styles;
