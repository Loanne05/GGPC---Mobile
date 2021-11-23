import React from 'react';
import {
  View,
  SafeAreaView,
  Text,
  StyleSheet,
  TouchableHighlight,
  FlatList,
  Image,
  Dimensions,
} from 'react-native';
import {ScrollView, TextInput, TouchableOpacity} from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { useState } from 'react';
import CarouselItem from './carouselItem';

const DEVICE_WIDTH = Dimensions.get("window").width;


const MainScreen = ({navigation}) =>{
    const Card = ({products}) => {
        return(
        <TouchableHighlight
            activeOpacity={.1}
            underlayColor="white"
            onPress={() => navigation.navigate('Details', products)}>
        <View style={styles.cardRounded}>
            <View
            style={{
              height: 300,
              alignItems: 'center',
            }}>
            <Image
                source = {products.url}
                style= {{flex: 1,  resizeMode: 'contain'}}
            />
            <Text style = {styles.nameCategories}>{products.title}</Text>
            <Text style = {styles.productPrice}>₱ {products.price}</Text>
            </View>
        </View>
        </TouchableHighlight>
    );
}
    const Card2 = ({products2}) => {
    return(
    <TouchableHighlight
        activeOpacity={.1}
        underlayColor="white"
        onPress={() => navigation.navigate('Details', products2)}>
    <View style={styles.cardRounded}>
            <View
            style={{
              height: 300,
              alignItems: 'center',
            }}>
            <Image
                source = {products2.url}
                style= {{flex: 1,  resizeMode: 'contain'}}
            />
        <Text style = {styles.nameCategories}>{products2.title}</Text>
        <Text style = {styles.productPrice}>₱ {products2.price}</Text>
        </View>
    </View>
    </TouchableHighlight>
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
    const [keyword, setKeyword] = useState("");
    return(
        <SafeAreaView
         style = {{
            flex:1,
            paddingHorizontal: 7,
            backgroundColor: "#FFF",
            paddingBottom: 1,
            borderColor: '#E5E5E5',
        }}>
        <View style ={styles.container}>
        <View style = {styles.navBar}>
            <TouchableOpacity onPress={() => navigation.navigate('Search')}>
            <View style = {{borderRadius: 20, backgroundColor: '#40BFFF', alignItems: 'center'}}>
                <Icon style={styles.searchIcon} name="search" size= {22} color="#FFF" />
            </View>
            </TouchableOpacity>
        </View> 
        <View style={styles.rightNav}> 
            <TouchableOpacity>
                <Icon style={styles.navItem} name="menu" size= {25} color="#40BFFF" onPress={() => navigation.toggleDrawer()}/>
            </TouchableOpacity>
            <TouchableOpacity>
                <Icon style={styles.navItem} name="account-circle" size= {25} color="#40BFFF"/>
            </TouchableOpacity>
        </View>
        </View>
        <ScrollView showsVerticalScrollIndicator={false} style ={styles.body}>
        <View styles= {styles.body}>
        <CarouselItem/>
        <View style = {styles.textView}>
        <Text style = {styles.textBody}>Flash Sale</Text>
        <TouchableOpacity>
        <Text style = {{color: '#40BFFF', fontSize: 15}}>See More</Text>
        </TouchableOpacity>
        </View>
        <View style = {styles.product12Con}>
        <FlatList
            horizontal
            contentContainerStyle={{
            paddingBottom: 10,
            alignSelf: 'flex-start'
            }}
                showsVerticalScrollIndicator={false}
                showsHorizontalScrollIndicator={false}
                data={product}
                renderItem={({item}) => {
                if (item.title.toLowerCase().includes(keyword.toLowerCase()))  {
                return <Card products = {item}
                keyExtractor={item => item.id}
                />;
                }
            }}
        />
        <FlatList
            horizontal
            contentContainerStyle={{
            paddingBottom: 30,
            alignSelf: 'flex-start'
            }}
                showsVerticalScrollIndicator={false}
                showsHorizontalScrollIndicator={false}
                data={product2}
                renderItem={({item}) => {
                if (item.title.toLowerCase().includes(keyword.toLowerCase()))  {
                return <Card2 products2 = {item}
                keyExtractor={item => item.id}
                />;
                }
            }}
        />
        </View>
        <View style = {styles.viewBg}>
        <Image source = {{uri: "https://scontent.xx.fbcdn.net/v/t1.15752-9/p403x403/255973627_927432718172986_6961933050334907198_n.png?_nc_cat=100&ccb=1-5&_nc_sid=aee45a&_nc_eui2=AeEs2jtU_UP8rggNxlR7adeM5OwOwzWimCTk7A7DNaKYJH2oppexoH3QLzu6s2NJa7cgGU5zCm_EGIJ2d8BzeEV6&_nc_ohc=77In2d0d0JwAX89zMC1&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=1f76e9e44b6b6fdf0b41716a86e6b4f2&oe=61B6BD4D"}} style = {styles.backgroundImage}/>
        </View>
        <View style = {styles.product3Con}>
        <FlatList
            contentContainerStyle={{
            alignSelf: 'flex-start'
            }}
                numColumns= {2}
                showsVerticalScrollIndicator={false}
                showsHorizontalScrollIndicator={false}
                data={product3}
                renderItem={({item}) => {
                if (item.title.toLowerCase().includes(keyword.toLowerCase()))  {
                return <Card3 products3 = {item}
                keyExtractor={item => item.id}
                />;
                }
            }}
        />
        </View>
        </View>
        </ScrollView>
        <View style ={styles.tabBar}>
          <TouchableOpacity style={styles.tabItem}>
            <Icon name="home" size= {25}  color="#40BFFF"/>
            <Text style={styles.tabTitle}>Home</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.tabItem} onPress={() => navigation.navigate('Wish')}>
            <Icon name="favorite" size= {25}  color="#40BFFF" borderColor = 'black' tintColor = "black"/>
            <Text style={styles.tabTitle} color="#40BFFF">Wishlist</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.tabItem} onPress={() => navigation.navigate('Cart')}>
          <Icon name="shopping-cart" size= {25}  color="#40BFFF" borderColor = 'black' tintColor = "black"/>
          <Text style={styles.tabTitle}>Cart</Text>
          </TouchableOpacity>
        </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container:{
        marginTop: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 10,
        borderBottomWidth: 1,
        borderColor: '#E5E5E5'
    },
    navBar:{
        backgroundColor: '#fff',
        paddingHorizontal:15, 
        height: 42,
        width: 270,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    searchBar:{
        flexDirection:"row",
        borderRadius: 5,
        borderColor: '#EBF0FF',
    },
    searchText:{
        fontSize: 13,
        fontWeight: "bold",
        flex: 1,
        color: '#9098B1',
        borderColor: '#9098B1',
        marginLeft: 5
    },
    searchIcon: {
        padding:3,
        marginLeft: 1
    },
    rightNav:{
        flexDirection: 'row',
        paddingRight: 10
    },
    navItem:{
        marginLeft: 15,
        paddingTop: 10
    },
    body:{
        flex: 1,
    },
    tabBar:{
        backgroundColor: '#FFFFFF',
        height: 65,
        borderColor: '#E5E5E5',
        flexDirection: 'row',
        justifyContent: 'space-around',
        paddingTop: 10,
    },
    tabItem: {
        alignItems: 'center',
        color: '#40BFFF',
        justifyContent: 'center',
    },
    tabTitle: {
        fontSize: 11,
        color: '#3c3c3c',
        paddingTop: 4,
    },
    textBody: {
        color: 'black',
        fontSize: 14,
        fontWeight: "bold",
    },
    textView: {
        color: '#223263',
        fontSize: 14,
        fontWeight: "bold",
        paddingHorizontal: 20,
        bottom: 40,
        justifyContent: 'space-between',
        flexDirection: "row",
        alignItems:"center",
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
      viewBg:{
        top: 25,
        height: 300,
        width: DEVICE_WIDTH,
        borderRadius: 5,
        paddingRight: 15.5
      },
      backgroundImage:{
        height: 170,
        borderRadius: 5
      },
      product12Con:{
        flex: 1,
        bottom: 30,
      },
      product3Con:{
        flex: 1,
        bottom: 65,
      },
});

const product = [
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
    url: require('./img/2141-a.jpg'),
    title: "MSI X570 Godlike Motherboard Socket Am4 Ddr4",
    description: "\•Supports AMD Ryzen™ 5000 Series/ 2nd and 3rd Gen AMD Ryzen™ / Ryzen™ 4000 G-Series / Ryzen™ with Radeon™ Vega Graphics and 2nd Gen AMD Ryzen™ with Radeon™ Graphics Desktop Processors for AM4 socket\n•Supports DDR4 Memory, up to 5000+(OC) MHz\n•Dynamic Dashboard: Built-in dynamic panel that indicates the status of GODLIKE and shows off your own personality.\n•Lightning Fast Game experience: PCIe 4.0, Triple Lightning Gen4 x4 M.2 with M.2 Shield Frozr, StoreMI, AMD Turbo USB 3.2 Gen2.",
    price: "41,000",
    connect: "GIGABYTEB450",
    },
    {
    id: 4,
    url: require('./img/AsusROGStrixZ590-FGamingWIFILGA1200Ddr4ATXGamingMotherboarda.jpg'),
    title: "ASUS TUF B450M PRO SOCKET AM4",
    description: "\•Realtek S1200A Codec: Features an unprecedented 108dB signal-to-noise ratio for the stereo line-out and a 103dB SNR for the line-in, providing pristine audio quality\n•Exclusive DTS® Custom audio: Delivers positional cues to stereo headphones, helping you to pinpoint enemies and action\n•Fan Xpert 2+: Ensures every fan achieves the best balance of cooling performance and acoustics\n•TUF Protection: SafeSlot, ESD Guards, DDR4 overvoltage protection, Digi+ VRM, and stainless-steel back I/O for long-term reliability",
    price: "12,000",
    connect: "GIGABYTEB450",
    },
    {
    id: 5,
    url: require('./img/2141-a.jpg'),
    title: "MSI MPG B550 Gaming Carbon Wifi Socket Am4 Ddr4",
    description: "\•AMD B550\n•Supports AMD Ryzen 5000 Series / 4000 G-Series / 3000 Series Processors*\n•Max memory of 128GB and dual channel supported\n•* Not compatible with AMD Ryzen 5 3400G and Ryzen 3 3200G.\n•* BIOS update might require for AMD Zen 3 Ryzen 5000 series CPU.\n•DDR4 5100+ / 5000 / 4866 / 4800 / 4733 / 4600 / 4533 / 4400 / 4266 / 4133 / 4000 / 3866 / 3733 / 3600 / 3466 / 3200 / 3066 / 3000 / 2933 / 2800 / 2667 (A-XMP OC MODE)DDR4 3200 / 3066 / 3000 / 2933 / 2800 / 2667 / 2400 / 2133 / 1866 (JEDEC)",
    price: "15,000",
    connect: "MSI",
    },
    {
    id: 6,
    url: require('./img/4223-a.jpg'),
    title: "Asus ROG Crosshair VIII Hero X570",
    description: "\•AMD AM4 socket: Ready for 2nd, and 3rd Gen AMD Ryzen™ processors and up to two M.2 drives, USB 3.2 Gen2, and AMD StoreMI to maximize connectivity and speed.\n•Comprehensive thermal design: Active chipset heatsink, M.2 aluminum heatsink and ROG Cooling Zone\n•Robust power delivery: Designed power solution with 14+2 IR3555 PowIRstages, ProCool II power connectors, microfine alloy chokes and 10K Japanese-made black metallic capacitors.\n•High-performance networking: On-board 2.5 Gbps Ethernet and Gigabit Ethernet, both with ASUS LANGuard protection, and support for GameFirst V software.",
    price: "22,490",
    connect: "Asus",
  },
];
const product2 = [
    {
    id: 1,
    url: require('./img/3529-a_9deba49a-75b5-4a8c-a972-ec45cc4bb736.jpg'),
    title: "Gigabyte Aorus Rtx 3060Ti Master 8gb 256bit",
    description: "\•Brand: GIGABYTE\n•Model: GV-N306TAORUS M-8GD\n•Chipset Manufacturer: NVIDIA\n•GPU: GeForce RTX 3060 Ti\n•GPU: GeForce RTX 3060 Ti\n•Memory Interface: 256-Bit\n•DirectX: DirectX 12\n•Cooler: WINDFORCE STACK\n•Power Connector: 6+8-Pin\n•Max GPU Length: 290 mm\n•Slot Width: Triple Slot",
    price: "35,999",
    connect: "DETAILS",
    },
    {
    id: 2,
    url:  require('./img/GigabyteRtx3070MasterGV-N3070AORUS-M-8GD8gb256bitGDdr6MAX-COVEREDcooling_LCDEdgeView_RGBFusion2.0_6videooutputs_ProtectionmetalbackplateGamingVideocard-a.jpg'),
    title: "Gigabyte Rtx 3070 Master GV-N3070AORUS-M-8GD 8gb 256bit",
    description: "\•Graphics Processing: GeForce RTX™ 3070\n•CUDA® Cores: 5888\n•Memory Size: 8 GB\n•Memory Bus: 256 bit\n•Card Bus: PCI-E 4.0 x 16\n•Multi-view: 4\n•PCB Form: ATX\n•OpenGL: 4.6\n•Power Connectors: 8 pin*1\n•SLI Support: N/A",
    price: "69,995",
    connect: "MSIB450",
    },
    {
    id: 3,
    url:  require('./img/PalitRtx3060TiDualNE6306T019P2-190AD8gb256bitGDdr6VRReady_4864CUDACores_488MemoryBandwidth_RGBLightingGraphicsCardGamingVideocard-a.jpg'),
    title: "Palit Rtx 3060Ti Dual NE6306T019P2-190AD 8gb 256bit",
    description: "\•Memory Amount: 8G\n•Memory Interface: 256bit\n•DRAM Type: GDDR6\n•Graphics Clock: 1410 MHz\n•Boost Clock: 1665 MHz\n•Memory Clock: 14 Gbps\n•CUDA Cores: 4864\n•Memory Bandwidth (GB/sec): 448",
    price: "47,600",
    connect: "GIGABYTEB450",
    },
    {
    id: 4,
    url:  require('./img/3536-a.jpg'),
    title: "Asus ROG Strix Rtx 3070 Gaming OC 8gb 256bit",
    description: "\•Graphic Engine: NVIDIA® GeForce RTX™ 3070\n•Bus Standard: PCI Express 4.0Open\n•GL: OpenGL®4.6\n•Video Memory: 8GB GDDR6\n•Engine Clock OC Mode: 1935 MHz (Boost Clock)\n•Engine Clock Gaming Mode: 1905 MHz (Boost Clock)\n•CUDA Core: 5888Memory Speed: 14 Gbps",
    price: "54,395",
    connect: "GIGABYTEB450",
    },
    {
    id: 5,
    url:  require('./img/ZotacRtx3070AMPHoloZT-A30700F-10P8gb256bitGDdr6VRReady_SPECTRA2.0RGBLighting_IceStorm2.0AdvancedCooling_ActiveFanControlwithFREEZEFanStop_MetalWraparoundRGBBackplateGraphicsC-a.jpg'),
    title: "Zotac Rtx 3070 AMP Holo ZT-A30700F-10P 8gb 256bit",
    description: "\•GPUGeForce: RTX 3070\n•CUDA cores: 5888\n•Video Memory: 8GB GDDR6\n•Memory Bus: 256-bit\n•Engine ClockBoost: 1785 MHz\n•Memory Clock: 14 Gbps\n•PCI Express:0 16x\n•Display Outputs: 3 x DisplayPort 1.4a (up to 7680x4320@60Hz), HDMI 2.1* (up to 7680x4320@60Hz), \n•*Ultra-High-Speed HDMI Cable is required to support",
    price: "56,999",
    connect: "MSI",
    },
    {
    id: 6,
    url:  require('./img/PowercolorRedDevilRx6800xtOC16GBD6-3DHEOC16gb256bitGDdr6DualBIOS_PerformanceUnlocked_AMDRDNA2Architecture_HDMI2.1VRR_PCIe4.0Support_RadeonVRReadyPremiumGraphicsCardGam-a.jpg'),
    title: "Powercolor Red Devil Rx 6800xt OC 16GBD6-3DHE/OC 16gb 256bit",
    description: "\•Graphics Engine: AXRX 6800XT 16GBD6-3DHE/OC\n•Video Memory: 16GB GDDR6\n•Stream Processor: 4608 Units\n•Engine Clock (OC): 2090MHz (Game) / up to 2340MHz (Boost)\n•Engine Clock (STD/Silent): 2015MHz (Game) / up to 2250MHz (Boost)\n•Memory Clock: 16.0 Gbps\n•Memory Interface: 256-bitDirectX® Support: 12",
    price: "74,399",
    connect: "Asus",
  },
];
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
];
export default MainScreen;