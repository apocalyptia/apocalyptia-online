import RangedWeapon from './RangedWeapon'
import TwoHanded from '../../attributes/weapon/TwoHanded'


const BrowningABolt = new RangedWeapon({
	id: `dc61759b-4432-456b-91c5-981c3b34fc65`,
	name: `Browning A-Bolt`,
	sz: 4,
	dmg: 3,
	rng: 60,
	attr: [
		TwoHanded,
	],
	cap: 5,
	cal: `5.56`
})

export default BrowningABolt