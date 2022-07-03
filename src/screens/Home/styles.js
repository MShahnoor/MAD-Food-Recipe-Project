import { StyleSheet } from 'react-native';
import { RecipeCard } from '../../AppStyles';

const styles = StyleSheet.create({
	container: {
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
	photo: {
		width: "100%",
		height: 180,
		alignItems: "center",
		justifyContent: "center",
	},
	title: {
		fontSize: 20,
		fontWeight: "700",
		textAlign: "center",
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
	statusBar: RecipeCard.statusBar,
});

export default styles;
