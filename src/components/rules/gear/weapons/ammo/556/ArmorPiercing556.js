import Gear from 'gear/Gear.js'
import Pierce from 'attributes/Pierce.js'

const ArmorPiercing556 = new Gear({
	id: `c911b821-137b-4e08-8685-84d82c854b69`,
	name: `5.56mm Armor Piercing`,
	desc: [
		`Battlefield ammunition.`,
	],
	sz: 0.02,
	attr: [
		Pierce,
	]
})
ArmorPiercing556.cal = `5.56`

export default ArmorPiercing556