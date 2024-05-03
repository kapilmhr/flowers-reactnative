import { Text, View, Image, StyleSheet } from 'react-native'

const Flower = ({flower})=> {
    console.log(flower)
    return (
        <View style={styles.item}>
            <View><Image source={{uri: 'https://services.hanselandpetal.com/photos/agapanthus.jpg'}}
            style={{width: 60, height: 60,resizeMode: 'contain'}}/></View>
          <Text style={styles.itemText}>{flower.name} </Text>
        </View>
      )
  }

  const styles = StyleSheet.create({
    item: {
      backgroundColor: '#FFF',
      padding: 10,
      borderRadius: 10,
      flexDirection: 'row',
      alignItems: 'flex-start',
      justifyContent: 'flex-start',
      marginBottom: 20,
    },
    itemLeft: {
      flexDirection: 'row',
      alignItems: 'center',
      flexWrap: 'wrap'
    },
    square: {
      width: 24,
      height: 24,
      backgroundColor: '#55BCF6',
      opacity: 0.4,
      borderRadius: 5,
      marginRight: 15,
    },
    itemText: {
      maxWidth: '80%',
      padding: 15,
    },
    circular: {
      width: 12,
      height: 12,
      borderColor: '#55BCF6',
      borderWidth: 2,
      borderRadius: 5,
    },
  });

export default Flower;

