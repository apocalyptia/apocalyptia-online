import Rule from '/src/classes/Rule.js'

const Occupants = new Rule({
	name: `Occupants`, 
	desc: [
		`Passengers in a moving vehicle are Unstable.`,
		`A vehicle provides Cover from Ranged Attacks with its Absorption.`,
	]
})

export default Occupants