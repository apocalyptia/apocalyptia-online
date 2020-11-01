import Rule from 'classes/Rule.js'
import ConstitutionSkillsList from 'lists/skills/ConstitutionSkillsList.js'

const Constitution = new Rule({
	id: `da48b9f5-de7d-44b3-bb24-392e69bebe90`,
	name: `Constitution`,
	desc: [
		`Constitution is a Character’s talent for physical power and durability.`,
		`High Constitution indicates good health, high stamina, and strong muscles.`,
		`This Trait is a factor in the Health and Block Properties.`,
		`Constitution is the parent Trait for the following Skills: ${ConstitutionSkillsList.map(skill => skill.name).join(', ')}.`,
	],
	type: `Trait`
})

export default Constitution