import { StyleSheet } from 'react-native';
import { RecipeCard } from '../../AppStyles';

const styles = StyleSheet.create({
	categoriesItemContainer: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
		margin: 10,
		marginTop: 5,
		marginBottom: 5,
		borderRadius: 10,
		borderWidth: 1,
		borderColor: "#313131",
		overflow: "hidden",
	},

	categoriesPhoto: {
		width: "100%",
		height: 180,
		alignItems: "center",
		justifyContent: "center",
	},
	gradientPhoto: {
		backgroundColor: "rgba(0,0,0,0.3)",
		height: "100%",
		width: "100%",
		justifyContent: "center",
		alignItems: "center",
	},
	title: {
		fontSize: 20,
		fontWeight: "800",
		textAlign: "center",
		color: "#ffffff",
		letterSpacing: 1,
	},
	titleContainer: {
		backgroundColor: "rgba(0,0,0,0.2)",
		height: "25%",
		width: "100%",
		justifyContent: "center",
		alignItems: "center",
	},
});

export default styles;
