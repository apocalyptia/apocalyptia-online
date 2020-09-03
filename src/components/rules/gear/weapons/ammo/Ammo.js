import CombatGear from '../../CombatGear'

export default class Ammo extends CombatGear {
	constructor({
		id,
		name,
		desc,
		sz,
		qty,
		attr,
		cal=``
	}) {
		super({
			id,
			name,
			desc,
			sz,
			qty,
			attr
		})
		this.cal = cal
	}
}