import Gear from '/src/classes/Gear.js'
import TwoHanded from '/src/rules/gear/attributes/TwoHanded.js'

const Sword = new Gear({
	id: ``,
	name: `Sword`,
	type: `Melee Weapon`,
	sz: 3,
	attr: [
		TwoHanded,
	]
})
Sword.dmg = 4
Sword.rng = 2

export default Sword