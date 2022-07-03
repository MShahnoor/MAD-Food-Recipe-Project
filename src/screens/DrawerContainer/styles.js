import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
	content: {
		flex: 1,
		flexDirection: "row",
		justifyContent: "center",
		backgroundColor: "#313131",
	},
	container: {
		flex: 1,
		alignItems: "flex-start",
		paddingHorizontal: 20,
	},
	imageContainer: {
		marginTop: "20%",
		width: "100%",
		height: "20%",
		// backgroundColor: "black",
		marginBottom: 60,
	},
	photo: {
		width: "100%",
		alignSelf: "flex-start",
	},
});

export default styles;
