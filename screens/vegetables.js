import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image, Modal, KeyboardAvoidingView, ScrollView } from 'react-native';
import firebase from 'firebase';
import MyHeader from '../components/header';


export default class VegetableScreen extends React.Component{
    render(){
        return(
            <ScrollView>
                    
            <TouchableOpacity>
                <Image style={styles.image}
                    source={require("../assets/tomatobg.png")} />
                    <Text style={{alignSelf:'center',fontWeight:'bold'}}>Tomato</Text>
            </TouchableOpacity>
            <TouchableOpacity>
                <Image style={styles.image}
                    source={require("../assets/pumpkinbg.png")} />
                    <Text style={{alignSelf:'center', fontWeight:'bold'}}>Pumpkin</Text>
            </TouchableOpacity>
             <TouchableOpacity>
                <Image style={styles.image}
                    source={require("../assets/cauliflowerbg.png")} />
                    <Text style={{alignSelf:'center',fontWeight:'bold'}}>Cauliflower</Text>
            </TouchableOpacity>
            <TouchableOpacity>
                <Image style={styles.image}
                    source={require("../assets/onionbg.png")} />
                    <Text style={{alignSelf:'center',fontWeight:'bold'}}>Onion</Text>
            </TouchableOpacity>
            <TouchableOpacity>
                <Image style={styles.image}
                    source={require("../assets/carrotbg.png")} />
                    <Text style={{alignSelf:'center',fontWeight:'bold'}}>Carrot</Text>
            </TouchableOpacity>
            <TouchableOpacity>
                <Image style={styles.image}
                    source={require("../assets/brinjalbg.png")} />
                    <Text style={{alignSelf:'center',fontWeight:'bold'}}>Brinjal</Text>
            </TouchableOpacity>
        
    </ScrollView>

        )
    }
} 
