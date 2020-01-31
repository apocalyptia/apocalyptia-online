export const random = (arr) => {
	return arr[Math.floor(Math.random() * arr.length)]
}

export const d6 = () => {
	return Math.ceil(Math.random() * 6)
}

export const d6Roll = () => {
	let roll = d6()
	let result = roll
	if (roll == 6) {
		while (roll == 6) {
			roll = d6()
			result += roll
		}
	}
	if (roll == 1) {
		roll = d6()
		if (roll == 1) {
			return -666
		}
	}
	return result
}