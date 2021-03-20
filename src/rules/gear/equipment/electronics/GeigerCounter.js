import Gear from '/src/classes/Gear.js'

const GeigerCounter = new Gear({
	id: ``,
	name: `Geiger Counter`,
	type: `Electronics`,
	desc: [
		`Science 6# to detect Radiation in 1yd.`,
	],
	sz: 1
})
GeigerCounter.dur = 28800

export default GeigerCounter