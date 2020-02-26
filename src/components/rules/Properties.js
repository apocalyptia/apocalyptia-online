import Property from '../classes/Property'
import { Block, Dodge } from './maneuvers/DefensiveManeuvers'
import { d6 } from '../helpers/Random'

export const block = new Property({
	name: `block`,
	description: [ ...Block.description ],
	formula: (character) => character.skills.melee.score
})

export const dodge = new Property({
	name: `dodge`,
	description: [ ...Dodge.description ],
	formula: (character) => character.skills.acrobatics.score
})

export const health = new Property({
	name: `health`,
	description: [
		`[Constitution x 3]. This is a measure of how many Wounds you can withstand. Damage is the cause of most Wounds.`,
		`You start Bleeding 1 Wound/min when you have Wounds = [Constitution].`,
		`The rate of Bleeding increases to 1 Wound/round and you fall Unconscious when you have Wounds = [Constitution x 2].`,
		`You die when you have Wounds = [Constitution x 3].`,
	],
	formula: (character) => character.traits.constitution.score * 3,
	base: 3,
	score: 3
})

export const experience = new Property({
	name: `experience`,
	description: [
		`[Brains x 6] starting. Experience represents how much you have learned up to now.`,
		`You accumulate additional Experience Points ("XP") = [Intellect] for each game session that you survive.`,
		`You also get +1 XP every time you roll a Botch. The Narrator may also give bonus XP.`,
		`You may spend XP to buy Abilities to improve your Character. You may also spend 1XP per round to regain 1 Luck Point.`,
	],
	formula: (character) => character.traits.brains.score * 3,
	score: 3
})

export const intellect = new Property({
	name: `intellect`,
	description: [
		`XP = [Brains] is earned automatically for each game session that you survive.`,
	],
	formula: (character) => character.traits.brains.score,
	base: 1,
	score: 1
})

export const luck = new Property({
	name: `luck`,
	description: [
		`Roll a d6 during Character Creation to determine your Luck. Luck rolls [d6 + current Luck points] are made to determine your fate in matters of pure chance.`,
		`You may spend 1 Luck Point per round in a dramatic moment for one of the three effects listed below. You regain 1 spent Luck Point at dawn each day.`,
		`• Re-roll the last die you rolled with a +6 bonus.`,
		`• Take an extra Action on your turn.`,
		`• Give a Luck point to a Comrade.`,
	],
	formula: () => d6()
})

export const psyche = new Property({
	name: `psyche`,
	description: [
		`[Demeanor x 3]. This is a measure of how much Trauma you can withstand. Any number of horrible events can cause Trauma.`,
		`When Trauma = [Demeanor x 3] you lose all hope and seek out death at the earliest opportunity, unless someone can restrain you until you have Recovered from at least 1 Trauma.`,
	],
	formula: (character) => character.traits.demeanor.score * 3,
	base: 3,
	score: 3
})

export const speed = new Property({
	name: `speed`,
	description: [
		`[Agility x 3]. Roll this Property against all other participants at the beginning of each round of combat to determine the order in which turns are resolved.`,
		`This is also the number of yards you can Walk as 1 Action.`,
		`When traveling long distances overland, you can March at [Speed / 2] mph for up to [Constitution x 3] hrs per day.`,
	],
	formula: (character) => character.traits.agility.score * 3,
	base: 3,
	score: 3
})


export const PropertyExplanation = `Properties represent a variety of attributes that are derived from a Character's Traits and Skills.`


export default [
	block,
	dodge,
	experience,
	intellect,
	luck,
	health,
	psyche,
	speed
]