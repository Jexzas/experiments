import { SafeAreaView, View, Text, StyleSheet, ImageBackground, Button, Pressable } from "react-native";
import { vw, vh, vmin, vmax } from 'react-native-expo-viewport-units';
import { Link } from 'react-router-native';

export default function PageTwo() {
    return (
        <>
        <View style={styles.container}>
            <SafeAreaView>
                <View style={styles.topPart}>
                    <Link to="/" style={styles.homeButton}><></></Link>
                    <Pressable title="" style={{
                        height: vh(5),
                        width: vh(5),
                        backgroundColor: 'dodgerblue',
                        right: 15
                    }}></Pressable>
                </View>
                <ImageBackground  style={styles.middle} resizeMode="cover" source={require('./assets/chair.jpg')}>
                    <View style={styles.image}></View>
                </ImageBackground>
            </SafeAreaView>
        </View>
        </>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'black',
        width: vw(100),
        height: vh(100)
    },
    topPart: {
        flex: .3,
        flexDirection: "row",
        justifyContent: "space-between"
    },
    middle: {
        flex: .7,
        backgroundColor: 'white',
        justifyContent: 'center',
        top: vh(15),
        width: vw(100),
        height: vh(60)
    },
    image: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    homeButton: {
        left: 15,
        height: vh(5),
        width: vh(5),
        backgroundColor: 'red'
    }


})