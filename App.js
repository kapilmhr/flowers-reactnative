import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity, FlatList, Image } from 'react-native';
import FlowerDetail from './components/FlowerDetail';
import FlowerList from './components/FlowerList';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { store } from './store'
import { Provider } from 'react-redux'


const Stack = createNativeStackNavigator();


export default function App() {
  console.log(store)
  return (
    <Provider store={store}>
    <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={FlowerList}
        options={{ title: 'Flower' }}
      />
      <Stack.Screen name="Detail" component={FlowerDetail} />
    </Stack.Navigator>
  </NavigationContainer>
      </Provider>
  );
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 0,
    backgroundColor: '#E8EAED',
    alignItems: 'center',
    justifyContent: 'center',
  },
  item: {
    backgroundColor: '#FFF',
    padding: 10,
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    marginBottom: 20,
  },
  itemText: {
    maxWidth: '80%',
    padding: 15,
  },
});
