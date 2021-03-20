import Gear from '/src/classes/Gear.js'
import ColdResistance from '/src/rules/gear/attributes/ColdResistance.js'
import FireResistance from '/src/rules/gear/attributes/FireResistance.js'
import Mask from '/src/rules/gear/attributes/Mask.js'

const FirefighterSuit = new Gear({
	id: ``,
	name: `Firefighter Suit`,
	sz: 5,
	attr: [
		ColdResistance,
		FireResistance,
		Mask,
	],
	type: `Armor`
})
FirefighterSuit.dr = 1
FirefighterSuit.loc = `Full Body`

export default FirefighterSuit