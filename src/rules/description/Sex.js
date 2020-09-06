import Descriptor from './Descriptor'
import RandomSex from '../../helpers/random/RandomSex'


const Sex = new Descriptor({
	id: `d1b5c705-4bf0-4c17-a5c0-b6860abd2d36`,
	name: `Sex`,
	value: ``,
	random: (c) => {
		c.desc.sex.value = RandomSex()
		return c
	}
})

export default Sex