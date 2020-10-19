import Ability from 'rules/abilities/Ability.js'
import PropSort from 'utils/PropSort.js'
import XP3Abilities from 'rules/abilities/XP3Abilities.js'
import XP6Abilities from 'rules/abilities/XP6Abilities.js'
import XP9Abilities from 'rules/abilities/XP9Abilities.js'
import XP12Abilities from 'rules/abilities/XP12Abilities.js'
import XP15Abilities from 'rules/abilities/XP15Abilities.js'
import XP18Abilities from 'rules/abilities/XP18Abilities.js'
import XP24Abilities from 'rules/abilities/XP24Abilities.js'
import XP30Abilities from 'rules/abilities/XP30Abilities.js'
import AppendToGUUID from 'utils/AppendToGUUID.js'
import RandomRoll from 'random/RandomRoll.js'


const abilityArray = [
	...XP3Abilities,
	...XP6Abilities,
	...XP9Abilities,
	...XP12Abilities,
	...XP15Abilities,
	...XP18Abilities,
	...XP24Abilities,
	...XP30Abilities
]

const completeAbilityListBuilder = (list) => {
	const newList = []
	for (let i = 0; i < list.length; ++i) {
		if (list[i].opts[0]) {
			for (let o = 0; o < list[i].opts.length; ++o) {
				let newGUUID = AppendToGUUID(list[i].id, list[i].opts[o].name)
				const newAbility = new Ability({
					id: newGUUID,
					name: list[i].name,
					desc: list[i].desc,
					max: list[i].max,
					xp: list[i].xp,
					taken: list[i].taken,
					opts: [
						list[i].opts[o],
					],
					selection: o
				})
				newList.push(newAbility)
			}
		} else {
			const newAbility = new Ability({
				id: list[i].id,
				name: list[i].name,
				desc: list[i].desc,
				max: list[i].max,
				xp: list[i].xp,
				taken: list[i].taken
			})
			newList.push(newAbility)
		}
	}
	return newList
}

export const Abilities = {
	name: `Abilities`,
	explanation: [
		`Abilities are Character upgrades purchased with XP.`
	],
	groups: [
		{
			name: 3,
			visible: false,
			list: XP3Abilities
		},
		{
			name: 6,
			visible: false,
			list: XP6Abilities
		},
		{
			name: 9,
			visible: false,
			list: XP9Abilities
		},
		{
			name: 12,
			visible: false,
			list: XP12Abilities
		},
		{
			name: 15,
			visible: false,
			list: XP15Abilities
		},
		{
			name: 18,
			visible: false,
			list: XP18Abilities
		},
		{
			name: 24,
			visible: false,
			list: XP24Abilities
		},
		{
			name: 30,
			visible: false,
			list: XP30Abilities
		},
	],
	list: abilityArray.sort((a, b) => PropSort(a, b, 'name')),
	masterList: completeAbilityListBuilder(abilityArray).sort((a, b) => PropSort(a, b, 'name')),
	remainingXP: (c) => {
		if (c.abilities.length) {
			c.props.experience.spent = c.abilities.reduce((t, n) => t += (n.taken * n.xp), 0)
		}
		c.props.experience.remaining = c.props.experience.score - c.props.experience.spent
		return c
	},
	random: function(c) {
		c = this.reset(c)
		while(c.props.experience.remaining > 0) {
			const remainingAbilities = this.masterList.filter(m => {
				return m.xp <= c.props.experience.remaining &&
					!c.abilities.includes(m)
			})
			if (remainingAbilities.length) {
				const a = RandomRoll(remainingAbilities)
				a.taken++
				c.abilities.push(a)
				c.props.experience.remaining -= a.xp
			}
			else break
		}
		return c
	},
	reset: function(c) {
		for (let a = 0; a < c.abilities.length; ++a) {
			c.abilities[a].taken = 0
		}
		c.abilities = []
		return c
	}
}

export const AbilitiesList = completeAbilityListBuilder(Abilities)

export default Abilities