import React, { useState, useEffect } from 'react';
import {
	SafeAreaView,
	StyleSheet,
	View,
	Text,
	StatusBar,
	Button,
} from 'react-native';
import pallete from './src/pallete'
import Form from './src/components/Form'
import Footer from './src/components/Footer';
import Result from './src/components/Result';
const App = () => {
	const [amount, setAmount] = useState(null)
	const [interest, setInterest] = useState(null)
	const [months, setMonths] = useState(null)
	const [error, setError] = useState('')
	const [total, setTotal] = useState(null)

	useEffect(() => {
		if (amount && interest && months) calculate()
		else reset()
	}, [amount, interest, months])
	const calculate = () => {
		reset()
		if (!amount || amount.trim() === '') {
			setError("Add the amount of money you want for the loan")
		} else if (!interest || interest.trim() === '') {
			setError("Add the interest percentage of the loan")
		} else if (!months) {
			setError("Select the months of the term")
		} else {
			const i = interest / 100
			const fee = amount / ((1 - Math.pow(i + 1, -months)) / i)
			setTotal({
				monthlyFee: fee.toFixed(2).replace(".", ","),
				totalPayment: (fee * months).toFixed(2).replace(".", ",")
			})
		}
	}
	const reset = () => {
		setError('')
		setTotal(null)
	}

	console.log(total);
	return (
		<>
			<StatusBar barStyle="light-content" />
			<SafeAreaView style={styles.safeArea}>
				<View style={styles.bgView} />
				<Text style={styles.titleApp}>Loan Quoter</Text>
				<Form
					setAmount={setAmount}
					setInterest={setInterest}
					setMonths={setMonths}
				/>
			</SafeAreaView>
			<Result
				amount={amount}
				interest={interest}
				months={months}
				total={total}
				error={error}
			/>
			<Footer calculate={calculate} />
		</>
	);
};

const styles = StyleSheet.create({
	safeArea: {
		height: 290,
		alignItems: 'center',
	},
	titleApp: {
		fontSize: 24,
		fontWeight: 'bold',
		marginTop: StatusBar.currentHeight,
		color: pallete.LETTERS,
	},
	bgView: {
		height: 200,
		width: '100%',
		backgroundColor: pallete.PRIMARY_COLOR,
		borderBottomLeftRadius: 30,
		borderBottomRightRadius: 30,
		zIndex: -1,
		position: 'absolute'
	}
});

export default App;
