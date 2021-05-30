import Character from '/src/classes/Character.js'

export default (c) => {
	let char = new Character()

	char.meta.id = c.Mi
	char.meta.user = c.Mu
	char.meta.created = c.Mc
	char.meta.modified = c.Mm
	char.meta.notes = c.Mn
	char.meta.status = c.Sa
	char.meta.step = c.Se
	char.meta.coordinates.m = c.Cm
	char.meta.coordinates.f = c.Cf
	char.meta.coordinates.x = c.Cx
	char.meta.coordinates.y = c.Cy
	char.meta.coordinates.z = c.Cz
	char.description.age.value = c.Da
	char.description.name.value = c.Dn
	char.description.hair.value = c.Dh
	char.description.height.value = c.De
	char.description.sex.value = c.Ds
	char.description.skin.value = c.Dk
	char.description.weight.value = c.Dw
	char.traits.agility.score = c.Ta
	char.traits.brains.score = c.Tb
	char.traits.constitution.score = c.Tc
	char.traits.demeanor.score = c.Td
	char.skills.acrobatics.score = c.ac
	char.skills.larceny.score = c.la
	char.skills.projectile.score = c.ra
	char.skills.stealth.score = c.st
	char.skills.medicine.score = c.md
	char.skills.perception.score = c.pe
	char.skills.science.score = c.sc
	char.skills.survival.score = c.su
	char.skills.athletics.score = c.at
	char.skills.build.score = c.bu
	char.skills.drive.score = c.dr
	char.skills.melee.score = c.me
	char.skills.leadership.score = c.le
	char.skills.perform.score = c.pr
	char.skills.socialize.score = c.so
	char.skills.tame.score = c.ta
	char.abilities = c.Ab
	char.gear.armor.inventory = c.Ga
	char.gear.melee.inventory = c.Gm
	char.gear.projectile.inventory = c.Gr
	char.gear.ammo.inventory = c.Go
	char.gear.equipment.inventory = c.Ge

	char.updateProperties()

	char.properties.health.locations.head.current = c.hD
	char.properties.health.locations.leftArm.current = c.lA
	char.properties.health.locations.leftLeg.current = c.lL
	char.properties.health.locations.rightArm.current = c.rA
	char.properties.health.locations.rightLeg.current = c.rL
	char.properties.health.locations.torso.current = c.tO
	char.properties.luck.current = c.Pl
	char.properties.psyche.current = c.Pp

	return char
}
