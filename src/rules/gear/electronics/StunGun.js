import Electronic from '/src/classes/gear/Electronic.js'

const StunGun = new Electronic({
	name: `Stun Gun`,
	type: `Electronics`,
	desc: [`Melee Attack.`, `C9# or Stun next Round.`],
	sz: 1
})
StunGun.dur = 120

export default StunGun
