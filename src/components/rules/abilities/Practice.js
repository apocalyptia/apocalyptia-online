import Ability from './Ability'
import Skills from '../skills/Skills'


const Practice = new Ability({
	name: `Practice`,
	desc: [
		`+1 to a Skill (up to the parent Trait).`,
	],
	max: 1,
	xp: 6,
	opts: Skills.list
})

export default Practice