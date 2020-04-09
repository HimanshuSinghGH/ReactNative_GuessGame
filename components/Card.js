import React from 'react' ;
import {View , StyleSheet} from 'react-native' ;


const Card = props => {
    return (
    <View style={{...styles.card, ...props.style}}>{props.children}</View>
    )
}

const styles  = StyleSheet.create({

    card :{
            borderRadius:10,
            elevation:7,
            backgroundColor:"white",
            padding:20
        },
});

export default Card ;