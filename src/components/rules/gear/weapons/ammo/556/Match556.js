import Ammo from 'gear/weapons/ammo/Ammo.js'
import Match from 'gear/attributes/weapon/Match.js'


const Match556 = new Ammo({
	id: `5bd2b42f-78bb-4b7a-a4c1-86ba01caddd0`,
	name: `5.56mm Match`,
	desc: [
		`Competition-grade ammunition.`,
	],
	sz: 0.02,
	cal: `5.56`,
	attr: [
		Match,
	]
})

export default Match556