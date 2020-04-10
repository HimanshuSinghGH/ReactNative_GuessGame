import React from 'react' ;
import {View , Text , StyleSheet} from 'react-native' ;
import Colors from '../constants/Colors';
import { render } from 'react-dom';


const Number = props => {

    return(
    <View style={styles.container}>
        <Text style={styles.number}>{props.children}</Text>
    </View>
    );
} ;


const styles = StyleSheet.create ({
    container :{
        borderWidth:2 ,
        borderColor:Colors.accent, 
        padding:10,
        borderRadius:10,
        marginVertical:10,
        alignItems:'center',
        justifyContent:'center',
    },

    number:{
        fontSize:22,
        color:Colors.accent,
        padding:10,
    }
})

export default Number ;