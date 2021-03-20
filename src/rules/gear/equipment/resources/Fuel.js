import Gear from '/src/classes/Gear.js'

const Fuel = new Gear({
	id: ``,
	name: `Fuel`,
	type: `Resource`,
	desc: [
		`Flammable liquid. Used to power Vehicles and make explosives.`,
	],
	sz: 1
})

export default Fuel