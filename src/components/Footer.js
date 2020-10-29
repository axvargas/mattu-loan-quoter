import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import pallete from '../pallete'

const Footer = ({ calculate }) => {
    return (
        <View style={styles.viewFooter}>
            <TouchableOpacity
                style={styles.btn}
                onPress={() => calculate()}
            >
                <Text style={styles.text}>Calculate</Text>
            </TouchableOpacity>
        </View>
    )
}

export default Footer

const styles = StyleSheet.create({
    viewFooter: {
        position: 'absolute',
        bottom: 0,
        width: '100%',
        backgroundColor: pallete.PRIMARY_COLOR,
        height: 100,
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        alignItems: 'center',
        justifyContent: 'center'
    },
    text: {
        fontWeight: 'bold',
        fontSize: 18,
        color: pallete.LETTERS,
        textAlign: 'center'
    },
    btn: {
        backgroundColor: pallete.SECONDARY_COLOR,
        padding: 16,
        borderRadius: 20,
        width: '75%'
    }
})
