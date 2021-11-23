import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableHighlight,
  TextInput,
  ScrollView,
  FlatList,
  Dimensions
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/MaterialIcons';

const DEVICE_WIDTH = Dimensions.get("window").width/2-30;

const Smartphone = ({navigation}) => {
  const Card = ({phones}) => {
    return(
    <TouchableHighlight
        activeOpacity={.1}
        underlayColor="white"
        onPress={() => navigation.navigate('Details', phones)}>
    <View style={styles.cardRounded}>
        <View
        style={{
          height: 300,
          alignItems: 'center',
        }}>
        <Image
            source = {phones.url}
            style= {{flex: 1,  resizeMode: 'contain'}}
        />
        <Text style = {styles.nameCategories}>{phones.title}</Text>
        <Text style = {styles.productPrice}>₱ {phones.price}</Text>
        </View>
    </View>
    </TouchableHighlight>
  );
}
    return(
      <SafeAreaView
      style = {{
         flex:1,
         backgroundColor: "#FFF",
         borderColor: '#E5E5E5',
        }}>
        <View style = {{flex: 1}}>
        <View style = {styles.header}>
            <Icon name = "arrow-back" size={28} onPress={() => navigation.goBack()}/>
            <Text style = {styles.title}>Smartphone</Text>
            <Icon name="shopping-cart" size= {25}  color="black"/>
        </View>
      <View style ={styles.container}>
      <FlatList
            columnWrapperStyle={{justifyContent: 'space-between'}}
            contentContainerStyle={{
            alignSelf: 'flex-start'
            }}
                numColumns= {2}
                showsVerticalScrollIndicator={false}
                showsHorizontalScrollIndicator={false}
                data={phone}
                renderItem={({item}) => {
                return <Card phones = {item}
                keyExtractor={item => item.id}
                />;  
            }}
      />
      </View>
      </View>
      </SafeAreaView>
      
    );
}

const styles = StyleSheet.create({
    container:{
      flex: 1,
    },
    header: {
      paddingHorizontal: 20,
      marginTop: 20,
      paddingBottom: 10,
      flexDirection: 'row',
      justifyContent: 'space-between'
    },
    cardRounded:{
      height: 320,
      width: DEVICE_WIDTH,
      borderColor: "#EBF0FF",
      borderWidth: 0.9,
      marginHorizontal:16,
      marginVertical: 2,
      borderRadius: 5,
      marginBottom: 20,
      marginRight: 10,
      padding: 15,
  },
  border:{
      height:200,
      flexDirection: "row",
      right: 200
  },
  nameCategories: {
      fontSize: 14,
      textAlign: "center",
      color: "black",
      fontWeight:"bold",
      marginTop: 0,
      marginLeft: 0,
      paddingHorizontal: 10,
      fontStyle: "italic",
    },
    productPrice: {
      fontSize: 14,
      textAlign: "center",
      color: "#40BFFF",
      fontWeight: "bold",
      marginTop: 0,
      marginLeft: 0,
      fontStyle: "italic",
    },
    title: {
      backgroundColor: '#40BFFF', 
      width: 127,
      height: 35,
      fontSize: 20,
      borderRadius: 25,
      color: '#3c3c3c',
      fontWeight: 'bold',
      justifyContent: 'center',
      paddingLeft: 8,
      paddingTop: 2,
  },
});

const phone = [
  {
  id: 1,
  url: require('./img/Iphone.png'),
  title: "Apple iPhone 13",
  description: "\•6.1-inch Super Retina XDR display (2)\n•Cinematic mode adds shallow depth of field and shifts focus automatically in your videos\n•Advanced dual-camera system with 12MP Wide and Ultra Wide cameras; Photographic Styles, Smart HDR 4, Night mode, 4K Dolby Vision HDR recording\n•12MP TrueDepth front camera with Night mode, 4K Dolby Vision HDR recording\n•A15 Bionic chip for lightning-fast performance\n•Up to 19 hours of video playback (3)\n•Durable design with Ceramic Shield",
  price: "10,420",
  },
  {
  id: 2,
  url: require('./img/Xiaomi.png'),
  title: "Redmi Note 10 Pro 6GB+128GB Global Version",
  description: "\Performance\n• Qualcomm® Snapdragon™ 732G\n- Qualcomm® Kryo™ 470, Octa-core CPU,up to 2.3GHz\n- 8nm manufacturing process\n- Qualcomm® Adreno™ 618 GPU\n• 6GB+64GB, 6GB+128GB, 8GB+128GB*\n- LPDDR4X RAM\n- UFS 2.2 storage\n• Z-axis linear vibration motor",
  price: "12,590",
  },
  {
  id: 3,
  url: require('./img/Samsung.png'),
  title: "Samsung Galaxy A22 5G",
  description: "\•Dimensions	167.2 x 76.4 x 9 mm (6.58 x 3.01 x 0.35 in)\n•Weight	203 g (7.16 oz)\n•Build	Glass front, plastic frame, plastic back\n•SIM	Single SIM (Nano-SIM) or Dual SIM (Nano-SIM, dual stand-by)\n•OS	Android 11, One UI Core 3.1\n•Chipset	MediaTek MT6833 Dimensity 700 5G (7 nm)\n•CPU	Octa-core (2x2.2 GHz Cortex-A76 & 6x2.0 GHz Cortex-A55)\n•GPU	Mali-G57 MC2",
  price: "13,990",
  },
];

export default Smartphone;