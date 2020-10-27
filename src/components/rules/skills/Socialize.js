import Skill from 'skills/Skill.js'
import Stat from 'rules/Stat.js'

const Socialize = new Skill({
	id: `aa5d33c4-d9ec-4974-8064-55aba4e75d88`,
	name: `Socialize`,
	desc: [
		`Alter a person’s Attitude by one step.`,
	],
	parent: `Demeanor`,
	diff: `Demeanor`,
	specs: {
		persuade: new Stat({
			id: `8ad47e9b-a223-455f-9499-72a012509577`,
			name: `Persuade`,
			desc: [
				`(d6mins) Target seriously considers your opinion.`,
			]
		}),
		therapy: new Stat({
			id: `83398ae1-5fad-45ef-a523-09d2b403ac7c`,
			name: `Therapy`,
			desc: [
				`Heal 1 Trauma`,
				`Cannot be performed again on the same day.`,
				`d6 Trauma on a Botch.`,
			]
		})
	}
})

export default Socialize