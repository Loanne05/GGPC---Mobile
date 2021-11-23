import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

import {StatusBar} from 'react-native';
import MainScreen from './MainScreen';
import DetailsScreen from './DetailsScreen';
import shoppingCart from './shoppingCart';
import SearchBar from './SearchBar';
import PcComponents from './PcComponents';
import Laptop from './Laptop';
import ForGamers from './ForGamers';
import Peripherals from './Peripherals';
import Smartphone from './Smartphone';
import Tablet from './Tablet';
import Package from './Package';
import Wish from './Wishlist';
import Checkout from './Checkout';

export default function App() {
    return(
        <NavigationContainer>
            <StatusBar barStyle="dark-content" backgroundColor="white" />
            <Stack.Navigator screenOptions={{header: () => null}}>
                <Stack.Screen name="Navi" component={Navi} />
                <Stack.Screen name="Details" component={DetailsScreen} />
                <Stack.Screen name="Cart" component={shoppingCart}/>
                <Stack.Screen name="Search" component={SearchBar} />
                <Stack.Screen name="Wish" component={Wish} />
                <Stack.Screen name="Checkout" component={Checkout} />
            </Stack.Navigator>
        </NavigationContainer>
    );
    function Navi(){
        return (
            <Drawer.Navigator screenOptions={{header: () => null}}>
                <Stack.Screen name="Main" component={MainScreen} options={{drawerLabel: () => null, title: null, drawerIcon: () => null}}/>
                <Drawer.Screen name="Pc Components" component={PcComponents} />
                <Drawer.Screen name="Laptop" component={Laptop} />
                <Drawer.Screen name="For Gamers" component={ForGamers} />
                <Drawer.Screen name="Peripherals and Accesories" component={Peripherals}/>
                <Drawer.Screen name="Smartphone" component={Smartphone} />
                <Drawer.Screen name="Tablet" component={Tablet} />
                <Drawer.Screen name="Desktop PC Package" component={Package} />
            </Drawer.Navigator>
        );
    }
};
