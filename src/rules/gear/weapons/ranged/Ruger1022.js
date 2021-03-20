import Gear from '/src/classes/Gear.js'
import TwoHanded from '/src/rules/gear/attributes/TwoHanded.js'
import Rapid from '/src/rules/gear/attributes/Rapid.js'

const Ruger1022 = new Gear({
	id: ``,
	name: `Ruger 10/22 Rifle`,
	type: `Ranged Weapon`,
	sz: 3,
	attr: [
		TwoHanded,
		Rapid,
	]
})
Ruger1022.dmg = 1
Ruger1022.rng = 30
Ruger1022.cap = 10
Ruger1022.cal = `.22`

export default Ruger1022