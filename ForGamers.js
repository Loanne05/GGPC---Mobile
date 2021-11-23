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

const ForGamers = ({navigation}) => {
  const Card = ({gamer}) => {
    return(
    <TouchableHighlight
        activeOpacity={.1}
        underlayColor="white"
        onPress={() => navigation.navigate('Details', gamer)}>
    <View style={styles.cardRounded}>
        <View
        style={{
          height: 300,
          alignItems: 'center',
        }}>
        <Image
            source = {gamer.url}
            style= {{flex: 1,  resizeMode: 'contain'}}
        />
        <Text style = {styles.nameCategories}>{gamer.title}</Text>
        <Text style = {styles.productPrice}>₱ {gamer.price}</Text>
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
            <Text style = {styles.title}>For Gamers</Text>
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
                data={gamers}
                renderItem={({item}) => {
                return <Card gamer = {item}
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
      width: 120,
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

const gamers = [
  {
  id: 1,
  url: require('./img/AsusRogStrix.jpg'),
  title: "Asus ROG Strix Scar 15 Gaming Laptop",
  description: "\•Brand: Asus\n•Model: ASUS ROG STRIX SCAR 15 G533QM-\n•HF028TS BlackProcessor: AMD R9 5900HX\n•Memory: 16GB 2x8GB RAM\n•Storage: 1TB PCIE SSD\n•Display: 15.6inch FHD IPS 300HZ\n•Graphics: RTX3060 6GB GDDR6\n•S.: Windows 10\n•I/O Ports\n•1x 3.5mm Combo Audio Jack\n•1x HDMI 2.0b\n•3x USB 3.2 Gen 1 Type-A",
  price: "124,995.00",
  },
  {
  id: 2,
  url: require('./img/COCS2381-a.jpg'),
  title: "Corsair K65 RGB MINI 60% Mechanical Gaming Keyboard Cherry MX",
  description: "\•Brand: Corsair\n•Model: K65 RGB MINI\n•Weight: 0.58\n•Lighting: RGB\n•Keyboard Layout: NA\n•USB Polling Rate: Up to 8,000Hz with AXON\n•Keyswitches: CHERRY® MX SPEEDMatrix: 61 Keys\n•Connectivity: Wired\n•Adjustable Height: No\n•Additional colored and textured keycaps: Radiant Space Bar, CORSAIR logo\n•Media Controls YN: Yes",
  price: "5,995",
  },
  {
  id: 3,
  url: require('./img/4342-a_4bfaa3fe-fcdb-4ddd-a0d4-85c18f16fcd5.jpg'),
  title: "ViewSonic VX2468-PC-MHD 24” 1080p 165Hz 1500R Curved screen",
  description: "\•Brand: ViewSonicModel: VX2468-PC-MHD\n•Display Size (in.): 24\n•Viewable Area (in.): 23.6\n•Panel Type: VA Technology\n•Resolution: 1920 x 1080\n•Resolution Type: FHD\n•Static Contrast Ratio: 3,000:1 (typ)\n•Dynamic Contrast Ratio: 80M:1\n•Light Source: LED\n•Brightness: 250 cd/m² (typ)Colors: 16.7M",
  price: "11,200",
  },
  {
  id: 4,
  url: require('./img/RoyalKludge.jpg'),
  title: "Royal Kludge RK61 61 Keys Wireless",
  description: "\•Brand: Royal\n•Model: Kludge\n•Color Case: White/Black\n•Key Switch: Blue Switch/ Brown Switch\n•Switch arrow key function: FN + Enter\n•Switch secondary 6 functional key: FN + Left Ctrl\n•Dimension: 292*102*39mm\n•Net Weight: 0.5kg\n•Operating Force: 50g-60g\n•Keycap Type: ABS Double Shot Keycaps",
  price: "5,995",
  },
  
  
];

export default ForGamers;