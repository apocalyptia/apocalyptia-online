import Ability from './Ability'
import Skills from '../skills/Skills'


const Specialize = new Ability({
	id: `12c0ab2c-ffc9-40de-9368-b8bf34301515`,
	name: `Specialize`,
	desc: [
		`+1 to a Skill Specialty.`,
	],
	max: 1,
	xp: 3,
	opts: Skills.specs
})

export default Specialize