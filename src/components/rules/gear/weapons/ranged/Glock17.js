import RangedWeapon from 'gear/weapons/ranged/RangedWeapon.js'
import TwoHanded from 'gear/attributes/weapon/TwoHanded.js'
import Rapid from 'gear/attributes/weapon/Rapid.js'


const Glock17 = new RangedWeapon({
	id: `5f42d732-9acb-40b6-b74d-fc2e42e107c6`,
	name: `Glock 17`,
	sz: 1,
	dmg: 1,
	rng: 10,
	attr: [
		TwoHanded,
		Rapid,
	],
	cap: 17,
	cal: `9mm`
})

export default Glock17