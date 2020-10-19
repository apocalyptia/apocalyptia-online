import Maneuver from 'rules/maneuvers/Maneuver.js'


const Protect = new Maneuver({
	id: `a484d274-5d64-46a8-99be-08dda62e541a`,
	cat: `Defensive`,
	name: `Protect`, 
	desc: [
		`You become the new target of all Attacks targeting someone you choose within 1yd of you for 1 round.`,
		`This does not take an Action to declare, but any Defense rolls you make take Actions as usual.`,
	]
})

export default Protect