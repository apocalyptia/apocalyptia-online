import Gear from 'gear/Gear.js'
import TwoHanded from 'attributes/TwoHanded.js'

const SavageMkII = new Gear({
	id: `8465b895-4bd0-4c54-b1bb-f411a962ddbb`,
	name: `Savage Mk.II`,
	sz: 3,
	attr: [
		TwoHanded,
	]
})
SavageMkII.dmg = 1
SavageMkII.rng = 40
SavageMkII.cap = 10
SavageMkII.cal = `.22`

export default SavageMkII