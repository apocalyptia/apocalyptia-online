import Drug from '../../classes/gear/Drug'


export const Alcohol = new Drug({
	name: `Alcohol`,
	desc: [
		`Can be used as an Antibiotic or Fuel.`,
		`C9# or Unstable.`,
	],
	sz: 1,
	mix: 9,
	od: true
})

export const Antibiotic = new Drug({
	name: `Antibiotic`,
	desc: [
		`Prevents infection in Recovery for 1 day.`,
	],
	sz: 0,
	mix: 12,
	od: false
})

export const Hallucinogen = new Drug({
	name: `Hallucinogen`,
	desc: [
		`+1 Perform and Tame, -3 to all other rolls, and -1 Psyche.`,
	],
	sz: 0,
	mix: 15,
	od: false
})

export const Painkiller = new Drug({
	name: `Painkiller`,
	desc: [
		`Ignore 1 Pain penalty.`,
	],
	sz: 0,
	mix: 9,
	od: true
})

export const Sedative = new Drug({
	name: `Sedative`,
	desc: [
		`Demeanor#6/round to take any action.`,
	],
	sz: 0,
	mix: 12,
	od: true
})

export const Stimulant = new Drug({
	name: `Stimulant`,
	desc: [
		`Ignore Exhaustion penalties for 6hrs.`,
	],
	sz: 0,
	mix: 9,
	od: true
})


export default [
	Alcohol,
	Antibiotic,
	Hallucinogen,
	Painkiller,
	Sedative,
	Stimulant,
]



// OLD Damage ResistanceUGS
// new Drug(`Chloroform`,		  15, true,   `Liquid. C#12 or Unconscious. Takes d6 rounds.`,	   0)
// new Drug(`Cyanide`,			 18, true,   `Pill. d6 Torso DMG/round for 5 rounds.`,				0)
// new Drug(`Epinephrine`,		 15, true,   `Injection. Resuscitate within C+3mins.`,		  0)
// new Drug(`Iodine`,			  6,  false,  `Purify 1gal of Water. Prevents Radiation.`,		0)
// new Drug(`Potassium Chloride`,  18, true,   `Injection. d6 Torso DMG/min for 5mins.`,		   0)
// new Drug(`Sodium Pentothal`,	15, true,   `Injection. -6 Entertain(Lie).`,					0)