import Gear from 'classes/Gear.js'
import TwoHanded from 'rules/gear/attributes/TwoHanded.js'
import Rapid from 'rules/gear/attributes/Rapid.js'

const ArmaliteAR15 = new Gear({
	name: `Armalite AR-15 Rifle`,
	type: `Ranged Weapon`,
	sz: 3,
	attr: [
		TwoHanded,
		Rapid,
	]
})
ArmaliteAR15.dmg = 3
ArmaliteAR15.rng = 50
ArmaliteAR15.cap = 30
ArmaliteAR15.cal = `5.56`

export default ArmaliteAR15