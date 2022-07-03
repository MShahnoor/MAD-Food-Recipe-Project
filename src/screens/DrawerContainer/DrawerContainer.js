import React from "react";
import { View, Image } from "react-native";
import PropTypes from "prop-types";
import styles from "./styles";
import MenuButton from "../../components/MenuButton/MenuButton";
import drawerImage from "../../../assets/drawerImage3.png";

export default function DrawerContainer(props) {
	const { navigation } = props;
	return (
		<View style={styles.content}>
			<View style={styles.container}>
				<View style={styles.imageContainer}>
					<Image
						style={styles.photo}
						resizeMode="contain"
						source={drawerImage}
					></Image>
				</View>
				<MenuButton
					title="HOME"
					source={require("../../../assets/icons/home.png")}
					onPress={() => {
						navigation.navigate(
							"Home"
						);
						navigation.closeDrawer();
					}}
				/>
				<MenuButton
					title="CATEGORIES"
					source={require("../../../assets/icons/category.png")}
					onPress={() => {
						navigation.navigate(
							"Categories"
						);
						navigation.closeDrawer();
					}}
				/>
				<MenuButton
					title="SEARCH"
					source={require("../../../assets/icons/search.png")}
					onPress={() => {
						navigation.navigate(
							"Search"
						);
						navigation.closeDrawer();
					}}
				/>
			</View>
		</View>
	);
}

DrawerContainer.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }),
};
