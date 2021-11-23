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

const Laptop = ({navigation}) => {
  const Card = ({laptops}) => {
    return(
    <TouchableHighlight
        activeOpacity={.1}
        underlayColor="white"
        onPress={() => navigation.navigate('Details', laptops)}>
    <View style={styles.cardRounded}>
        <View
        style={{
          height: 300,
          alignItems: 'center',
        }}>
        <Image
            source = {laptops.url}
            style= {{flex: 1,  resizeMode: 'contain'}}
        />
        <Text style = {styles.nameCategories}>{laptops.title}</Text>
        <Text style = {styles.productPrice}>₱ {laptops.price}</Text>
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
        <View style = {{flex: 1, justifyContent: 'space-around'}}>
        <View style = {styles.header}>
            <Icon name = "arrow-back" size={28} onPress={() => navigation.goBack()}/>
            <Text style = {styles.title}>Laptop</Text>
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
                data={laptop}
                renderItem={({item}) => {
                return <Card laptops = {item}
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
      width: 78,
      height: 35,
      fontSize: 20,
      alignItems: 'center',
      borderRadius: 25,
      color: '#3c3c3c',
      fontWeight: 'bold',
      justifyContent: 'center',
      paddingLeft: 8,
      paddingTop: 2,
  },
});

const laptop = [
  {
  id: 1,
  url: require('./img/ASUSstudiobook17.jpg'),
  title: "ASUS Studiobook Pro 17 (Star Grey) Intel Xeon",
  description: "\•Brand: Asus\n•Model: Studiobook Pro 17\n•Operating System: Windows 10 Pro\n•Processor:Intel® Xeon® E-2276M processor:  (2.8GHz hexa-core with Turbo Boost (up to 4.7GHz) and 12MB cache)\n•Intel® Core™ i7-9750H processor: 2.6GHz hexa-core with Turbo Boost (up to 4.5GHz) and 12MB cache\n•Graphics: NVIDIA® Quadro® RTX 3000 Max-Q 6GB GDDR6 VRAM\n•Color: Star GrayDisplay:17” LED-backlit WUXGA (1920 x 1200) NanoEdge display",
  price: "179,995.00",
  },
  {
  id: 2,
  url: require('./img/AsusRogStrix.jpg'),
  title: "Asus ROG Strix Scar 15 Gaming Laptop",
  description: "\•Brand: Asus\n•Model: ASUS ROG STRIX SCAR 15 G533QM-\n•HF028TS BlackProcessor: AMD R9 5900HX\n•Memory: 16GB 2x8GB RAM\n•Storage: 1TB PCIE SSD\n•Display: 15.6inch FHD IPS 300HZ\n•Graphics: RTX3060 6GB GDDR6\n•S.: Windows 10\n•I/O Ports\n•1x 3.5mm Combo Audio Jack\n•1x HDMI 2.0b\n•3x USB 3.2 Gen 1 Type-A",
  price: "124,995.00",
  },
  {
  id: 3,
  url: require('./img/AppleMacBook.jpg'),
  title: "Apple MacBook Pro M1 13.”3 HD",
  description: "\•MacBook Pro M1 2020\n•COLOR: Space Gray, Silver,SIZE: 13-inch\n•MODEL: MYD82PP/A, /MYDA2PP/A, MYD92PP/A, MYDC2PP/A\n•AppleCare Protection Plan for \n•MacBook/MacBook Air/MacBook Pro 13-inch\n•Apple-designed M1 chip for a giant leap in CPU, GPU, and machine learning performance\n•Get more done with up to 20 hours of battery life, the longest ever in a Mac\n•8-core CPU delivers up to 2.8x faster performance to fly through workflows quicker than ever",
  price: "70,995.00",
  },
  {
  id: 4,
  url: require('./img/LenovoYoga.jpg'),
  title: "Lenovo Yoga Slim Carbon Laptop",
  description: "\•Processor: Intel Core i7-1165G7 (4C / 8T, 2.8 / 4.7GHz, 12MB)\n•Memory: 16GB Soldered LPDDR4x-4266\n•Storage: 1TB SSD M.2 2280 PCIe 3.0x4NVMe\n•Graphics: Integrated Intel Iris Xe Graphics\n•Operating System: Windows 10 Home 64, \n•EnglishBundled Service: N/A\n•Chipset: Intel SoC Platform\n•Memory: 16GB Soldered LPDDR4x-4266\n•Memory Slots: Memory soldered to systemboard, no slots, dual-channel capable\n•Max Memory: 16GB soldered memory, not upgradable",
  price: "74,995.00",
  }
  
];

export default Laptop;