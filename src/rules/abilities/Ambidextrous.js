import Ability from '../../classes/Ability.js'

const Ambidextrous = new Ability({
	name: `Ambidextrous`,
	desc: [`Off-hand penalty is -1 instead of -3.`],
	max: 1,
	experience: 18
})

export default Ambidextrous
