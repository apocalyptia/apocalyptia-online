import RangedWeapon from './RangedWeapon'
import TwoHanded from '../../attributes/weapon/TwoHanded'
import Rapid from '../../attributes/weapon/Rapid'


const Ruger1022 = new RangedWeapon({
	id: `94dc2629-a460-4bdc-a90f-0ade229af021`,
	name: `Ruger 10/22`,
	sz: 3,
	dmg: 1,
	rng: 30,
	attr: [
		TwoHanded,
		Rapid,
	],
	cap: 10,
	cal: `.22`
})

export default Ruger1022