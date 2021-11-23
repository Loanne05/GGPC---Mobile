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

const Package = ({navigation}) => {
  const Card = ({packs}) => {
    return(
    <TouchableHighlight
        activeOpacity={.1}
        underlayColor="white"
        onPress={() => navigation.navigate('Details', packs)}>
    <View style={styles.cardRounded}>
        <View
        style={{
          height: 300,
          alignItems: 'center',
        }}>
        <Image
            source = {packs.url}
            style= {{flex: 1,  resizeMode: 'contain'}}
        />
        <Text style = {styles.nameCategories}>{packs.title}</Text>
        <Text style = {styles.productPrice}>₱ {packs.price}</Text>
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
            <Text style = {styles.title}>Desktop PC Package</Text>
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
                data={pack}
                renderItem={({item}) => {
                return <Card packs = {item}
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
      width: 204,
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

const pack = [
  {
  id: 1,
  url: require('./img/package1.jpg'),
  title: "EasyBundles AMD Recommended for Latest Games",
  description: "\•AMD Ryzen 3000 Series\n•AMD B450 (AM4) micro ATX gaming Motherboard with M.2 support\n•AI Noise-Canceling Microphone\n•HDMI, DVI-D, USB 3.2 Gen 2 Type-A\n•USB 3.2 Gen 1 Type-A and Type-C\n•Aura Sync RGB Lighting: Synchronize LED lighting with a vast portfolio of compatible PC gear\n•Supports 1st, 2nd, and 3rd Gen AMD Ryzen / Ryzen with Radeon Vega Graphics and 2nd Gen AMD Ryzen with Radeon Graphics / Athlon™ with Radeon™ Vega Graphics Desktop Processors for Socket AM4\n•Fryst Galatine CPU Air Cooler RGB\n•Base Material: Aluminum Alloy",
  price: "11,595",
  },
  {
  id: 2,
  url: require('./img/package2.jpg'),
  title: "EasyBuild Ryzen 3 Pro 4350G Complete Computer Desktop",
  description: "\•Latest Ryzen Technology for efficient processing power, Radeon Vega 6 iGPU optimized for graphic design and 1080p gaming with a renoir architecture desktop processor primarily aimed for office systems and a quad core\n•Included 16GB RGB memory for seamless multitasking and gaming performance support up to 3200mhz for faster and better experience when using office system and gaming\n•240G M.2 SSD with faster and smooth data transfer\n•500w power supply for a stable and efficient power consumption",
  price: "30,995",
  },
  {
  id: 3,
  url: require('./img/package3.jpg'),
  title: "EasyBuild AMD Kaveri A8-7680 Complete Desktop Computer Set for Education",
  description: "\•AMD Kaveri A8-7680 APU with efficient power consumption with uncompromised processing power and architecture desktop processor primarily aimed at office systems and quad core\n•The processor pass the minimum requirements for some games like, GTA V, League of Legends, CSGO and Call of Duty: Warzone.\n•8GB Ram - Optimized for running Office applications such as Word, Power point and Excel spreadsheets\n•Supports ddr3 memory and still a good choice for budget gaming, education and productivity desktop.\n•With integrated GPU that also pass the power supply requirements. Better if paired with another stick of 8gb ram for faster and better experience.",
  price: "14,195",
  },
];;

export default Package;