export default class Rule {
	constructor(name=``, description=[``], subrules=[], table=false, visible=false) {
		this.name = name
		this.description = description
		this.subrules = subrules
		this.table = table
		this.visible = visible
	}
}

