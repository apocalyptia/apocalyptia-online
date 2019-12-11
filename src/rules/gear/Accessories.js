import Gear from './Gear.js'

class Accessory extends Gear {
	constructor(name, description, sz) {
		super(name, description, sz)
	}
}

export const AccessoryList = [
	new Accessory(`Bayonet`,			`Knife. +1 DMG and Pierce for MATKs.`,				1),
	new Accessory(`Bipod`,				`Ignore Size requirement. 1rnd setup.`,				1),
	new Accessory(`Drum Magazine`,		`Gun specific. 3x Ammo magazine capacity.`,			1),
	new Accessory(`Foregrip`,			`-1 Size requirement for 2h Gun.`,					0),
	new Accessory(`Holosight`,			`+1 RATK.`,											0),
	new Accessory(`Laser`,				`+1 RATK. -6 RATK to Blind for d6rnds.`,			0),
	new Accessory(`Scope`,				`+3 Aimed RATKs and Perception(See).`,				1),
	new Accessory(`Single-Point Sling`,	`Draw or stow a 2h Gun without using an Action.`,	0),
	new Accessory(`Suppressor`,			`Firing a Gun does not break Concealment.`,			0)
]
