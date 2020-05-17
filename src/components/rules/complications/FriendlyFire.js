import Rule from '../../rules/Rule'


const FriendlyFire = new Rule({
	name: `Friendly Fire`, 
	desc: [
		`-3 Ranged against targets within 1yd of your ally.`,
		`If the Ranged Attack Fails, re-roll the Ranged Attack vs the ally’s Reflexive Dodge.`,
	]
})

export default FriendlyFire