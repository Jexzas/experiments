import { StyleSheet, View, ImageBackground, Image, SafeAreaView, Text } from 'react-native';
import { Link } from 'react-router-native';
import { vw, vh, vmin, vmax } from 'react-native-expo-viewport-units';

export default function PageOne() {
    return (
        <>
        <View style={styles.container}>
        <ImageBackground style={styles.backgroundImage} resizeMode="cover" source={require('./assets/background.jpg')}>
    
          <SafeAreaView>
            <Image style={styles.image} source={require('./assets/logo-red.png')}/>
            <Text style={styles.tagline}>Sell What You Don't Need</Text>
           
          </SafeAreaView>
          </ImageBackground>
        </View>
        <View style={{
          flex: .2
        }}>
          <View style={{flex: .5, backgroundColor: 'red', justifyContent: 'center', alignItems: 'center'}}><Link to="/pageTwo"><Text style={{
            fontSize: 20
          }}>Page Two</Text></Link></View>
          <View style={{flex: .5, backgroundColor: 'grey'}}></View>
        </View>
        </>
    )
}


const styles = StyleSheet.create({
    backgroundImage: {
      width: '100%'
    },
    tagline: {
      position: 'relative',
      textAlign: 'center', 
      top: 40    
    },
    image: {
      alignSelf: 'center',
      height: 70,
      top: 30,
      width: 70
    },
    container: {
      textAlign: 'center',
      justifyContent: 'center',
      backgroundColor: 'grey',
      flex: .8,
      flexDirection: 'row'
    }
  })