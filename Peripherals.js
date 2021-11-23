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

const Peripherals = ({navigation}) => {
  const Card = ({peripherals}) => {
    return(
    <TouchableHighlight
        activeOpacity={.1}
        underlayColor="white"
        onPress={() => navigation.navigate('Details', peripherals)}>
    <View style={styles.cardRounded}>
        <View
        style={{
          height: 300,
          alignItems: 'center',
        }}>
        <Image
            source = {peripherals.url}
            style= {{flex: 1,  resizeMode: 'contain'}}
        />
        <Text style = {styles.nameCategories}>{peripherals.title}</Text>
        <Text style = {styles.productPrice}>₱ {peripherals.price}</Text>
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
            <Text style = {styles.title}>Peripherals and Accesories</Text>
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
                data={peripheral}
                renderItem={({item}) => {
                return <Card peripherals = {item}
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
      width: 262,
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

const peripheral = [
  {
  id: 1,
  url: require('./img/4342-a_4bfaa3fe-fcdb-4ddd-a0d4-85c18f16fcd5.jpg'),
  title: "ViewSonic VX2468-PC-MHD 24” 1080p 165Hz 1500R Curved screen",
  description: "\•Brand: ViewSonicModel: VX2468-PC-MHD\n•Display Size (in.): 24\n•Viewable Area (in.): 23.6\n•Panel Type: VA Technology\n•Resolution: 1920 x 1080\n•Resolution Type: FHD\n•Static Contrast Ratio: 3,000:1 (typ)\n•Dynamic Contrast Ratio: 80M:1\n•Light Source: LED\n•Brightness: 250 cd/m² (typ)Colors: 16.7M",
  price: "11,200",
  },
  {
  id: 2,
  url: require('./img/4343-a_e91507e3-d988-40ae-b8e4-aa4ba0a3d5f7.jpg'),
  title: "APC Back-Ups BVX700LUI-MS 360 Watts 700va with Avr 8hrs of recharge time",
  description: "\•Brand: APC\n•Model: BVX700LUI-MS 360\n•Output power capacity: 360 Watts / 700VA\n•Nominal Output Voltage: 230V\n•Nominal Input Voltage: 230V\n•Input Connections: IEC 60320 C14\n•Cord Length: 1.2meters\n•Max Configurable Power (Watts): 360 Watts / 700VA\n•Output Frequency (sync to mains): 50/60 Hz +/- 1 Hz Sync to mains\n•Topology: Line interactive\n•Waveform type: Stepped approximation to a sinewave\n•Transfer Time: 6 ms typical: 10 ms maximum",
  price: "3,395",
  },
  {
  id: 3,
  url: require('./img/COCS2381-a.jpg'),
  title: "Corsair K65 RGB MINI 60% Mechanical Gaming Keyboard Cherry MX",
  description: "\•Brand: Corsair\n•Model: K65 RGB MINI\n•Weight: 0.58\n•Lighting: RGB\n•Keyboard Layout: NA\n•USB Polling Rate: Up to 8,000Hz with AXON\n•Keyswitches: CHERRY® MX SPEEDMatrix: 61 Keys\n•Connectivity: Wired\n•Adjustable Height: No\n•Additional colored and textured keycaps: Radiant Space Bar, CORSAIR logo\n•Media Controls YN: Yes",
  price: "5,995",
  },
  {
  id: 4,
  url: require('./img/RoyalKludge.jpg'),
  title: "Royal Kludge RK61 61 Keys Wireless",
  description: "\•Brand: Royal\n•Model: Kludge\n•Color Case: White/Black\n•Key Switch: Blue Switch/ Brown Switch\n•Switch arrow key function: FN + Enter\n•Switch secondary 6 functional key: FN + Left Ctrl\n•Dimension: 292*102*39mm\n•Net Weight: 0.5kg\n•Operating Force: 50g-60g\n•Keycap Type: ABS Double Shot Keycaps",
  price: "5,995",
  },

];

export default Peripherals;