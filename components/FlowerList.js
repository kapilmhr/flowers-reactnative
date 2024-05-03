import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity, FlatList, Image } from 'react-native';
import { create } from "apisauce";
import { useState, useEffect } from "react";
import { setAllFlowers, setSelectedFlower } from './flowerReducer';
import { useDispatch } from 'react-redux';



const FlowerList = ({ navigation }) =>{
    const [flowers, setFlowers] = useState([]);
    const api = create({
      baseURL: "https://services.hanselandpetal.com/feeds/",
    });
    const dispatch = useDispatch()
    const fetchData=()=>{
      api.get('flowers.json')
      .then((response)=>response.data)
      .then((data)=>{
        console.log(data)
        dispatch(setAllFlowers(data))  
        setFlowers(data)})
    }
  
    useEffect(()=>{
      fetchData()
    },[])
  
    const onFlowerClick = (flower) =>{
      console.log(flower.name)
      dispatch(setSelectedFlower(flower))  

      navigation.navigate('Detail', { flower: flower })

    }
    return (
      <View style={styles.container}>
        <Text>Flowers!</Text>
        <StatusBar style="auto" />
        <View>
          <FlatList
          data={flowers}
          renderItem={({item}) => (
           <TouchableOpacity key={item.productId} onPress={()=>onFlowerClick(item)}>
              <View style={styles.item}>
              <View><Image source={{uri: 'https://services.hanselandpetal.com/photos/'.concat(item.photo)}}
              style={{width: 60, height: 60,resizeMode: 'contain'}}/></View>
            <Text style={styles.itemText}>{item.name} </Text>
          </View>
           </TouchableOpacity>
          )}
        />
         
        </View>
  
      </View>
    );
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
  
  export default FlowerList;
