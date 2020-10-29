import React from 'react'
import { StyleSheet, Text, TextInput, View } from 'react-native'
import pallete from '../pallete'
import RNPickerSelect from 'react-native-picker-select';

const Form = ({ setAmount, setInterest, setMonths }) => {
    return (
        <View style={styles.viewForm}>
            <View style={styles.viewInput}>
                <TextInput
                    placeholder="Amount"
                    keyboardType="numeric"
                    style={styles.input}
                    onChange={(e) => setAmount((e.nativeEvent.text))}
                />
                <TextInput
                    placeholder="Interest"
                    keyboardType="numeric"
                    style={[styles.input, styles.inputPercentage]}
                    onChange={(e) => setInterest((e.nativeEvent.text))}

                />
            </View>
            <RNPickerSelect
                style={pickerSelectStyles}
                onValueChange={(value) => setMonths(value)}
                placeholder={{
                    label: "Select the term",
                    value: null
                }}
                items={[
                    { label: '3 months', value: 3 },
                    { label: '6 months', value: 6 },
                    { label: '12 months', value: 12 },
                    { label: '24 months', value: 24 },
                ]}
            />
        </View>
    )
}

export default Form

const styles = StyleSheet.create({
    viewForm: {
        position: 'absolute',
        bottom: 0,
        width: '85%',
        paddingHorizontal: 50,
        borderRadius: 30,
        backgroundColor: pallete.SECONDARY_COLOR,
        height: 180,
        justifyContent: 'center'
    },
    viewInput: {
        flexDirection: 'row'
    },
    input: {
        height: 50,
        backgroundColor: '#fff',
        borderWidth: 1,
        borderColor: pallete.PRIMARY_COLOR,
        borderRadius: 5,
        width: '60%',
        marginRight: 5,
        marginLeft: -5,
        marginBottom: 10,
        color: '#000',
        paddingHorizontal: 20
    },
    inputPercentage: {
        width: '40%',
        marginLeft: 5
    }
})
const pickerSelectStyles = StyleSheet.create({
    inputIOS: {
        fontSize: 16,
        paddingVertical: 12,
        paddingHorizontal: 10,
        borderWidth: 1,
        borderColor: 'grey',
        borderRadius: 4,
        color: 'black',
        backgroundColor: '#FFF',
        marginLeft: -5,
        marginRight: -5
    },
    inputAndroid: {
        fontSize: 16,
        paddingVertical: 10,
        paddingHorizontal: 18,
        borderWidth: 1,
        borderColor: pallete.PRIMARY_COLOR,
        borderRadius: 8,
        color: 'black',
        backgroundColor: '#FFF',
        paddingRight: 30,
    }
})