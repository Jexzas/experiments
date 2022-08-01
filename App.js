import { useState, useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Button, TouchableWithoutFeedback, Image, Text, View, SafeAreaView, Pressable, FlatList } from 'react-native';
import { TouchableHighlight} from 'react-native-web';

const objectify = [
  {
   "name": "Home",
   "items": [
    "No items to display"
   ],
   "id": "1"
  },
  {
   "name": "Refrigerator",
   "items": [
    "Tea",
    "Corn",
    "Leftovers",
    "Chicken"
   ],
   "id": "2"
  },
  {
   "name": "Pantry",
   "items": [
    "Chips",
    "Pasta",
    "Candy"
   ],
   "id": "3"
  },
  {
   "name": "Freezer",
   "items": [
    "Re-added after delete"
   ],
   "id": "4"
  },
  {
   "name": "FruitsBasket",
   "items": [
    "Mangos"
   ],
   "id": "5"
  }
 ]

export default function App() {
  const [ bonk, setBonk ] = useState(0);
  const [ stuff, addStuff ] = useState([]);
  useEffect(() => {
    addStuff(objectify);
  }, []);


  const handlePress = () => {
    setBonk(bonk + 1);
    alert('bonk');
  }
  return (
    <SafeAreaView style={styles.container}>
      {stuff.map((place, index) => {
        return (
          <View key={index}>
            <Text style={styles.font}>{place.name}</Text>
          </View>
        )
      })}
      <Pressable onPress={handlePress} style={styles.button}><Text style={styles.font}>Button</Text></Pressable>
      <Button onPress={handlePress} title="Bonk"/>
      <TouchableHighlight onPress={() => alert('boing')}>
        <Image source={{ 
        width: 200,
        height: 300,
        uri: "https://picsum.photos/200/300"}}/>
      </TouchableHighlight>
      
      <Text style={styles.font}>I'm manipulating my iphone with this code</Text>
      <Text style={styles.font}>Bonk Counter: {bonk}</Text>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#6664a4',
    alignItems: 'center',
    justifyContent: 'center',
  },
  font: {
    fontSize: 28
  },
  button: {
    borderRadius: '6px',
    backgroundColor: 'red',
    justifyContent: 'center',
    alignContent: 'center'
  }
});
