import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Image,
  FlatList,
  TouchableOpacity,
  TouchableHighlight,
  Dimensions,
  TextInput,
  ScrollView,
  InteractionManager,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useState } from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';

const DEVICE_WIDTH = Dimensions.get("window").width;

const SearchBar = ({navigation}) => {
    const [keyword, setKeyword] = useState("");
    const blank = () => {
        return(
        <Text>Hello</Text>
        );
}
    const Card3 = ({products3}) => {
        return(
        <TouchableHighlight
            activeOpacity={.1}
            underlayColor="white"
            onPress={() => navigation.navigate('Details', products3)}>
        <View style={styles.cardRounded}>
            <View
            style={{
            height: 50,
            width: DEVICE_WIDTH,
            alignItems: 'center',
            }}>
            <Text style = {styles.nameCategories}>{products3.title}</Text>
            </View>
        </View>
        </TouchableHighlight>
        );
}
    return(
        <SafeAreaView  style = {{flex: 1, backgroundColor: "white"}}>
            <View style = {styles.header}>
                <View>
                    <Icon name = "arrow-back" size={25} onPress={() => navigation.goBack()}/>
                </View>
                <View style = {{borderWidth: 1, width: 300, borderColor: "#EBF0FF", height: 35, justifyContent: 'space-around'}}>
                    <Icon style={styles.searchIcon} name="search" size= {22} color="#40BFFF" />
                    <TextInput style = {{paddingBottom: 17, paddingLeft: 30}} placeholder = "Search Product"
                    onChangeText={(text) => setKeyword(text)}
                    />
                </View>
            </View>
            <FlatList
            contentContainerStyle={{
            alignSelf: 'flex-start'
            }}
                showsVerticalScrollIndicator={false}
                showsHorizontalScrollIndicator={false}
                data={product3}
                renderItem={({item}) => {
                if (item.title.toLowerCase().includes(keyword.toLowerCase()))  {
                    return <Card3 products3 = {item}
                    keyExtractor={item => item.id}
                    />;
                } else {
                    (item.title.toLowerCase().includes(keyword.toLowerCase()))
                }
            }}
        />
        </SafeAreaView>
    );
}
const styles = StyleSheet.create({
    header: {
        paddingHorizontal: 20,
        marginTop: 14,
        flexDirection: 'row',
        borderBottomWidth: 1,
        paddingBottom: 20,
        borderColor: '#EBF0FF',
        justifyContent: 'space-between'
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
    searchIcon: {
        padding:3,
        marginLeft: 1,
        paddingTop: 13,
    },
    cardRounded:{
        width: DEVICE_WIDTH,
        borderColor: "#EBF0FF",
        borderWidth: 0.9,
        borderRadius: 5,
    },
    border:{
        height:200,
        flexDirection: "row",
        right: 200
    },
    nameCategories: {
        fontSize: 14,
        textAlign: "left",
        color: "black",
        fontWeight:"bold",
        marginTop: 0,
        marginLeft: 0,
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
})

const product3 = [
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
    url: require('./img/4280-a.jpg'),
    title: "Asus TUF Gaming H3 7.1 surround sound deep bass lightweight",
    description: "\•Brand: Asus\n•Model: TUF H3\n•Color: Gun Metal/ Red/ Silver\n•Product Type: 3.5mm headset\n•Usage Scenario: Gaming\n•Interface: Wired\n•Connector: 3.5mm\n•Support Platform:PCMACPlayStation® 4PlayStation® 5",
    price: "1,895",
    },
    {
    id: 5,
    url: require('./img/TUFGAMINGB450.jpg'),
    title: "ASUS TUF B450M PLUS II SOCKET AM4",
    description: "\•Comprehensive cooling: VRM heatsink, PCH heatsink, Fan Xpert 2+\n•Next-gen connectivity: USB 3.2 Gen 2 Type-A support\n•AI Noise-Canceling Microphone: Provides crystal-clear in-game voice communication\n•Aura Sync RGB Lighting: Synchronize LED lighting with a vast portfolio of compatible PC gear",
    price: "10,420",
    connect: "DETAILS",
    },
    {
    id: 6,
    url: require('./img/B450AORUSPROWIFI.jpg'),
    title: "B450 Aurous Pro Wifi",
    description: "\•Supports AMD Ryzen™ 5000 series / Ryzen 5000 G-Series / 3rd Gen Ryzen™/ 2nd Gen Ryzen™/ 1st Gen Ryzen™/ 2nd Gen Ryzen™ with Radeon™ Vega Graphics/ 1st Gen Ryzen™ with Radeon™ Vega Graphics/ Athlon™ with Radeon™ Vega Graphics Processors\n•Dual Channel Non-ECC Unbuffered DDR4, 4 DIMMs\n•Intel® Dual Band 802.11ac WIFI & BT 4.2\n•HDMI, DVI-D Ports for Multiple Display",
    price: "8,000",
    connect: "MSIB450",
    },
    {
    id: 7,
    url: require('./img/2141-a.jpg'),
    title: "MSI X570 Godlike Motherboard Socket Am4 Ddr4",
    description: "\•Supports AMD Ryzen™ 5000 Series/ 2nd and 3rd Gen AMD Ryzen™ / Ryzen™ 4000 G-Series / Ryzen™ with Radeon™ Vega Graphics and 2nd Gen AMD Ryzen™ with Radeon™ Graphics Desktop Processors for AM4 socket\n•Supports DDR4 Memory, up to 5000+(OC) MHz\n•Dynamic Dashboard: Built-in dynamic panel that indicates the status of GODLIKE and shows off your own personality.\n•Lightning Fast Game experience: PCIe 4.0, Triple Lightning Gen4 x4 M.2 with M.2 Shield Frozr, StoreMI, AMD Turbo USB 3.2 Gen2.",
    price: "41,000",
    connect: "GIGABYTEB450",
    },
    {
    id: 8,
    url: require('./img/AsusROGStrixZ590-FGamingWIFILGA1200Ddr4ATXGamingMotherboarda.jpg'),
    title: "ASUS TUF B450M PRO SOCKET AM4",
    description: "\•Realtek S1200A Codec: Features an unprecedented 108dB signal-to-noise ratio for the stereo line-out and a 103dB SNR for the line-in, providing pristine audio quality\n•Exclusive DTS® Custom audio: Delivers positional cues to stereo headphones, helping you to pinpoint enemies and action\n•Fan Xpert 2+: Ensures every fan achieves the best balance of cooling performance and acoustics\n•TUF Protection: SafeSlot, ESD Guards, DDR4 overvoltage protection, Digi+ VRM, and stainless-steel back I/O for long-term reliability",
    price: "12,000",
    connect: "GIGABYTEB450",
    },
    {
    id: 9,
    url: require('./img/2141-a.jpg'),
    title: "MSI MPG B550 Gaming Carbon Wifi Socket Am4 Ddr4",
    description: "\•AMD B550\n•Supports AMD Ryzen 5000 Series / 4000 G-Series / 3000 Series Processors*\n•Max memory of 128GB and dual channel supported\n•* Not compatible with AMD Ryzen 5 3400G and Ryzen 3 3200G.\n•* BIOS update might require for AMD Zen 3 Ryzen 5000 series CPU.\n•DDR4 5100+ / 5000 / 4866 / 4800 / 4733 / 4600 / 4533 / 4400 / 4266 / 4133 / 4000 / 3866 / 3733 / 3600 / 3466 / 3200 / 3066 / 3000 / 2933 / 2800 / 2667 (A-XMP OC MODE)DDR4 3200 / 3066 / 3000 / 2933 / 2800 / 2667 / 2400 / 2133 / 1866 (JEDEC)",
    price: "15,000",
    connect: "MSI",
    },
    {
    id: 10,
    url: require('./img/4223-a.jpg'),
    title: "Asus ROG Crosshair VIII Hero X570",
    description: "\•AMD AM4 socket: Ready for 2nd, and 3rd Gen AMD Ryzen™ processors and up to two M.2 drives, USB 3.2 Gen2, and AMD StoreMI to maximize connectivity and speed.\n•Comprehensive thermal design: Active chipset heatsink, M.2 aluminum heatsink and ROG Cooling Zone\n•Robust power delivery: Designed power solution with 14+2 IR3555 PowIRstages, ProCool II power connectors, microfine alloy chokes and 10K Japanese-made black metallic capacitors.\n•High-performance networking: On-board 2.5 Gbps Ethernet and Gigabit Ethernet, both with ASUS LANGuard protection, and support for GameFirst V software.",
    price: "22,490",
    connect: "Asus",
  },
];
export default SearchBar;