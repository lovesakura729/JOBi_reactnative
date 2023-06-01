
import { Pressable, StyleSheet, Text, View } from "react-native";
import { useState } from "react";

const CheckBox2 = (props) => {
    return (
        <View style={styles.box} onStartShouldSetResponder={props.onPress}>
            <Text style={styles.txt}>{props.txt}</Text>
            <View style={styles.outline}>
                {props.checked && <View style={styles.checkmark}></View>}
            </View>
        </View>
    );
};

export default CheckBox2;

const styles = StyleSheet.create({
    box: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
    },
    txt: {
        color: '#172B4D',
        fontSize: 15,
        marginRight: 5,
    },
    outline:{
        borderRadius: 6,
        border: '2px solid #7764E4',
        position: 'relative',
        width: 30,
        height: 30,
    },
    checkmark: {
        border: '3px solid #7764E4',
        borderTopColor: 'transparent',
        borderRightColor: 'transparent',
        rotate: '-45deg',
        position: 'absolute',
        width: 18,
        height: 10,
        top: 5,
        left: 4,
    },
});