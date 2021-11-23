import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Image,
  FlatList,
  TouchableHighlight,
  TouchableOpacity,
  TextInput,
  ScrollView,
  InteractionManager,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/MaterialIcons';

const Wishlist = ({navigation}) => {
    const Card = ({products3}) => {
        return(
        <TouchableHighlight
            activeOpacity={.1}
            underlayColor="white"
            onPress={() => navigation.navigate('Details', products3)}>
        <View style={styles.cardRounded}>
            <View
            style={{
              height: 300,
              alignItems: 'center',
            }}>
            <Image
                source = {products3.url}
                style= {{flex: 1,  resizeMode: 'contain'}}
            />
            <Text style = {styles.nameCategories}>{products3.title}</Text>
            <Text style = {styles.productPrice}>₱ {products3.price}</Text>
            </View>
        </View>
        </TouchableHighlight>
    );
}
    return(
        <SafeAreaView
        style = {{flex: 1, backgroundColor: "white"}}>
            <View style = {styles.header}>
            <Icon name = "arrow-back" size={25} onPress={() => navigation.goBack()}/>
            <Text style={{fontWeight:'bold', color: '#223263', paddingLeft: 20, padding: 3, fontSize: 14}}>Wishlist</Text>
        </View>
            <FlatList
            contentContainerStyle={{
            alignSelf: 'flex-start'
            }}
                numColumns= {2}
                showsVerticalScrollIndicator={false}
                showsHorizontalScrollIndicator={false}
                data={product3}
                renderItem={({item}) => {
                return <Card products3 = {item}
                keyExtractor={item => item.id}
                />;
            }}
        />
        </SafeAreaView>
    );
}
const styles = StyleSheet.create({
    header: {
        paddingHorizontal: 20,
        marginTop: 20,
        flexDirection: 'row',
        borderBottomWidth: 1,
        paddingBottom: 20,
        borderColor: '#EBF0FF'
    },
    body: {
        flex: 1,
        backgroundColor:'#E5E5E5'
    },

    checkoutBtn: {
        backgroundColor:'#40BFFF',
        borderRadius: 5,
        height: 35,
        width: 230,
        justifyContent: 'center',
        alignItems: 'center',
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
      cardRounded:{
        height: 320,
        width: 176,
        borderColor: "#EBF0FF",
        borderWidth: 0.9,
        marginHorizontal:5,
        marginVertical: 2,
        borderRadius: 5,
        marginBottom: 20,
        marginRight: 10,
        padding: 15,

    },
})

const product3 = [
    {
    id: 1,
    url: require('./img/TUFGAMINGB450.jpg'),
    title: "ASUS TUF B450M PLUS II SOCKET AM4",
    description: "\•Comprehensive cooling: VRM heatsink, PCH heatsink, Fan Xpert 2+\n•Next-gen connectivity: USB 3.2 Gen 2 Type-A support\n•AI Noise-Canceling Microphone: Provides crystal-clear in-game voice communication\n•Aura Sync RGB Lighting: Synchronize LED lighting with a vast portfolio of compatible PC gear",
    price: "10,420",
    connect: "DETAILS",
    },
    {
    id: 2,
    url: require('./img/B450AORUSPROWIFI.jpg'),
    title: "B450 Aurous Pro Wifi",
    description: "\•Supports AMD Ryzen™ 5000 series / Ryzen 5000 G-Series / 3rd Gen Ryzen™/ 2nd Gen Ryzen™/ 1st Gen Ryzen™/ 2nd Gen Ryzen™ with Radeon™ Vega Graphics/ 1st Gen Ryzen™ with Radeon™ Vega Graphics/ Athlon™ with Radeon™ Vega Graphics Processors\n•Dual Channel Non-ECC Unbuffered DDR4, 4 DIMMs\n•Intel® Dual Band 802.11ac WIFI & BT 4.2\n•HDMI, DVI-D Ports for Multiple Display",
    price: "8,000",
    connect: "MSIB450",
    },
    {
    id: 3,
    url:  require('./img/PowercolorRedDevilRx6800xtOC16GBD6-3DHEOC16gb256bitGDdr6DualBIOS_PerformanceUnlocked_AMDRDNA2Architecture_HDMI2.1VRR_PCIe4.0Support_RadeonVRReadyPremiumGraphicsCardGam-a.jpg'),
    title: "Powercolor Red Devil Rx 6800xt OC 16GBD6-3DHE/OC 16gb 256bit",
    description: "\•Graphics Engine: AXRX 6800XT 16GBD6-3DHE/OC\n•Video Memory: 16GB GDDR6\n•Stream Processor: 4608 Units\n•Engine Clock (OC): 2090MHz (Game) / up to 2340MHz (Boost)\n•Engine Clock (STD/Silent): 2015MHz (Game) / up to 2250MHz (Boost)\n•Memory Clock: 16.0 Gbps\n•Memory Interface: 256-bitDirectX® Support: 12",
    price: "74,399",
    connect: "Asus",
    },
    {
    id: 4,
    url: require('./img/COCS2381-a.jpg'),
    title: "Corsair K65 RGB MINI 60% Mechanical Gaming Keyboard Cherry MX",
    description: "\•Brand: Corsair\n•Model: K65 RGB MINI\n•Weight: 0.58\n•Lighting: RGB\n•Keyboard Layout: NA\n•USB Polling Rate: Up to 8,000Hz with AXON\n•Keyswitches: CHERRY® MX SPEEDMatrix: 61 Keys\n•Connectivity: Wired\n•Adjustable Height: No\n•Additional colored and textured keycaps: Radiant Space Bar, CORSAIR logo\n•Media Controls YN: Yes",
    price: "5,995",
    },
    {
    id: 5,
    url: require('./img/4280-a.jpg'),
    title: "Asus TUF Gaming H3 7.1 surround sound deep bass lightweight",
    description: "\•Brand: Asus\n•Model: TUF H3\n•Color: Gun Metal/ Red/ Silver\n•Product Type: 3.5mm headset\n•Usage Scenario: Gaming\n•Interface: Wired\n•Connector: 3.5mm\n•Support Platform:PCMACPlayStation® 4PlayStation® 5",
    price: "1,895",
    },
    {
    id: 6,
    url: require('./img/4342-a_4bfaa3fe-fcdb-4ddd-a0d4-85c18f16fcd5.jpg'),
    title: "ViewSonic VX2468-PC-MHD 24” 1080p 165Hz 1500R Curved screen",
    description: "\•Brand: ViewSonicModel: VX2468-PC-MHD\n•Display Size (in.): 24\n•Viewable Area (in.): 23.6\n•Panel Type: VA Technology\n•Resolution: 1920 x 1080\n•Resolution Type: FHD\n•Static Contrast Ratio: 3,000:1 (typ)\n•Dynamic Contrast Ratio: 80M:1\n•Light Source: LED\n•Brightness: 250 cd/m² (typ)Colors: 16.7M",
    price: "11,200",
  },
];
export default Wishlist;