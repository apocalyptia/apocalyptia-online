import Skill from './Skill'
import Specialty from './Specialty'


const Acrobatics = new Skill({
	name: `Acrobatics`,
	desc: [
		`Gymnastic prowess.`,
	],
	parent: `Agility`,
	diff: 6,
	specs: {
		dodge: new Specialty({
			name: `Dodge`,
			desc: [
				`Roll Acrobatics(Dodge) vs [Melee or Ranged].`,
				`As part of a Dodge, you may drop Prone for free if you wish.`,
				`Reflexive Dodge is your Dodge score with no roll.`,
			]
		}),
		jump: new Specialty({
			name: `Jump`,
			desc: [
				`Running Jump distance is yards = [Agility].`,
				`Vertical Jump distance is [Agility x 6] inches.`,
			]
		})
	}
})

export default Acrobatics