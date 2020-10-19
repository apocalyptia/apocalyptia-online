import RangedWeapon from 'gear/weapons/ranged/RangedWeapon.js'
import TwoHanded from 'gear/attributes/weapon/TwoHanded.js'


const CompoundBow = new RangedWeapon({
	id: `8c4ba934-2850-4025-a9bf-188cc08a1c9c`,
	name: `Compound Bow`,
	sz: 3,
	dmg: 1,
	rng: 15,
	attr: [
		TwoHanded,
	],
	cap: 1,
	cal: `Arrow`
})

export default CompoundBow