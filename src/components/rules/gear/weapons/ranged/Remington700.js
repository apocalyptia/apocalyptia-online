import RangedWeapon from 'gear/weapons/ranged/RangedWeapon.js'
import TwoHanded from 'gear/attributes/weapon/TwoHanded.js'


const Remington700 = new RangedWeapon({
	id: `6398a22b-e4a9-4c9f-a984-3bf6aaa09146`,
	name: `Remington 700`,
	sz: 4,
	dmg: 3,
	rng: 100,
	attr: [
		TwoHanded,
	],
	cap: 5,
	cal: `.308`
})

export default Remington700