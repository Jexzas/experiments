import { SafeAreaView, View, Text, StyleSheet, ImageBackground, Button, Pressable, Image} from "react-native";
import { vw, vh, vmin, vmax } from 'react-native-expo-viewport-units';
import { Link } from 'react-router-native';
import colors from '../config/colors';

export default function ViewImageScreen() {
    return (
        <View style={styles.container}>
            <View style={styles.closeIcon}/>
            <View style={styles.deleteIcon}/>
            <Image resizeMode='contain' style={styles.image} source={require('./chair.jpg')}/>
        </View>

    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.black,
        flex: 1
    },
    closeIcon: {
        top: 50,
        left: 30,
        width: 50,
        height: 50,
        position: 'absolute',
        backgroundColor: colors.primary
    },
    deleteIcon: {
        top: 50,
        right: 30,
        width: 50,
        height: 50,
        position: 'absolute',
        backgroundColor: colors.secondary
    },
    image: {
        width: "100%",
        height: "100%"
    }
})