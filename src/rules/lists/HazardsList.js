import Alphabetize from 'utils/sorting/Alphabetize.js'
import Burning from 'rules/hazards/Burning.js'
import DiseasesList from 'rules/lists/DiseasesList.js'
import Falling from 'rules/hazards/Falling.js'
import FriendlyFire from 'rules/hazards/FriendlyFire.js'

export default {
	name: `Hazards`,
	list: Alphabetize([
		Burning,
		...DiseasesList.list,
		Falling,
		FriendlyFire,
	])
}