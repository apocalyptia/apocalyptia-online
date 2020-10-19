import Bomb from 'gear/weapons/bombs/Bomb.js'
import Blind from 'rules/status/Blind.js'
import Stun from 'rules/status/Stun.js'
import Asphyxiation from 'rules/needs/Asphyxiation.js'


const TeargasGrenade = new Bomb({
	id: `892817b8-625f-4ef8-a6be-08716a6267c5`,
	name: `Teargas Grenade`,
	desc: [
		`Non-lethal chemical irritant grenade.`,
	],
	sz: 1,
	dmg: `1`,
	rng: `1yd/round`,
	attr: [
		Blind,
		Stun,
		Asphyxiation,
	],
	fuse: `1 round`,
	dur: `d6mins`,
	mix: 15
})

export default TeargasGrenade