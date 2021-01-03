import Ability from 'classes/Ability.js'

const Parry = new Ability({
	name: `Parry`,
	desc: [
		`Free Block Action once per round.`,
	],
	max: 1,
	xp: 12
})

export default Parry