import Gear from 'classes/Gear.js'

const Stethoscope = new Gear({
	name: `Stethoscope`,
	type: `Medical`,
	desc: [
		`+1 Medicine.`,
		`Perception(Hear) 6# through doors.`,
	],
	sz: 1
})

export default Stethoscope