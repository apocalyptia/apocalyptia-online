import Rule from 'classes/Rule.js'
import ConstitutionSkillsList from 'rules/lists/skills/ConstitutionSkillsList.js'

const Constitution = new Rule({
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