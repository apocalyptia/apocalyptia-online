export default (char) => {

	let c = {}

	c.Mi = char.meta.id
	c.Mu = char.meta.user
	c.Mc = char.meta.created
	c.Mm = char.meta.modified
	c.Mn = char.meta.notes
	c.St = char.meta.status
	c.Sp = char.meta.step
	c.Cm = char.meta.coordinates.map
	c.Cx = char.meta.coordinates.x
	c.Cy = char.meta.coordinates.y
	c.Cz = char.meta.coordinates.z
	c.Da = char.description.age.value
	c.Dn = char.description.name.value
	c.Dh = char.description.hair.value
	c.De = char.description.height.value
	c.Ds = char.description.sex.value
	c.Dk = char.description.skin.value
	c.Dw = char.description.weight.value
	c.Ta = char.traits.agility.score
	c.Tb = char.traits.brains.score
	c.Tc = char.traits.constitution.score
	c.Td = char.traits.demeanor.score
	c.ac = char.skills.acrobatics.score
	c.la = char.skills.larceny.score
	c.ra = char.skills.ranged.score
	c.st = char.skills.stealth.score
	c.md = char.skills.medicine.score
	c.pe = char.skills.perception.score
	c.sc = char.skills.science.score
	c.su = char.skills.survival.score
	c.at = char.skills.athletics.score
	c.bu = char.skills.build.score
	c.dr = char.skills.drive.score
	c.me = char.skills.melee.score
	c.le = char.skills.leadership.score
	c.pr = char.skills.perform.score
	c.so = char.skills.socialize.score
	c.ta = char.skills.tame.score
	c.Pl = char.properties.luck.current
	c.Pp = char.properties.psyche.current
	c.hD = char.health.head.current
	c.rA = char.health.rightArm.current
	c.lA = char.health.leftArm.current
	c.tO = char.health.torso.current
	c.lL = char.health.leftLeg.current
	c.rL = char.health.rightLeg.current
	c.Ab = char.abilities
	c.Ga = char.gear.armor.inventory
	c.Gm = char.gear.melee.inventory
	c.Gr = char.gear.ranged.inventory
	c.Go = char.gear.ammo.inventory
	c.Ge = char.gear.equipment.inventory

	return c

}