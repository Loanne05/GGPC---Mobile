import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Image,
  Alert,
  TouchableOpacity,
  TextInput,
  ScrollView,
  InteractionManager,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/MaterialIcons';

const DetailsScreen = ({navigation, route}) => {
    const item = route.params;
    return(
        <SafeAreaView
        style = {{flex: 1, backgroundColor: "white"}}>
        <View style = {style.header}>
            <Icon name = "arrow-back" size={28} onPress={() => navigation.goBack()}/>
        <TouchableOpacity  onPress={() => navigation.navigate('Cart')}>
            <Icon name="shopping-cart" size= {25}  color="black"/>
        </TouchableOpacity>
        </View>
        <View style = {style.imageCon}>
            <Image source = {item.url} style={{resizeMode: 'contain', flex: 1}}/>
        </View>
        <Text style = {style.nameCategories}>{item.title}</Text>
        <Text style = {style.productPrice}>₱ {item.price}</Text>
        <View style = {style.detailsCon}>
        <ScrollView style = {{flex: 1}}>
        <View>
            <Text style = {style.productDet}>Product Specifications</Text>
            <Text style = 
            {{color:"grey",
            fontSize: 14,
            lineHeight: 22,
            marginTop: 10,
            marginHorizontal:10}}>
                {item.description}
            </Text>
        </View>
        </ScrollView>
        </View>
        <View style = {{flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', height: 60, paddingBottom: 6, paddingHorizontal: 20}}>
        <TouchableOpacity>
        <View style = {style.faveBtn}>
        <Icon name="favorite" size= {25}  color="#FFF"/>
        </View>
        </TouchableOpacity>
        <TouchableOpacity  onPress={() => Alert.alert("Thank you!", "Successfully added to cart!",
      [{
        text: "OK",
        onPress: () => navigation.navigate("Cart")
      }
      ]
      ) 
      
    }>
        <View style = {style.buyBtn}>
            <Text style ={{color: 'white', fontSize: 18, fontWeight: 'bold'}}>Add to Cart</Text>
        </View>
        </TouchableOpacity>
        </View>
        </SafeAreaView>
    );
}

const style = StyleSheet.create({
    header: {
        paddingHorizontal: 20,
        marginTop: 20,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    imageCon: {
        flex: 0.45,
        marginTop: 20,
        justifyContent:'center',
        alignItems:'center',
    },
    detailsCon: {
        flex: 0.55,
        backgroundColor: '#E5E5E5',
        marginHorizontal: 7,
        marginBottom: 7,
        borderRadius: 5,
        marginTop: 30,
        paddingTop: 30
    },
    nameCategories:{
        fontSize: 14,
        color: "#223263",
        fontWeight:"bold",
        bottom: 13,
        paddingHorizontal: 20,
    },
    textDet:{
        fontSize: 14,
        color: "#E5E5E5",
        paddingHorizontal: 20,
    },
    productDet:{
        fontSize: 14,
        color: "#22262A",
        fontWeight:"bold",
        paddingHorizontal: 20,
    },
    productPrice: {
        fontSize: 12,
        color: "#40BFFF",
        fontWeight: "bold",
        marginTop: 0,
        marginLeft: 0,
        bottom: 13,
        paddingHorizontal: 20,

    },
    buyBtn:{
        width: 276,
        height: 41,
        backgroundColor: "#40BFFF",
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5,
    },
    faveBtn:{
        width: 55,
        height: 41,
        backgroundColor: "#FF6875",
        justifyContent: 'space-around',
        alignItems: 'center',
        borderRadius: 5,
    },

});

export default DetailsScreen;