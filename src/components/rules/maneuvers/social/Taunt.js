import Rule from 'rules/Rule.js'

const Taunt = new Rule({
	id: `a00cbcf0-3593-493b-9fd8-575846d182bb`,
	name: `Taunt`,
	desc: [
		`Roll [Leadership vs Demeanor].`,
		`Provoke the enemy into exclusively attacking you.`,
		`The degree of Success is a penalty to the loser’s next roll.`,
		`The enemy is Stunned for 1 round if [penalty > enemy’s Demeanor].`,
	]
})

export default Taunt