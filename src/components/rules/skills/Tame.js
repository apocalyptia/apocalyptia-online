import Skill from './Skill'
import Specialty from './Specialty'


const Tame = new Skill({
	id: `1e616ba5-99fb-4f11-853f-fe938eed016b`,
	name: `Tame`,
	desc: [
		`Alter an animal’s Attitude by one step.`,
	],
	parent: `Demeanor`,
	diff: `Demeanor`,
	specs: {
		command: new Specialty({
			id: `81e355cf-c841-4c88-802b-1d4c170ef741`,
			name: `Command`,
			desc: [
				`Animal obeys your command.`,
			]
		}),
		train: new Specialty({
			id: `ee8cc929-151e-4f6c-abff-293379d5ee53`,
			name: `Train`,
			desc: [
				`(1wk) Animals learn commands = [its Brains x 2].`,
			]
		})
	}
})

export default Tame