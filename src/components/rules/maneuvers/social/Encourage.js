import Rule from 'rules/Rule.js'

const Encourage = new Rule({
	id: `46b57ab5-e31d-4d60-902b-b9f56d95168d`,
	name: `Encourage`,
	desc: [
		`Roll [Leadership vs groups’ total Demeanor scores].`,
		`The group gets a bonus = [your Demeanor] for one specific roll each.`,
		`A Botch is -1 to all rolls.`,
	]
})

export default Encourage