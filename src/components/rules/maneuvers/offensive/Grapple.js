import Rule from 'rules/Rule.js'
import Grab from 'maneuvers/offensive/Grab.js'
import Hostage from 'maneuvers/offensive/Hostage.js'
import Tackle from 'maneuvers/offensive/Tackle.js'
import Throw from 'maneuvers/offensive/Throw.js'

const Grapple = new Rule({
	id: `974d2b5c-67e0-4e5d-8dd8-883d98a5926e`,
	name: `Grapple`,
	desc: [
		`There are three steps to Grappling:`,
		`1) Grab`,
		`2) Restrain`,
		`3) Pin`,
		`To Grapple an opponent, you must have at least one free hand and make a Melee(Unarmed) Attack roll, which does no Damage.`,
		`With a Successful Grapple roll, that combatant may alter the current Grapple step by 1.`,
		`With each new Grapple roll, the difference between the combatants' results is a modifier to the Attacker's next Grapple roll.`,
		`Each round the Attacker must choose to either spend 1 Action just to retain the Grapple, make another Grapple roll, or let go.`,
		`When the Defender reduces the Grapple step to 0 they escape.`,
	]
})

Grapple.subrules = [
	Grab,
	Hostage, 
	Tackle, 
	Throw
]

export default Grapple