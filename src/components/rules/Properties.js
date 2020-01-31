import Property from '../classes/Property'
import { Block, Dodge } from './Maneuvers'
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
		`[C x 3]. This is a measure of how many Wounds you can withstand. Damage causes Wounds. You start Bleeding 1 Wound/min when you have Wounds = [C]. The rate of Bleeding increases to 1 Wound/rnd and you fall Unconscious when you have Wounds = [C x 2]. You die when you have Wounds = [C x 3].`
	],
	formula: (character) => character.traits.constitution.score * 3,
	base: 3,
	score: 3
})

export const experience = new Property({
	name: `experience`,
	description: [
		`[B x 6] starting. Experience represents how much you have learned up to now. You accumulate additional Experience Points ("XP") = [Intellect] for each game session that you survive. You also get +1 XP every time you roll a Botch. The Narrator may also give bonus XP. You may spend your XP to buy Abilities to permanently improve your character. You may also spend 1XP per round to regain 1 Luck Point.`
	],
	formula: (character) => character.traits.brains.score * 3,
	base: 3,
	score: 3
})

export const intellect = new Property({
	name: `intellect`,
	description: [
		`XP = [B] is earned automatically for each game session that you survive.`
	],
	formula: (character) => character.traits.brains.score,
	base: 1,
	score: 1
})

export const luck = new Property({
	name: `luck`,
	description: [
		`Roll a d6 during Character Creation to determine your Luck. Luck rolls [d6 + current Luck points] are made to determine your fate in matters of pure chance. You may spend Luck Points in dramatic moments for various effects listed below. You may only spend 1 Luck Point per round. You regain 1 spent Luck Point at dawn each day. Spend a Luck Point to get one of the following effects:`,
		`• Take a re-roll with a +6 bonus.`,
		`• Take an extra Action on your turn.`,
		`• Give a Luck point to a Comrade.`
	],
	formula: () => d6()
})

export const psyche = new Property({
	name: `psyche`,
	description: [
		`[D x 3]. This is a measure of how much Trauma you can withstand. Any number of horrible events can cause Trauma. When Trauma = [D x 3] you lose all hope and seek out death at the earliest opportunity, unless someone can restrain you until you have Recovered from at least 1 Trauma.`
	],
	formula: (character) => character.traits.demeanor.score * 3,
	base: 3,
	score: 3
})

export const speed = new Property({
	name: `speed`,
	description: [
		`[A x 3]. This the Property that is rolled against all other participants at the beginning of each round of combat to determine the order in which each participant's turn is resolved. This is also a Character's personal Walking rate in yards per round at the cost of 1 Action. Characters can travel long distances overland at [Speed / 2] mph for up to [C x 3] hrs per day.`
	],
	formula: (character) => character.traits.agility.score * 3,
	base: 3,
	score: 3
})


export const PropertyExplanation = `Properties represent a variety of attributes that are derived from a Character's Traits and Skills.`


const Properties = [
	block,
	dodge,
	experience,
	intellect,
	luck,
	health,
	psyche,
	speed
]

export default Properties