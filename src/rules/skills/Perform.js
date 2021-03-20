import Rule from '/src/classes/Rule.js'

const Perform = new Rule({
	name: `Perform`,
	desc: [
		`Captivating an audience.`,
	],
	type: `Skill`
})
Perform.parent = `Demeanor`
Perform.diff = `Perception`
Perform.specs = {
	distract: new Rule({
		id: `e0029c54-6812-4b0d-b143-f1f8dbc806b0`,
		name: `Distract`,
		desc: [
			`Target is Defenseless for 1 round.`,
		]
	}),
	deceive: new Rule({
		id: `f6ded447-ec92-4720-8f68-812e8d3a02f5`,
		name: `Deceive`,
		desc: [
			`Target believes your plausible falsehood.`,
		]
	})
}

export default Perform