import Rule from '/src/classes/Rule.js'

const Psyche = new Rule({
	name: `Psyche`,
	desc: [
		`Psyche = Demeanor x 3`,
		`Psyche is a measure of how much Trauma your mind can withstand.`,
	],
	formula: (c) => {
		c.properties.psyche.score = c.traits.demeanor.score * 3
		return c
	},
	type: `Property`
})

export default Psyche