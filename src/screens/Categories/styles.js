import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
	categoriesItemContainer: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
	},

	categoriesPhoto: {
		width: "100%",
		height: 180,
		alignItems: "center",
		justifyContent: "center",
	},
	gradientPhoto: {
		backgroundColor: "rgba(0,0,0,0.4)",
		height: "100%",
		width: "100%",
		justifyContent: "center",
		alignItems: "center",
	},
	categoriesName: {
		fontSize: 20,
		fontWeight: "700",
		textAlign: "center",
		color: "#ffffff",
		letterSpacing: 2,
		fontFamily: "Roboto",
	},
});

export default styles;
