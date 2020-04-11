import React , {useState , useRef, useEffect} from 'react' ;
import {View, Text, StyleSheet, Button , Alert} from 'react-native' ;

import Number from "../components/Number"
import Card from "../components/Card"

const generateRandomBetween = (min,max,exclude) =>{
    min = Math.ceil(min) ;
    max = Math.floor(max) ;
    const rndNum = Math.floor(Math.random() * (max-min)) + min ;
    if(rndNum === exclude) {
        return generateRandomBetween(min,max, exclude) ;
    }
    else{
        return rndNum ;
    }
}

const GameScreen = props => {
    const [currentGuess , setCurrentGuess] = useState(generateRandomBetween(1,100,props.userChoice)) ;

    const currentLow= useRef(1) ;
    const currentHigh= useRef(100) ;
    const [rounds, setRounds] = useState(0) ;

    const {userChoice, onGameOver} = props ;

    useEffect(() => {
        if(currentGuess===props.userChoice) {
            props.onGameOver(rounds) ;
        }

    }, [currentGuess,userChoice,onGameOver]) ;

    const nextGuessHandler = direction =>{
        if((direction==='lower'&& currentGuess < props.userChoice) || (direction==='higher'&& currentGuess > props.userChoice)) {
            Alert.alert('Don\'t Lie', 'You know it\'s the wrong hint', [{text:'Okay', style:"cancel" }]) ;
            return ;
        }

        if(direction === 'lower') {
            currentHigh.current = currentGuess ;
        }

        else {
            currentLow.current = currentGuess ;
        }
        const nextNumber = generateRandomBetween(currentLow.current , currentHigh.current , currentGuess) ;
        setCurrentGuess(nextNumber) ;
        setRounds(curRounds => curRounds+1) ;
    };   

    return(
        <View style={styles.screen}>
            <Text>Computer's Guess</Text>
            <Number>{currentGuess}</Number>
            <Card style={styles.buttonContainer}>
                <Button title='Lower' onPress={nextGuessHandler.bind(this, 'lower')}/>
                <Button title='Higher' onPress={nextGuessHandler.bind(this, 'higher')}/>   
            </Card>
        </View>
    )
}

const styles = StyleSheet.create(
    {
        screen :{
            flex:1 ,
            padding:10,
            alignItems:"center"
        },
        buttonContainer:{
            flexDirection:"row",
            justifyContent:'space-around',
            marginTop:20,
            width:300
        }
        
    }
)

export default GameScreen ;