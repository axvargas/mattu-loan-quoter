import React from 'react'
import { StyleSheet, Text, TextInput, View } from 'react-native'
import DataResult from './DataResult'

const Result = ({ amount, interest, months, total, error }) => {
    return (
        <View style={styles.content}>
            {total &&
                <View style={styles.viewResult}>
                    <Text style={styles.title}>Summary</Text>
                    <DataResult title="Amount" value={`$ ${amount}`} />
                    <DataResult title="Interest %" value={`${interest} %`} />
                    <DataResult title="Term" value={`${months} months`} />
                    <DataResult title="Monthly payment" value={`$ ${total.monthlyFee}`} />
                    <DataResult title="Total payment" value={`$ ${total.totalPayment}`} />

                </View>
            }
            <View style={styles.viewError}>
                <Text style={styles.error}>
                    {error}
                </Text>
            </View>
        </View>
    )
}

export default Result

const styles = StyleSheet.create({
    content: {
        marginHorizontal: 40
    },
    viewError: {
        marginTop: 100,
    },
    viewResult: {
        padding: 30
    },
    title: {
        fontSize: 30,
        fontWeight: 'bold',
        textAlign: 'center'
    },
    error: {
        textAlign: 'center',
        color: '#f00',
        fontWeight: 'bold',
        fontSize: 20
    }
})
