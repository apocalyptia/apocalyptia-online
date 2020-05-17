import Rule from '../../../rules/Rule'


const Burning = new Rule({
	name: `Burning`, 
	desc: [
		`If the Vehicle is at 0 Damage Resistance, it bursts into flames doing 1 Fire Damage per round to all Occupants.`,
		`It continues to burn for 1 minute per gallon of Fuel.`,
	]
})

export default Burning