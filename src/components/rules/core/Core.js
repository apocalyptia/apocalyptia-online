import CoreList from './CoreList'


export default {
	name: `Core`,
	explanation: [
		`To attempt a difficult action, roll one six-sided die (“d6”) to see how well your efforts worked out for you.`,
		`Your Character’s score in a relevant Trait or Skill is added to the d6 roll to improve your chances of succeeding.`,
		`There are many other modifiers that may add or subtract from your result.`,
		`Modifiers are applied by the Narrator.`,
		`The formula for a roll is shown in [brackets].`,
		`Calculate the Result of a d6 roll as follows:`,
		`[d6 Roll + Score ± Modifiers] = Result`,
	],
	list: CoreList
}