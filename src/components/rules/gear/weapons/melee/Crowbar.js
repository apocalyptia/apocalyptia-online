import MeleeWeapon from 'gear/weapons/melee/MeleeWeapon.js'
import OneHanded from 'gear/attributes/weapon/OneHanded.js'


const Crowbar = new MeleeWeapon({
	id: `328afbe9-a374-486f-b41b-2f4e4e7f8958`,
	name: `Crowbar`,
	sz: 3,
	dmg: 3,
	rng: 2,
	attr: [
		OneHanded,
	]
})

export default Crowbar