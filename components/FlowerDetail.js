import { StatusBar } from 'expo-status-bar';
import { useEffect } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, FlatList, Image } from 'react-native';
import { useSelector } from 'react-redux';

const FlowerDetail = ({ navigation, route }) =>{
    // const flower = route.params.flower
    const flower = useSelector((state) => state.flower.selectedFlower)
debugger
    return(
        <View>
     <View><Image source={{uri: 'https://services.hanselandpetal.com/photos/'.concat(flower.photo)}} 
     style={{width: 200, height: 200,resizeMode: 'contain'}}/>
     </View>
<Text>{flower.name}</Text>
<Text>${flower.price}</Text>
<Text>{flower.instructions}</Text>


        </View>
    )
}
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      paddingTop: 50,
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
  
  export default FlowerDetail;
