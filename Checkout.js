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
  Alert,
  TextInput,
  ScrollView,
  InteractionManager,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import {ButtonGroup} from 'react-native-elements';
import { useState } from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import shoppingCart from './shoppingCart';

const Checkout = ({navigation}) => {
    const buttons = ['Cash on delivery']
  const [firstname, setFName] = useState('')
  const [middlename, setMName] = useState('')
  const [lasttname, setLName] = useState('')
  const [add, setAdd] = useState ('')
  const [number, setNumber] = useState(0)
  return (

    <ScrollView style = {{flex: 1}}>
        {/* --------- */}
      <TextInput name="firstname" style={styles.textinput}
      placeholder="   First Name" 
      onChangeText={(val) => setFName(val)}
      />

      <TextInput style={styles.textinput} 
      placeholder="   Middle Name" 
      onChangeText={(val) => setMName(val)}
      />

      <TextInput 
      style={styles.textinput} 
      placeholder="   Last Name" 
      onChangeText={(val)=> setLName(val)}
      />

      <TextInput 
      multiline
      style={styles.txtAdd} 
      placeholder="   Address" 
      onChangeText={(val)=> setAdd(val)}
      keyboardType='numbers-and-punctuation'
      />

      <TextInput 
      keyboardType='numeric'
      style={styles.textinput} 
      placeholder="   Contact Number" 
      onChangeText={(val)=> setNumber(val)}
      />

      <Text style={styles.txtStyle}> Payment Details</Text>
      <View style = {{justifyContent: 'center', alignItems: 'center', paddingTop: 10}}>
         <ButtonGroup
         buttons={buttons}
         containerStyle={{height: 40, width: 200, alignItems: 'center', justifyContent: 'center'}}
         
         />
        </View>
      <View
      style={{backgroundColor: 'white', borderWidth: 1, borderRadius: 10, padding: 5, margin: 10, height: 150, borderColor: '#E5E5E5'}}
      >
        <Text
        style={styles.txtStyle}
        >Buyer Details:</Text>
    <Text
    // style={{margin: 2, padding: 5}}
    > Name: {firstname} {middlename} {lasttname}</Text>
    <Text> Address: {add} </Text>
    <Text> Contact Number: {number} </Text>
   
      </View>
    <View style = {{flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', height: 60, paddingBottom: 6, paddingHorizontal: 20}}>
      <TouchableOpacity
      style={styles.Button} 
      onPress={() => Alert.alert("Success!", "Thank you for purchasing!",
      [{
        text: "OK",
        onPress: () => navigation.navigate("Navi")
      }
      ]
      ) 
      
    }
      >
      <Text>Proceed</Text>
      </TouchableOpacity>

      <TouchableOpacity  style={styles.cancelBtn}  onPress={() => navigation.navigate('Cart')}>
        <Text>Cancel</Text>
      </TouchableOpacity>
    </View>
    </ScrollView>
    
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
    textinput: {
        //alignSelf: 'stretch',
        padding: 5,
        height: 40,
        margin: 10,
        marginBottom: 30,
        color: 'black',
        borderColor: '#40BFFF',
        borderRadius: 10,
        borderWidth: 1,
        backgroundColor: 'white',
        opacity: 0.75,
      },
      txtStyle:{
        fontSize: 20,
        padding: 2,
        fontWeight: 'bold',
        backgroundColor: '#40BFFF',
        borderColor: 'white',
        color: 'black',
        textAlign: 'center', 
      },
      cancelBtn: {
        width: 160,
        height: 41,
        backgroundColor: "#FF6875",
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5,
      },
      Button: {
        width: 160,
        height: 41,
        backgroundColor: "#40BFFF",
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5,
      },
      labelStartPage: {
        marginTop: 5,
        color: "black",
        fontSize: 30,
        textAlign: "center",
        fontFamily: "Roboto",
        fontWeight: "bold",
        fontStyle: "italic",
      },
      TextButton:{
        fontSize: 16,
        fontWeight: "bold",
    },
    txtAdd: {
        height:70,
        margin: 10,
        marginBottom: 30,
        color: 'black',
        borderColor: '#40BFFF',
        borderRadius: 10,
        borderWidth: 1,
        backgroundColor: '#fff',
        opacity: 0.75,
      },
})
export default Checkout;