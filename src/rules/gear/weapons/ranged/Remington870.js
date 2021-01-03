import Gear from 'classes/Gear.js'
import TwoHanded from 'rules/gear/attributes/TwoHanded.js'
import Scatter from 'rules/gear/attributes/Scatter.js'

const Remington870 = new Gear({
	name: `Remington 870 Shotgun`,
	type: `Ranged Weapon`,
	sz: 4,
	attr: [
		TwoHanded,
		Scatter,
	]
})
Remington870.dmg = 5
Remington870.rng = 15
Remington870.cap = 6
Remington870.cal = `12g`

export default Remington870