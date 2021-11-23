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

const PcComponents = ({navigation}) => {
  const Card = ({component}) => {
    return(
    <TouchableHighlight
        activeOpacity={.1}
        underlayColor="white"
        onPress={() => navigation.navigate('Details', component)}>
    <View style={styles.cardRounded}>
        <View
        style={{
          height: 300,
          alignItems: 'center',
        }}>
        <Image
            source = {component.url}
            style= {{flex: 1,  resizeMode: 'contain'}}
        />
        <Text style = {styles.nameCategories}>{component.title}</Text>
        <Text style = {styles.productPrice}>₱ {component.price}</Text>
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
            <Text style = {styles.title}>Pc Components</Text>
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
                data={components}
                renderItem={({item}) => {
                return <Card component = {item}
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
      width: 160,
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

const components = [
  {
  id: 1,
  url: require('./img/TUFGAMINGB450.jpg'),
  title: "ASUS TUF B450M PLUS II SOCKET AM4",
  description: "\•Comprehensive cooling: VRM heatsink, PCH heatsink, Fan Xpert 2+\n•Next-gen connectivity: USB 3.2 Gen 2 Type-A support\n•AI Noise-Canceling Microphone: Provides crystal-clear in-game voice communication\n•Aura Sync RGB Lighting: Synchronize LED lighting with a vast portfolio of compatible PC gear",
  price: "10,420",
  },
  {
  id: 2,
  url: require('./img/3529-a_9deba49a-75b5-4a8c-a972-ec45cc4bb736.jpg'),
  title: "Gigabyte Aorus Rtx 3060Ti Master 8gb 256bit",
  description: "\•Brand: GIGABYTE\n•Model: GV-N306TAORUS M-8GD\n•Chipset Manufacturer: NVIDIA\n•GPU: GeForce RTX 3060 Ti\n•GPU: GeForce RTX 3060 Ti\n•Memory Interface: 256-Bit\n•DirectX: DirectX 12\n•Cooler: WINDFORCE STACK\n•Power Connector: 6+8-Pin\n•Max GPU Length: 290 mm\n•Slot Width: Triple Slot",
  price: "35,999",
  },
  {
  id: 3,
  url: require('./img/4877-a.jpg'),
  title: "Cougar Aqua 240 AIO RGB Liquid Cooling w/ Remote",
  description: "\•Thickness: 1.125 / 28.6mm, (2.25 / 57.15mm w/ fans)\n•Width: 4.75 / 120.65 mm\n•Depth: 274 mm\n•Pump Height: 0\n•Speed Controller: BIOS (fans only)\n•Cooling Fans: (2) 120 x 25mm\n•Connectors: (2) 4-Pin PWM, (1) 3-Pin RGB (w/splitter), (1) SATA\n•Weight: 37.3 oz / 1058g\n•Intel Sockets: 2066, 2011x, 1366, 115x,775\n•AMD Sockets: Cougar Aqua 240",
  price: "3,799",
  },
  {
  id: 4,
   url: require('./img/4002-a_b156d932-96b0-4062-878f-72832b9508cf_800x.jpg'),
   title: "AMD Ryzen 7 5700G Socket Am4 3.8GHz with Radeon Vega 8 Processor",
   description: "\•Realtek S1200A Codec: Features an unprecedented 108dB signal-to-noise ratio for the stereo line-out and a 103dB SNR for the line-in, providing pristine audio quality\n•Exclusive DTS® Custom audio: Delivers positional cues to stereo headphones, helping you to pinpoint enemies and action\n•Fan Xpert 2+: Ensures every fan achieves the best balance of cooling performance and acoustics\n•TUF Protection: SafeSlot, ESD Guards, DDR4 overvoltage protection, Digi+ VRM, and stainless-steel back I/O for long-term reliability",
   price: "22,000",
  },
  {
  id: 5,
  url: require('./img/3965-a_800x.jpg'),
  title: "MSI MPG B550 Gaming Carbon Wifi Socket Am4 Ddr4",
  description: "\•AMD B550\n•Supports AMD Ryzen 5000 Series / 4000 G-Series / 3000 Series Processors*\n•Max memory of 128GB and dual channel supported\n•* Not compatible with AMD Ryzen 5 3400G and Ryzen 3 3200G.\n•* BIOS update might require for AMD Zen 3 Ryzen 5000 series CPU.\n•DDR4 5100+ / 5000 / 4866 / 4800 / 4733 / 4600 / 4533 / 4400 / 4266 / 4133 / 4000 / 3866 / 3733 / 3600 / 3466 / 3200 / 3066 / 3000 / 2933 / 2800 / 2667 (A-XMP OC MODE)DDR4 3200 / 3066 / 3000 / 2933 / 2800 / 2667 / 2400 / 2133 / 1866 (JEDEC)",
  price: "1,555",
  },
  {
  id: 6,
  url: require('./img/COMC2308-a.jpg'),
  title: "Cooler Master MasterCase H500P Mesh Front Panel",
  description: "\•BRAND: Cooler Master\n•MODEL: MasterCase H500P\n•MODEL NUMBER: MCM-H500P-MGNN-S11\n•SERIES: MasterCase Series\n•SIZE: Mid Tower\n•AVAILABLE COLOR(S): Gun Metal Grey\n•MATERIALS: Steel, Plastic, Tempered Glass, Mesh\n•DIMENSIONS (L X W X H): 544 x 242 x 542mm / 21.4 x 9.5 x 21.3 inch\n•WEIGHT: 11.3 kg\n•MOTHERBOARD SUPPORT: Mini ITX, Micro ATX, ATX, E-ATX*, (*support for up to 12 x 10.7, will limit cable management features)",
  price: "9,475",
},
];

export default PcComponents;