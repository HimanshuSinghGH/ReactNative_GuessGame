import React from 'react' ;
import { StyleSheet, View , Text, Button, Image} from 'react-native' ;

import Colors from '../constants/Colors'

const GameOverScreen = props => {
    
    return (
    
    <View style={styles.screen}>
        <Text style={styles.title}>The Game is Over!</Text>
        <View style={styles.imageContainer}>
            <Image source={require('../assets/success.png')} style={styles.image} resizeMode="cover"/>
        </View>
        <Text>The Number was: {props.userNumber}</Text>
        <Text>Number of rounds: {props.roundsNumber}</Text>
        <View style={{marginTop:10}}>
            <Button title="New Game" onPress={props.newGame} color={Colors.primary}/>
        </View>
    </View>

 );
};

const styles = StyleSheet.create({
    screen:{
        flex:1 ,
        justifyContent:"center",
        alignItems:"center",
    },

    title:{
        fontFamily:'voltaire',
        fontSize:22
    },

    message :{
        fontSize:16,
    },
    imageContainer :{
        borderRadius:150,
        borderColor:"black",
        borderWidth:3,
        width:300,
        height:300,
        overflow:"hidden",
        marginVertical:10,
    },

    image:{
        width:"100%",
        height:"100%"
        
    },

    
});

export default GameOverScreen ;