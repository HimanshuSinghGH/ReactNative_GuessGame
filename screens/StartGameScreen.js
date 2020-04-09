import React from 'react' ;
import {View,TextInput, Text, StyleSheet,Button } from 'react-native' ;

import Card from '../components/Card.js' ;
import colors from '../constants/Colors' ;
import Input from "../components/Input"

const StartGameScreen = props => {

    return (
        <View style={styles.screen}>
            <Text style={styles.title}>Start a New Game!</Text>
            <Card style={styles.inputContainer} >
                <Text >Select a Number</Text>
                <Input style={styles.input}/>
                <View style={styles.buttonContainer}>
                    <View style={styles.button}><Button title="Reset" color={colors.accent}/></View>
                    <View style={styles.button}><Button title="Submit"color={colors.primary}/></View>
                </View>
            </Card>
        </View>
    ) ;
};

const styles = StyleSheet.create({
    screen :{
        flex: 1,
        padding:10,
        alignItems:"center",
    },

    inputContainer:{
        width:300 ,
        alignItems:"center",
    },

    title:{
        fontSize:18,
        marginVertical:10,
    },

    buttonContainer:{
        width:"100%",
        flexDirection:"row" ,
        justifyContent:"space-between",
        paddingHorizontal:20
    },
    button:{
        width:90
    },

    input:{
        width:50 ,
        textAlign:"center",
    },

})


export default StartGameScreen ;