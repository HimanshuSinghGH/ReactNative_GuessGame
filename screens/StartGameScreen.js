import React , {useState} from 'react' ;
import {View,TextInput, Text, StyleSheet,Button, TouchableWithoutFeedback, Keyboard, Alert } from 'react-native' ;

import Card from '../components/Card.js' ;
import colors from '../constants/Colors' ;
import Input from "../components/Input" ;
import Number from "../components/Number" ;

const StartGameScreen = props => {

    const [enteredValue, setEnteredValue] = useState('') ;
    const [confirmed, setConfirmed ]= useState(false) ;
    const [selectedNumber, setSelectedNumber] = useState('') ;

    const numberInputHandler = inputText => {

        setEnteredValue(inputText.replace(/[^0-9]/g, ''));
    }

    const resetInputHandler = () =>{
        
        setEnteredValue('') ;
        setConfirmed(false) ;
    }

    const confirmInputHandler = () =>{
        const chosenNumber = parseInt(enteredValue) ;
        if(isNaN(chosenNumber)|| chosenNumber<=0 || chosenNumber>99){
            Alert.alert('Invalid Number' , 'Number has to be between 1 - 99' , [{text:'Okay',style:'destructive',onPress:resetInputHandler}] )
        }

        setConfirmed(true) ;
        setEnteredValue('') ;
        setSelectedNumber(chosenNumber) ;

    }

    let confirmedOutput ;

    if(confirmed) {
    confirmedOutput = 
    <Card style={styles.summaryContainer}>
        <Text>You Selected</Text>
        <Number>{selectedNumber}</Number>
        <Button title="Start Game" color={colors.primary} onPress={() => props.onStartGame(selectedNumber)}/>
    </Card>
    }

    return (
        <TouchableWithoutFeedback onPress={ () => {
            Keyboard.dismiss() ;
        } }>
        <View style={styles.screen}>
            <Text style={styles.title}>Start a New Game!</Text>
            <Card style={styles.inputContainer} >
                <Text >Select a Number</Text>
                <Input 
                    style={styles.input}
                    blurOnSubmit
                    autoCapitalize="none"
                    autoCorrect={false}
                    keyboardType='number-pad'
                    maxLength={2}
                    onChangeText={numberInputHandler}
                    value={enteredValue}
                />
                <View style={styles.buttonContainer}>
                    <View style={styles.button}><Button title="Reset" color={colors.accent} onPress={resetInputHandler}/></View>
                    <View style={styles.button}><Button title="Submit"color={colors.primary} onPress={confirmInputHandler}/></View>
                </View>
            </Card>
            {confirmedOutput}
        </View>
        </TouchableWithoutFeedback>
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
        fontFamily:'voltaire'
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

    summaryContainer :{
        marginTop:20,
        alignItems:'center'
    }
})


export default StartGameScreen ;