import RangedWeapon from './RangedWeapon'
import TwoHanded from '../../attributes/weapon/TwoHanded'


const RecurveBow = new RangedWeapon({
	id: `6852a491-fb8d-4fc3-a35e-2986ee70cd3f`,
	name: `Recurve Bow`,
	sz: 2,
	dmg: 1,
	rng: 10,
	attr: [
		TwoHanded,
	],
	cap: 1,
	cal: `Arrow`
})

export default RecurveBow