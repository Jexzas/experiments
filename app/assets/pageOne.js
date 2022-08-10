import { StyleSheet, View, ImageBackground, Image, SafeAreaView, Text } from 'react-native';
import { Link } from 'react-router-native';
import { vw, vh, vmin, vmax } from 'react-native-expo-viewport-units';
import colors from '../config/colors';

export default function WelcomeScreen() {
    return (
      <ImageBackground style={styles.background} resizeMode="cover" source={require('./background.jpg')}>
        <View style={styles.topCenter}>
          <Image style={styles.logo} source={require('./logo-red.png')}/>
          <Text>Get Rid of Stuff</Text>
        </View>

        <View style={styles.loginButton}/>
        <View style={styles.registerButton}/>
      </ImageBackground>
    )
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center'
  },
  loginButton: {
    width: '100%',
    height: 70,
    backgroundColor: colors.primary
  },
  registerButton: {
    width: '100%',
    height: 70,
    backgroundColor: colors.secondary
  },
  topCenter: {
    position: 'absolute',
    top: 50,
    alignItems: 'center'
  },
  logo: {
    width: 100,
    height: 100
  }

})