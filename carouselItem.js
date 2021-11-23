import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  TextInput,
  ScrollView,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { BackgroundCarousel } from './BackgroundCarousel';

const images = [
  "https://scontent.xx.fbcdn.net/v/t1.15752-9/p403x403/255120817_317551730206045_537428487426639450_n.png?_nc_cat=102&ccb=1-5&_nc_sid=aee45a&_nc_ohc=Wf3ivnWCddMAX_GONbL&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=f473e51869ad004a11fd3a929f660443&oe=61B41AA1",
  "https://scontent.fmnl4-1.fna.fbcdn.net/v/t1.15752-9/255163471_602291630891624_6791618848722201740_n.png?_nc_cat=104&ccb=1-5&_nc_sid=ae9488&_nc_eui2=AeHKCL52cisBgSg89k1VMIXQd9Q7qhSCrox31DuqFIKujOjDM-oxqjtZeqPNI21BSXXdRhTY8ZjL2SaqVBQ1km-i&_nc_ohc=H5jDhw5DJrcAX-OvMeE&_nc_ht=scontent.fmnl4-1.fna&oh=ddb2a4383d0a404e38f33693fe724ad3&oe=61B495E8",
  "https://scontent.fmnl8-2.fna.fbcdn.net/v/t1.15752-9/255445315_728494894775225_88169381116607086_n.png?_nc_cat=103&ccb=1-5&_nc_sid=ae9488&_nc_eui2=AeFKxeSvlGcCIcXeNj0BXJ3dANbQu6Lz6TsA1tC7ovPpOycVlGkvs1h6JKJDLpwnjifk27Ls2GjDSZc4X9UWs5Mz&_nc_ohc=ecGwKy8ODrsAX-S6MnE&_nc_ht=scontent.fmnl8-2.fna&oh=0b25e20695c5da2b0bd74658906d9684&oe=61B7E91F",
];

export default class carouselItem extends Component {
  render() {
    return (
    <View style={styles.container}>
    <BackgroundCarousel images={images} />
    </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: 340,
    justifyContent: "center",
    backgroundColor: "#FFF",
  },
});


