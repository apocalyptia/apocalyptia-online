import Ability from './Ability'
import Skills from '../skills/Skills'


const Practice = new Ability({
	id: `2e27c3fd-aaf3-4c95-9d3a-9a0ad27abdff`,
	name: `Practice`,
	desc: [
		`+1 to a Skill (up to the parent Trait).`,
	],
	max: 1,
	xp: 6,
	opts: Skills.list
})

export default Practice