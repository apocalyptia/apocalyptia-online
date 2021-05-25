import Gear from '../../../classes/Gear.js' 
import TwoHanded from '../attributes/TwoHanded.js' 
import Blunt from '../attributes/Blunt.js' 
import Slow from '../attributes/Slow.js' 

const Sledgehammer = new Gear({
	name: `Sledgehammer`,
	type: `Melee Weapon`,
	sz: 5,
	attr: [
		TwoHanded,
		Blunt,
		Slow,
	]
})
Sledgehammer.dmg = 4
Sledgehammer.rng = 2

export default Sledgehammer