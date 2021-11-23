import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
  View, 
  Text,
  ScrollView,
  Dimensions,
  Image
} from 'react-native';
import { scrollTo } from 'react-native-reanimated';

const DEVICE_WIDTH = Dimensions.get("window").width;

class BackgroundCarousel extends React.Component{
    scrollRef = React.createRef();
    constructor(props){
        super(props);

        this.state = {
            selectedIndex:0
        }
    }
    componentDidMount = () =>{
        setInterval(() => {
            this.setState(
            prev => ({
               selectedIndex:
                 prev.selectedIndex === this.props.images.length - 1
                 ? 0
                 : prev.selectedIndex + 1
                }),
            () => {
                this.scrollRef.current.scrollTo({
                    animated: true,
                    y: 0,
                    x: DEVICE_WIDTH * this.state.selectedIndex
                });
            }
            );
        }, 3000)
    }

    setSelectedIndex = event => {
        const viewSize = event.nativeEvent.layoutMeasure.width;
        const contentOffset = event.nativeEvent.contentOffset.x;
        const selectedIndex = Math.floor(contentOffset / viewSize)
        this.setState({selectedIndex})
    }
    render() {
        const{images} = this.props
        const{ selectedIndex } = this.state
        return(
            <View style={styles.backgroundImageCon}>
                <ScrollView
                 showsHorizontalScrollIndicator={false}
                 scrollEnabled={false}
                 horizontal
                 pagingEnabled
                 onMomentumScrollEnd = {this.setSelectedIndex}
                 ref={this.scrollRef}
                > 
                    {images.map(image => (
                        <Image
                            key = {image}
                            source = {{uri: image}}
                            style = {styles.backgroundImage}
                        />
                    ))}
                </ScrollView>
                <View style = {styles.circleDiv}>
                    {images.map((image, i) =>(
                        <View key={image} style={[styles.whiteCirle,
                        {opacity: i === selectedIndex ? 1 : 0.5,  backgroundColor: i === selectedIndex ? '#40BFFF' : '#EBF0FF'}]}/>
                    ))}
                </View>
            </View>
        )
    }
    
}

const styles = StyleSheet.create({
    backgroundImageCon:{
        flex:1,
        width: "100%",
        height: "100%",
        paddingVertical:5,
    },
    backgroundImage:{
        height: "65%",
        width: DEVICE_WIDTH,
    },
    circleDiv:{
        position: 'absolute',
        bottom: 90,
        height: 9,
        width: '100%',
        display: "flex",
        flexDirection: "row",
        justifyContent: 'center',
        alignItems:"center",

    },
    whiteCirle:{
        height: 8,
        width: 8,
        borderRadius: 5,
        margin: 5,
    },
})

export{ BackgroundCarousel };